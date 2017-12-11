<?php

header('Access-Control-Allow-Origin: *');

include "connection.php";

class Contact extends Db {

    public function insertContact() {

        $connection = $this->connect();
        $data = json_decode(file_get_contents("php://input"));

        if(!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
            echo "email is not valid";
        } else {        
            $sql = "insert into contacts (name, email, message) values ('$data->name', '$data->email', '$data->message');";
            $contact = $connection->query($sql);

            if($contact === true) {
                echo "We'll soon contact you";
            } else {
                echo "Sorry, try again after some time";
            }
        }
    }
}

$contact = new Contact();
$contact->insertContact();