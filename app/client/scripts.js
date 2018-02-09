var URL = "http://localhost:3001/api/friends";
$("button")
    .on("click", function (ev) {
        showLoader();
        ev.preventDefault();
        var name = $("input[name=name]").val();
        var occupation = $("input[name=occupation]").val();
        var image = $("input[name=image]").val();

        $.ajax({
            url: URL,
            method: "POST",
            data: JSON.stringify({
                name: name,
                image: image,
                occupation: occupation
            }),
            contentType: "application/json",
            success: function (result) {
                hideLoader();
                // alert(JSON.stringify(result));
            }
        })
    });

$("input[name=image]").on("input", function () {
    var imageUrl = $(this).val();
    $('img').attr("src", imageUrl);
});

$("#main-nav").load("ui/nav.html", function () {
    var currentPageUrl = window.location
        .pathname
        .substring(1);

    // alert(currentPageUrl);
    $("a[href='" + currentPageUrl + "']")
        .addClass("active");
});

function loadFriends() {
    $.ajax({
        url: URL,
        success: function (friends) {
            hideLoader();
            // select table
            var $table = $("tbody");
            $table.html("");
            // parse each friend into tr
            friends.forEach(function (friend) {
                $("<tr/>")
                    .append(
                        $("<td/>")
                        .append(
                            $("<img/>")
                            .attr("src", friend.image)
                        )
                    )
                    .append(
                        $("<td/>")
                        .html(friend.name)
                    )
                    .append(
                        $("<td/>")
                        .html(friend.occupation)
                    )
                    // insert tr table
                    .appendTo($table);
            });
        }
    });
}

switch (window.location.pathname) {
    case "/friends.html":
        showLoader();
        loadFriends();
        break;
}

// for (var i = 0; i < 5; i += 1) {
//     // console.log(i);
//     var el = document.createElement("div");
//     el.innerHTML = "Element " + i;
//     document.body.appendChild(el);
// }

// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function () {
//     alert("Clicked");
// });