function check_mail() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    if (!(name.value == '' || email.value == '')) {
        $.ajax({
            type: "POST",
            url: "/mail.php",
            data: {
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            },
            success: function (res) {
                alert(res);
                location.reload();
            }
        });
    } else {
        name.style.borderBottom = "2px solid red";
        name.placeholder = "Required*";
        email.style.borderBottom = "2px solid red";
        email.placeholder = 'Required*';
    }
    return false;
};