/**
 * Created by XIAODI001 on 2015/2/10.
 */
var tpl = {
    html : function (tpl, data) {
        return this.func(tpl)(data);
    },
    func : function (tpl) {
        var js = this.compile(tpl);
        return new Function('tplData', "var _h='';function _w(s){ _h+=s;}" + js + "return _h;");
    },
    compile : function (tpl) {
        function parseLine(line) {
            return "_w('" + line.replace(/'/g, "\\'").replace(/@(\{.+?\}|[\w\.\[\]\(\)]+)/g, function (match, exp, index, source) {
                    exp = exp.replace(/\\'/g, "'");
                    if (source.charAt(index - 1) == '\\') {
                        return "@" + exp;
                    }
                    if (exp.charAt(0) == '{') {
                        exp = exp.substr(1, exp.length - 2);
                    }
                    if (exp.charAt(0) == '.') {
                        return "'+(" + obj + exp + ")+'";
                    } else {
                        var index = exp.lastIndexOf('.');
                        if (index > 0) {
                            obj = exp.substring(0, index);
                        }
                        return "'+(" + exp + ")+'";
                    }
                }) + "');";
        }
        var obj = 'item',
            result = '',
            lines = tpl.split('\n'),
            len = lines.length,
            i = -1,
            first;
        while (++i < len) {
            var line = lines[i];
            line = line.replace(/^\s*((?:[\S\s]*\S)?)\s*$/, '$1');
            first = line.charAt(0);
            if (first == '<' || first == '@') {
                result += parseLine(line);
            } else if (first == '!' && line.charAt(1) == '!') {
                result += "_w('" + line.substr(2) + "');";
            } else if (first == '!') {
                result += parseLine(line.substr(1));
            } else {
                result += line;
            }
        }
        return result;
    },
    getJSON : function (url, callback) {
        var req = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                var json = eval("(" + req.responseText + ")");
                callback(json);
            }
        }
        try {
            req.open("GET", url, true);
            req.send();
        } catch (e) {}
    },
    render : function () {
        var scripts = document.getElementsByTagName("script"),
            tpls = [],
            len = scripts.length;
        for (var i = 0; i < len; i++) {
            if (scripts[i].getAttribute("type") == "tpl" && scripts[i].getAttribute("norender") === null) {
                tpls.push(scripts[i]);
            }
        }
        var wrap = document.createElement("div"),
            temp,
            template;
        function setUI(node, data) {
            var parent = node.parentNode,
                childs = wrap.childNodes;
            wrap.innerHTML = tpl.func(node.innerHTML)(data);
            while (childs.length != 0) {
                parent.insertBefore(childs[0], node);
            }
            parent.removeChild(node);
        }
        len = tpls.length;
        for (var i = 0; i < len; i++) {
            temp = tpls[i];
            var dataurl = temp.getAttribute("data");
            if (dataurl) {
                (function (node) {
                    tpl.getJSON(dataurl, function (data) {
                        setUI(node, data);
                    });
                })(temp);
            } else {
                setUI(temp);
            }
        }
    }
}