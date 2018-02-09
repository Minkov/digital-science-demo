$(function () {
    var $options = $("<div/>");
    ["Sofia", "Burgas", "Stara Zagora"].forEach((city) => {
        var $option = $("<option/>")
            .val(city)
            .html(city);
        $option.appendTo($options);
    });

    $("select")
        .html($options.html());
});