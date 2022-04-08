<?php
if(isset($_POST['submit'])){
  $emailSubject = 'Website Query';
  $mainEmail = 'info@cabbagesoft.com';

    $nameField = $_POST['namec'];
    $emailField = $_POST['emails'];
    $phoneField = $_POST['pass'];
    

    $body = <<<EOD
<br><hr>
Name: $name <br>
Email: $email <br>
Phone Number: $phone <br>

EOD;

      $headers = "From: $email\r\n";
      $headers .="Content-type: text/html\r\n";  
      $success = mail($mainEmail, $emailSubject, $body, $headers);


          $result = 'Your question has been sent';               
         echo "$result";
 }     
?>