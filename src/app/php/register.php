<?php

// Database configuration
$servername = "sql310.infinityfree.com";
$username = "if0_36741599";
$password = "2RJYOJRWTiF";
$dbname = "if0_36741599_tester1212";

// Establish database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully<br>";
}

// Process form submission if POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data and sanitize inputs
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $password_confirm = htmlspecialchars($_POST['password-confirm']);

    // Perform basic validation
    if (empty($name) || empty($email) || empty($password) || empty($password_confirm)) {
        die("All fields are required.");
    }
    if ($password != $password_confirm) {
        die("Password confirmation doesn't match.");
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // Check if email already exists
    $check_email_query = "SELECT * FROM users WHERE email = ?";
    $stmt_check = $conn->prepare($check_email_query);
    $stmt_check->bind_param("s", $email);
    $stmt_check->execute();
    $result = $stmt_check->get_result();
    if ($result->num_rows > 0) {
        die("Email already exists. Please choose a different email.");
    }
    $stmt_check->close();

    // If email does not exist, proceed with insertion
    // Hash the password for storage in database
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Use prepared statement to prevent SQL injection
    $insert_query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    $stmt_insert = $conn->prepare($insert_query);
    $stmt_insert->bind_param("sss", $name, $email, $hashed_password);

    if ($stmt_insert->execute()) {
        echo "New record created successfully";
        // Redirect to a success page or further processing if needed
    } else {
        echo "Error: " . $stmt_insert->error;
    }
    $stmt_insert->close();
}

// Close database connection
$conn->close();
?>
