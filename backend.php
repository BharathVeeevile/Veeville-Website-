<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $contactNumber = htmlspecialchars(strip_tags(trim($_POST['contact_number'])));
    $companyName = htmlspecialchars(strip_tags(trim($_POST['company_name'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Validate the inputs
    if (empty($name) || empty($email) || empty($contactNumber) || empty($companyName) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    if (!preg_match("/^\d{10}$/", $contactNumber)) {
        echo "Invalid contact number. Must be 10 digits.";
        exit;
    }

    // Email setup
    $to = "bharathyuvi18@gmail.com"; // Replace with your email
    $subject = "New Contact Form Submission";
    $body = "You have received a new message:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Contact Number: $contactNumber\n" .
            "Company Name: $companyName\n" .
            "Message:\n$message\n";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    // Handle invalid request methods
    http_response_code(405);
    echo "Method not allowed. Please use the form to submit data.";
}
?>




<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Ensure you have installed PHPMailer via Composer or manually included it
require 'vendor/autoload.php'; // Adjust this path based on your setup

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $contactNumber = htmlspecialchars(strip_tags(trim($_POST['contact_number'])));
    $companyName = htmlspecialchars(strip_tags(trim($_POST['company_name'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Validate inputs
    if (empty($name) || empty($email) || empty($contactNumber) || empty($companyName) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    if (!preg_match("/^\d{10}$/", $contactNumber)) {
        echo "Invalid contact number. Must be 10 digits.";
        exit;
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP server configuration
        $mail->isSMTP();
        $mail->Host = 'smtpout.secureserver.net'; // GoDaddy's SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@yourdomain.com'; // Replace with your GoDaddy email
        $mail->Password = 'your-email-password';       // Replace with your GoDaddy email password
        $mail->SMTPSecure = 'tls';                     // Use TLS encryption
        $mail->Port = 587;                             // Port 587 for TLS

        // Sender and recipient settings
        $mail->setFrom('your-email@yourdomain.com', 'Your Name'); // Replace with your GoDaddy email
        $mail->addAddress('recipient-email@example.com');         // Replace with the recipient's email

        // Email content
        $mail->Subject = "New Contact Form Submission";
        $mail->Body = "You have received a new message:\n\n" .
                      "Name: $name\n" .
                      "Email: $email\n" .
                      "Contact Number: $contactNumber\n" .
                      "Company Name: $companyName\n" .
                      "Message:\n$message";

        // Send the email
        if ($mail->send()) {
            echo "Message sent successfully!";
        } else {
            echo "Message could not be sent.";
        }
    } catch (Exception $e) {
        // Handle errors
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405);
    echo "Method not allowed. Please use the form to submit data.";
}
