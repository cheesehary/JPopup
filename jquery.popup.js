(function($) {

	$.popup = function(options) {
		var opts = $.extend({}, $.popup.defaults, options);
		var styles = {
			position: "fixed",
			left: "-300px",
			bottom: "30px",
			width: "300px",
			backgroundColor: "#3DC4E8",
			padding: "5px",
			textAlign: "center",
			boxShadow: "1px 1px 1px black"
		};
		var $pop = $('<div></div>').text(opts.msg)
		.css(styles);

		switch(opts.type) {
			case "warning":
				$pop.css({"background": "#F5475F"});
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