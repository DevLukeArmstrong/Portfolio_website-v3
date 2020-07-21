<?php
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $formcontent="From: $name \n Message: $message";
    $receipient = "admin@luketarmstrong.com";
    $subject = "Website inquiry";
    $mailheader = "From: $emailFrom \r\n";

    function problem($error)
    {
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // Validate Name
    if (empty($name)) {
      $err_msg = "Name is required<br>";
    } 

    // Validate Email
    if (empty($emailFrom)) {
      $err_msg = "Email is required<br>";
    }
    // check if e-mail address is well-formed
    if (!filter_var($emailFrom, FILTER_VALIDATE_EMAIL)) {
      $err_msg = "Invalid email format<br>";
    }

    if (strlen($err_msg) > 0) {
      problem($err_msg);
  }

    // Check for spam emails
    if ( preg_match( "/[\r\n]/", $name ) || preg_match( "/[\r\n]/", $emailFrom ) ) {
      header("location : https://www.luketarmstrong.com/mail-error.php");
    }

    // Send
    mail($receipient, $subject, $formcontent, $mailheader) or die("Error!");
    header("Location: http://luketarmstrong.com/");
    exit;
?>