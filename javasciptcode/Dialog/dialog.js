;(function($){
    var DIALOG_STYLE = {
        DEFAULT: 0,
        CONFIRM: 1
    };
    var defaunt={
        isModal: 1,
        zIndex: 1000,
        width: 240,
        message: '',
        style: DIALOG_STYLE.DEFAULT,
        txtTitle:'',
        txtConfirm: '确定',
        txtCancel: '取消',
        onConfirm: null,
        onCancel: null

    }

})(Zepto);