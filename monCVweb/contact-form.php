<?php
if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$visitor_email = $_POST['mail'];
	$message = $_POST['message'];
	$email_subject = $_POST['Sujet'];

	$email_body = "Nom: ".$name."\n".
	              "Email: ".$visitor_email."\n".
	              "Message: ".$message."\n";

	$to = "291695@supinfo.com";
	$headers = "From:"." contact@monsite.com";

	if(mail($to, $email_subject, $email_body, $headers)){
		echo ("Le message a bien été envoyé");
	}
	else{
		echo "Le message n'a pas pu être envoyé, réessayez plus tard!";
	}
}


