<?php

header('Access-Control-Allow-Origin: *');

include "connection.php";

class Newsletter extends Db{
    
    public function insert() {
        $connection = $this->connect();
        $data = json_decode(file_get_contents("php://input"));
        
        $find = "select * from newsletter where email='$data->email'";
        $result = $connection->query($find);
        
        if($result->num_rows > 0) {
            echo "email already signed up";
            exit();
        } else {
            if(!filter_var($data->email, FILTER_VALIDATE_EMAIL)){
                echo "inappropriate email address";
                exit();
            } else {
                $sql = "insert into newsletter (email) values ('$data->email');";
                
                $insertedData = $connection->query($sql);
                if($insertedData === true) {
                    echo "signup successfull";
                } else {
                    echo "Error while signing up, try again";
                }
            }
        }
    }
}

$news = new Newsletter();
$news->insert();