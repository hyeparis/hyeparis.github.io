<?php
    $name = $_POST['name'];
    $user_email = $_POST['email'];
    $message = $_POST['message'];

    $subject = $_POST['subject'];
    
    $to = "jjubob93@gmail.com";

    mail($to,$subject,$message,$name);
    header("Location: index.html");
?>