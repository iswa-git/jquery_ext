(function ($) {
    $.fn.mshow = function (options) {
        var divs = [
            '#one', '#two', '#three'
        ]
        var settings = $.extend({
            color: "#000000",
            divid: "#one",
            textvalue:"textvalue"
        }, options)

        return this.each (function () {
            $(this).click(function(){
                dosomething(settings.divid);
            });

            function dosomething(div) {
                for (i=0; i < divs.length; i++){
                        $(divs[i]).hide()
                }
                $(div).show()
            }
   
    })
    }
}(jQuery));