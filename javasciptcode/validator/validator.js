/**
 * Created by XIAODI001 on 2015/1/12.
 */
/**
 * js-策略模式 处理特定任务选择最佳策略时仍保持相同的接口
 * 策略模式定义了算法家族，分别封装起来，让他们之间可以互相替换，此模式让算法的变化不会影响到使用算法的客户
 * 以表单验证为例
 */

// 举例 常见的验证表单字段经常是if else 或者 switch case
validater = {
    validate: function (value, type) {
        switch (type) {
            case 'isNonEmpty ':
                break; // NonEmpty 验证结果
            case 'isNumber ':
                break; // Number 验证结果
            case 'isAlphaNum ':
                break; // AlphaNum 验证结果
            default:
                return true;
        }
    }
};
// 测试
// alert(validater.validate("123", "isNonEmpty"));

// 而策略模式， 算法封装 -> 需要验证的数据 -> 根据数据配置验证器规则(策略模式的体现)
// 1.把验证的算法分别封装起来,让统一的验证器(validator)来分别处理
// 2.开发者只需提供需要验证的表单数据(可以是一个js对象)算法
// 3.开发者根据需要验证的数据(这里指表单数据)，设置验证器有效规则的可接受规则(为了使验证器知道最好的策略)


// 验证器
var validator = {

    // 所有用于验证规则的处理程序
    arithmetic : {},

    // 错误消息，在当前验证会话中的
    messages : [],

    // 当前验证的配置   名称： 验证类型
    config : {},

    // 接口方法 传入的参数是 key => value对
    validate : function(data) {
        var i, msg, type, checker, result_ok;

        // 重置所有消息
        this.messages = [];

        for( i in data) {
            if(data.hasOwnProperty(i)) {

                // 根据key查询是否有存在的验证规则
                type = this.config[i];

                // 获取验证规则的验证处理程序
                checker = this.arithmetic[type];

                if(!type) {
                    continue; // 如果验证规则不存在，则不处理
                }

                if(!checker) { // 如果验证处理程序不存在，抛出异常
                    throw {
                        name: "ValidationError",
                        message: "没有处理程序来验证类型 " + type
                    };
                }

                // isNonEmpty.validate('Tom')....
                result_ok = checker.validate(data[i]);

                if(!result_ok) {
                    msg = '无效值为 *' + i + "* ," + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },

    // 帮助程序
    hasErrors : function() {
        return this.messages.length !== 0;
    }
};

// 算法封装

// 检测给定的值是否不为空
validator.arithmetic.isNonEmpty = {
    validate : function(value) {
        return value !== '';
    },
    instructions : '传入的值不能为空'
};

// 检测值是否是一个数字
validator.arithmetic.isNumber = {
    validate : function(value) {
        return !isNaN(value);
    },
    instructions : '传入的值只能是合法的数字'
};

// 检测该值是否只包含字母和数字
validator.arithmetic.isAlphaNum = {
    validate : function(value) {
        return !/[^a-z0-9]/i.test(value);
    },
    instructions : '传入的值只能包含字母和数字，不能包含特殊字符'
};

// 需要验证的表单数据块
var data = {
    first_name : "Tom",
    last_name : "Xu",
    age : "222",
    username : "TomXu"
};

// 配置验证器规则
validator.config = {
    first_name : 'isNonEmpty',
    age : 'isNumber',
    username : 'isAlphaNum'
};

// 测试
validator.validate(data);

if (validator.hasErrors()) {
    console.log(validator.messages.join("\n"));
}


