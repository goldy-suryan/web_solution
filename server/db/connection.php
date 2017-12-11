<?php

class Db {
    private $servername ="localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "websolution";

    protected function connect() {
        $connection = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        return $connection;
    }
}