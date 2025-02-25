
<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'adarsh');
define('DB_PASS', '1234');
define('DB_NAME', 'gym registration');

// create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME); // mysqli(host, username, password, database)

// check connection
if ($conn->connect_error) {
  die('Connection Failed : ' . $conn->connect_error);
}
// echo 'DB Connected';

