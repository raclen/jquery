
/*
jquery.one.js byz 之涯
 插件就像是对函数一样，写好的东西，换几个参数调用
 这里需要注意的是$.extend的用法，后面的覆盖前面的，所以我们可以设置默认值
 其它也没什么好说的，插件还是比较简单的
 */


;
(function ($) {
    $.fn.fax = function (options) {

        var defaults = {showfun: "click", content: "content"};
        var opts = $.extend(defaults, options);//extend后面的会覆盖前面的值
        var obj = $(this);
        var _li = obj.find("ul li");
        $("." + opts.content).find("div").eq(0).show();
        _li.bind(opts.showfun, function () {
            var _index = $(this).index();
            $("." + opts.content).find("div").eq(_index).show().siblings().hide();

        })
    }
})(jQuery);



