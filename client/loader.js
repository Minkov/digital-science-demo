document.body.innerHTML += `
<div class="loader">
    <div class="loader-content">
        <div class="loader-header">
            Loading...
        </div>
        <div class="loader-text">
            Please, wait
        </div>
    </div>
</div>`;

function showLoader() {
    console.log($(".loader").html());
    $(".loader")
        .show();
}

function hideLoader() {
    $(".loader")
        .hide();
}
hideLoader();