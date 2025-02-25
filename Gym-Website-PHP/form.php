<!-- include header file -->
<?php include 'inc/header.php'; ?>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
  <div class="banner">
    <h1> Gym Membership Form</h1>
  </div>
  <p class="top-info">Want to become a member of our Gym? Then start by filling our form to complete registration.
    <br> We will contact you shortly to notify you about your membership card.
  </p>
  <div class="item">
    <p>Name<span class="required">*</span></p>
    <div class="name-item">
      <input type="text" name="name" placeholder="Name" required />
    </div>
  </div>
  <div class="question">
    <p>Gender<span class="required">*</span></p>
    <div class="question-answer">
      <label><input type="radio" value="Male" name="gender" required /> <span>Male</span></label>
      <label><input type="radio" value="Female" name="gender" required /> <span>Female</span></label>
    </div>
  </div>
  <div class="item">
    <p>Your current weight (kg)<span class="required">*</span></p>
    <input type="text" name="initial_weight" />
  </div>
  <div class="item">
    <p>Desired weight (kg)<span class="required">*</span></p>
    <input type="text" name="final_weight" required />
  </div>
  <div class="item">
    <p>Height<span class="required">*</span></p>
    <input type="text" name="height" required />
  </div>
  <!-- <div class="item">
        <p>BMI<span class="required">*</span></p>
        <input type="text" name="bmi" required />
      </div> -->
  <div class="item">
    <p>Home Address<span class="required">*</span></p>
    <input type="text" name="address" placeholder="Street address" required />
    <!-- <div class="city-item">
          <input type="text" name="name" placeholder="City" required />
          <input type="text" name="name" placeholder="Region" required />
          <input type="text" name="name" placeholder="Postal / Zip code" required />
          <select>
            <option value="">Country</option>
            <option value="1">Russia</option>
            <option value="2">Germany</option>
            <option value="3">France</option>
            <option value="4">Armenia</option>
            <option value="5">USA</option>
          </select>
        </div> -->
  </div>
  <div class="item">
    <p>Email<span class="required">*</span></p>
    <input type="text" name="email" required />
  </div>
  <div class="item">
    <p>Phone<span class="required">*</span></p>
    <input type="text" name="phone" />
  </div>
  <div class="question">
    <p>Do you require a personal trainer?<span class="required">*</span></p>
    <div class="question-answer">
      <label><input type="radio" value="Yes" name="personal_trainer" required class="radio-btn" /> <span>Yes</span></label>
      <label><input type="radio" value="No" name="personal_trainer" required class="radio-btn" /> <span>No</span></label>
    </div>
  </div>
  <div class="question">
    <p>Have you been in a Gym before?<span class="required">*</span></p>
    <div class="question-answer">
      <label><input type="radio" value="Yes" name="gym_before" required class="radio-btn" /> <span>Yes</span></label>
      <label><input type="radio" value="No" name="gym_before" required class="radio-btn" /> <span>No</span></label>
    </div>
  </div>
  <div class="question">
    <p>Membership Type<span class="required">*</span></p>
    <div class="question-answer">
      <label><input type="radio" value="Regular" name="membership" required class="radio-btn" /> <span>Regular</span></label>
      <label><input type="radio" value="Pro" name="membership" required class="radio-btn" /> <span>Pro</span></label>
      <label><input type="radio" value="VIP" name="membership" required class="radio-btn" /> <span>VIP</span></label>
    </div>
  </div>
  <div class="btn-block">
    <input type="submit" name="submit" value="Submit">
  </div>

  <div class="show_reg">
    <button>
    <a href="./feedback.php">
      Show Registrations
    </a>  
    </button>
  </div>

</form>

<!-- include footer file -->
<?php include 'inc/footer.php'; ?>

<!-- include script -->
<?php include 'inc/script.php'; ?>