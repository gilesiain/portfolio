<?php
$name  = $_POST['name'];
$email  = $_POST['email'];
$subject  = $_POST['subject'];
$message = $_POST['message'];
$headers = "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From:' . $email;
$format = "Name:" . $name . "<br>";
$format .= $email . "<br>";
$format .= $message;

mail("contact@iaingiles.com", $subject, $format, $headers);

echo "mail sent";
