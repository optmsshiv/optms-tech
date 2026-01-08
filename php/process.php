<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    $to = "marketing@optms.co.in"; // Change this to your email address
    $subject = "$subject";
    $headers = "From: $email";
    $mailBody = "Name: $name\nEmail: $email\nMobile: $mobile\nSubject: $subject\n\nMessage:\n$message";
    
    if (mail($to, $subject, $mailBody, $headers)) {
       // echo "Your message has been sent successfully!";
        header("Location:../thank-you.html"); // Change this to your actual thank you page URL
        exit();
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    echo "Access to this script is forbidden.";
}
?>
