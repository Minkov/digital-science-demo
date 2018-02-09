$("button")
    .on("click", function (ev) {
        showLoader();
        ev.preventDefault();
        var name = $("input[name=name]").val();
        var occupation = $("input[name=occupation]").val();
        var image = $("input[name=image]").val();
        data.createFriend(name, occupation, image, function () {
            hideLoader();
        });
    });

$("input[name=image]").on("input", function () {
    var imageUrl = $(this).val();
    $('img').attr("src", imageUrl);
});

$("#main-nav").load("/ui/nav.html", function () {
    var currentPageUrl = window.location
        .pathname
        .substring(1);

    // alert(currentPageUrl);
    $("a[href='" + currentPageUrl + "']")
        .addClass("active");
});

function friendToRow(friend) {
    return $("<tr/>")
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
        );
}

function loadFriends() {
    data.getFriends(function (friends) {
        hideLoader();
        // select table
        var $table = $("tbody");
        $table.html("");
        // parse each friend into tr
        friends.map(friendToRow)
            .forEach(function ($friend) {
                $table.append($friend);
            });
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