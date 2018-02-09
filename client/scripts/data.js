var data = (function () {
    var URL = "/api/friends";

    var createFriend = function (name, occupation, image, successCallback) {
        $.ajax({
            url: URL,
            method: "POST",
            data: JSON.stringify({
                name: name,
                image: image,
                occupation: occupation
            }),
            contentType: "application/json",
            success: successCallback
        });
    };

    var getFriends = function (successCallback) {
        $.ajax({
            url: URL,
            success: successCallback,
        });
    }

    return {
        createFriend,
        getFriends
    };
}());