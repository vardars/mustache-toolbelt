var mustacheLib = mustacheLib || {};

mustacheLib.prototype = {
	renderAppend : function (templateid, values, target, callback){
		if (typeof Mustache !== "undefined" && Mustache) {
			var template = $("#" + templateid + "").html();
			$(target).append(Mustache.render(template, values));
			if (typeof callback !== "undefined" && callback)
				callback.call();
		}
	},

	renderSet : function (templateid, values, target, callback){
		if (typeof Mustache !== "undefined" && Mustache) {
			var template = $("#" + templateid + "").html();
			$(target).html(Mustache.render(template, values));
			if (typeof callback !== "undefined" && callback)
				callback.call();
		}
	}
};
