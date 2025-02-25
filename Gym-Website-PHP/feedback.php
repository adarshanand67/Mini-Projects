<!-- Show all the registrations here -->

<!-- include header file -->
<?php include 'inc/header.php'; ?>
<!-- include database file -->
<?php include 'config/database.php'; ?>

<!-- include script -->
<?php include 'inc/script.php'; ?>


<!-- Gym -->
<!-- name,gender,initial_weight,height,address,email,phone  -->
<?php
$sql = 'SELECT * FROM gym';
$result = mysqli_query($conn, $sql);
$feedback = mysqli_fetch_all($result, MYSQLI_ASSOC);

?>

<!-- if table is empty -->
<?php if (empty($feedback)) : ?>
  <p>No data found</p>
<?php endif; ?>


<h1> Gym Form </h1>
<hr>

<div class="data" style="color: white;background-color: pink;font-size: 24px;font-weight: bold;line-height: 1.5;padding: 20px;margin: 20px;">
  <?php foreach ($feedback as $key => $value) {
    echo "Name -" . $value['name'] . '<br>';
    echo "Email -" . $value['email'] . '<br>';
    echo "Address -" . $value['address'] . '<br>';
    echo "Phone -" . $value['phone'] . '<br>';
    echo '<br>';
  }
  ?>

</div>

<!-- include footer file -->
<?php include 'inc/footer.php'; ?>

<!-- Go back to form -->
<br><br><br><br><br><br><br><br>
<button>
  <a href="./form.php">
    Go Back
  </a>
</button>