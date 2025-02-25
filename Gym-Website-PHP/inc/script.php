<!-- name,gender,initial_weight,final_weight,height,bmi,address,email,phone,personal_trainer,gym_before,membership, -->
<?php
if (isset($_POST['submit'])) {
  // Read inputs
  $name = $_POST['name'];
  $gender = $_POST['gender'];
  $initial_weight = $_POST['initial_weight'];
  $final_weight = $_POST['final_weight'];
  $height = $_POST['height'];
  $address = $_POST['address'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $personal_trainer = $_POST['personal_trainer'];
  $gym_before = $_POST['gym_before'];
  $membership = $_POST['membership'];

  // Validate inputs
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<script>alert('Please enter a valid email address.')</script>";
    // exit(); // Quit adding to database
  }
  if (!preg_match("/^[0-9]*$/", $initial_weight) || !preg_match("/^[0-9]*$/", $final_weight) || !preg_match("/^[0-9]*$/", $height)) {
    echo "<script>alert('Please enter a valid number.')</script>";
    exit(); // Quit adding to database
  }
  if ($height < 100 || $height > 300) {
    echo "<script>alert('Please enter a valid height.')</script>";
    exit(); // Quit adding to database
  }
  if ($personal_trainer != "Yes" && $personal_trainer != "No") {
    echo "<script>alert('Please enter a valid personal trainer.')</script>";
    exit(); // Quit adding to database
  }
  if ($gym_before != "Yes" && $gym_before != "No") {
    echo "<script>alert('Please enter a valid gym before.')</script>";
    exit(); // Quit adding to database
  }
  if ($membership != "Regular" && $membership != "Pro" && $membership != "VIP") {
    echo "<script>alert('Please enter a valid membership.')</script>";
    exit(); // Quit adding to database
  }

  // Regex matching
  if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
    echo "<script>alert('Please enter a valid name.')</script>";
    exit(); // Quit adding to database
  }
  if (!preg_match("/^[0-9]*$/", $phone)) {
    echo "<script>alert('Please enter a valid phone number.')</script>";
    exit(); // Quit adding to database
  }
  if (strlen($phone) != 10) {
    echo "<script>alert('Please enter a valid phone number.')</script>";
    exit(); // Quit adding to database
  }
  if (!preg_match("/^[a-zA-Z0-9 ]*$/", $address)) {
    echo "<script>alert('Please enter a valid address.')</script>";
    exit(); // Quit adding to database
  }

  // Sanitize inputs
  $name = filter_var($name, FILTER_SANITIZE_SPECIAL_CHARS);
  $initial_weight = filter_var($initial_weight, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
  $final_weight = filter_var($final_weight, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
  $height = filter_var($height, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
  $address = filter_var($address, FILTER_SANITIZE_SPECIAL_CHARS);
  $email = filter_var($email, FILTER_SANITIZE_EMAIL);
  $phone = filter_var($phone, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);


  // BMI Function
  function getBMI($weight, $height)
  {
    $bmi = $weight / ($height * $height);
    return $bmi;
  }
  $bmi = getBMI($initial_weight, $height);

  // Check if inputs are valid
  if (empty($name) || empty($name) || empty($initial_weight) || empty($final_weight) || empty($height) || empty($address) || empty($email) || empty($phone) || empty($personal_trainer) || empty($gym_before) || empty($membership)) {
    echo "<script>alert('Please fill in all the required fields.')</script>";
  } else {
  }

  // Add to database
  $conn = mysqli_connect("localhost", "root", "", "gym");
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  echo "Connected successfully";

  $sql = "INSERT INTO gym(name, gender, initial_weight, height, address, email, phone) VALUES ('$name', '$gender','$initial_weight','$height','$address','$email','$phone')";

  if(mysqli_query($conn,$sql)){
    header('Location:feedback.php');
    
  }else{
    echo 'Error : '. mysqli_error($conn);
  }

  echo "<pre>";
  print_r($_POST);
  echo "</pre>";
}

?>