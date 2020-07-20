<?php
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $formcontent="From: $name \n Message: $message";
    $receipient = "admin@luketarmstrong.com";
    $subject = "Website inquiry";
    $mailheader = "From: $emailFrom \r\n";

    mail($receipient, $subject, $formcontent, $mailheader) or die("Error!");
    header("Location: http://luketarmstrong.com/");
    exit;
?>