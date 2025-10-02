<?php
$firstName = htmlspecialchars($_POST['firstName']);
$middleName = htmlspecialchars($_POST['middleName']);
$lastName = htmlspecialchars($_POST['lastName']);
$technology = htmlspecialchars($_POST['technology']);
$batch = htmlspecialchars($_POST['batch']);
$idNumber = htmlspecialchars($_POST['idNumber']);
$contactNumber = htmlspecialchars($_POST['contactNumber']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Registration Success</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="form-registration">
    <h1>✅ Registered Successfully!</h1>
    <div class="success">
      <p><strong>First Name:</strong> <?php echo $firstName; ?></p>
      <p><strong>Middle Name:</strong> <?php echo $middleName; ?></p>
      <p><strong>Last Name:</strong> <?php echo $lastName; ?></p>
      <p><strong>Technology:</strong> <?php echo $technology; ?></p>
      <p><strong>Batch:</strong> <?php echo $batch; ?></p>
      <p><strong>ID Number:</strong> <?php echo $idNumber; ?></p>
      <p><strong>Contact Number:</strong> <?php echo $contactNumber; ?></p>

      <form action="index.html" method="get">
      <button type="submit">⬅ Go Back to Registration</button>
      </form>
    </div>
  </div>
</body>
</html>
