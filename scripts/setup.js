$(function () {
    $.ajax({
        url: "ui/nav.html",
        success: function (html) {
            $("#main-nav").html(html);
            var page = window.location.pathname.substr(1);
            $(`.nav a[href='${page}']`)
                .parent()
                .addClass("active");
            
            console.log(`.nav a[href*='${page}']`);
            console.log($(`.nav a[href='${page}']`));
        }
    });
});