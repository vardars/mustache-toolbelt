var mustacheLib = mustacheLib || {};

mustacheLib.prototype = {
	renderAppend : function (templateid, values, target, callback){
        if (typeof Mustache !== "undefined" && Mustache) {
            var testervalue = $("#" + templateid + "").html();
            $(target).append(Mustache.render(testervalue, values));
            if (typeof callback !== "undefined" && callback)
                callback.call();
        }
    },

    renderSet : function (templateid, values, target, callback){
        if (typeof Mustache !== "undefined" && Mustache) {
            var testervalue = $("#" + templateid + "").html();
            $(target).html(Mustache.render(testervalue, values));
            if (typeof callback !== "undefined" && callback)
                callback.call();
        }
    }
};