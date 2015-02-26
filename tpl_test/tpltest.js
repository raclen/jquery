/**
 * Created by XIAODI001 on 2015/2/10.
 */

define(function(require,exports,module){

    var tpl = require('requirejs/js/tpl');
    var template = {
        tplinfo : require('/jquery/tpl_test/tpl/tpl-info.js')
    }
    var users=[
        {
            name:'name',
            age:12,
            sex:'boy',
            email:'nimei'
        }, {
            name:'name1',
            age:12,
            sex:'boy',
            email:'nimei'
        }
    ];
    debugger
    var html =  tpl.render(template.tplinfo,users);

    console.log(html)
})