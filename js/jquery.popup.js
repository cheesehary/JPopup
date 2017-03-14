(function($) {

	$.popup = function(options) {
		var opts = $.extend({}, $.popup.defaults, options);
		var $pop = $('<div id="_jpopup"></div>').text(opts.msg);

		switch(opts.type) {
			case "warning":
				$pop.css({"background": "#E86946"});
				break;
			case "success":
				$pop.css({"background": "#22D035"});
				break;
		}

		$pop.appendTo("body")
		.animate({
			left: "+=330px"
		}, 1000).delay(4000)
		.animate({
			left: "-=350px"
		}, 1000, function() {
			$(this).remove();
		});
	};

	$.popup.defaults = {
		msg: "Hello World!",
		type: "normal"
	};	

}(jQuery));