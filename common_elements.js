window.onload = function () {
    $("header").load('/header.html');
};

function show_contact_form() {
    $(".show_contact_form").load('/mail.html');
}

function hide_contact_form() {
    $(".show_contact_form").empty();
}

function show_light_box(url, text) {
    $('.light-box').load('/light-box.html', function () {
        $(".light-box-image").attr("src", url);
        $(".light-box-bg h4").text(text);
    });
}

function hide_light_box() {
    $(".light-box").empty();
}