({

    baseUrl: '../js/',
    out : 'index-build.js',
    name: 'testRequire/index',

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

})