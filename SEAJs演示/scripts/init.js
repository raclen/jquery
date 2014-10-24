

define(function(require, exports, module) {
    exports.$ = require('jquery-1.7.2.min');
	
    var data = require('data');
    $('.author').html(data.author);
    //$('.blog').attr('href', data.blog);
	//alert(data.color);
	 $('.blog').text(data.text);
	$("#test_div").click(function(){
		
		alert("11111")
		})
});

