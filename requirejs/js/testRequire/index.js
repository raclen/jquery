/**
 * Created by xiamu on 2014/10/25.
 * 入口文件
 */
require.config({
    //配置路径
    baseUrl: 'js/',
    paths:{
        'Zepto':'common/zepto/zepto.min',
        'fx' : 'common/zepto/fx',

        //seven
        'seven':'common/seven/seven',
        'SE.util':'common/seven/SE.util',
        'popup':'common/seven/SE.popup',
        //SE.util
        'parseURL':'common/seven/util/parseURL'
    },
    //配置依赖关系
    shim:{

        'Zepto':{
            exports:'$'//起别名
        },
        'fx' :{
            deps :['Zepto']
        },
        'seven' :{
            deps :['Zepto','fx']
        },
        'SE.util':{
            deps:['seven']
        },
        'popup':{
            deps:['seven']
        },
        'parseURL':{
            deps:['SE.util']
        }
    }
});
require(['Zepto','popup','parseURL'],function(){

    alert("hello");
    $('#btn').click(function(){
        SE.popup({msg:"hello requirejs"});

    })
})