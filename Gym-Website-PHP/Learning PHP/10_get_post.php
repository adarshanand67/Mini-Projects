<?php
/* --- $_GET & $_POST Superglobals -- */

/*
  We can pass data through urls and forms using the $_GET and $_POST superglobals.
*/

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $password = $_POST['password'];
  echo "Welcome $name";
  echo "<br>";
  echo "Your password is $password";
} ?>

<!-- Pass data through a link -->
<a href="<?php echo $_SERVER['PHP_SELF']; ?>?username=Brad">Link</a>


<br><br>

<!-- Pass data through a form -->
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
  <div>
    <label>Name: </label>
    <input type="text" name="name">
  </div>
  <br>
  <div>
    <label>Password: </label>
    <input type="password" name="password">
  </div>
  <br>
  <input type="submit" name="submit" value="Submit">
</form>