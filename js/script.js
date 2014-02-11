var tbb = tbb || {};

(function (tbb, $) {

    //var site = "http://theblogbowl.in/";
    var site = "http://theblogbowl.in";

    tbb.json_data = function (data) {
        $.each(data, function(index, value){
            var container = $("#main-container"),
                wrapper, contestImage, prizes, prizeBlock;

            wrapper = $("<div />", {
                "class" : "contest"
            }).appendTo(container);

            $("<div />", {
                "class" : "contest-name",
                "html" : "<a href='" + site + value.url +"'>" + value.title + "</a>"
            }).appendTo(wrapper);

            $("<span />", {
                "class" : "status",
                "text" : "OPEN"
            }).appendTo(wrapper);

            $("<div />", {
                "class" : "dates",
                "html" : "final date:<span> " + value.last_date + "-2014 </span>"
            }).appendTo(wrapper);

            contestImage = $("<div />", {
                "class" : "contest-image",                
                "style" : "background-image: url('" + site + value.banner + "')"
            }).appendTo(wrapper);

            $("<div />", {
                "class" : "contest-detail",
                "html" : value.prompt
            }).appendTo(contestImage);

            $("<a />", {
                "class" : "submit-entry",
                "href" : site + value.url,
                "text" : "More details"
            }).appendTo(contestImage);

            prizes = $("<div />", {
                "class" : "prizes"
            }).appendTo(wrapper);

            prizeBlock = $("<div />", {
                "class" : "prize-block",
                "id" : "first-prize-block"
            }).appendTo(prizes);

            $("<div />", {
                "class" : "position",
                "id" : "first",
                "text" : "Winner gets"
            }).appendTo(prizeBlock);

            $("<div />", {
                "class" : "prize-text",
                "text" : value.prize
            }).appendTo(prizeBlock);

        });
    };

    tbb.init = function (){

        var loadingDiv = $("#loading-div");

        $.ajax({
            type: "GET",
            crossDomain: true,
            url: site + "/contests/json/",
            dataType: "jsonp"
        });

        loadingDiv.hide();

    };

})(tbb, jQuery);
