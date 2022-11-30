<?php

    session_start();

    define('server' , 'localhost');
    define('user' , 'root');
    define('pass' , "");
    define('db', 'data_content');

    class content {

        function __construct() {
            $conn = mysqli_connect(server , user , pass , db);
            $this->server = $conn;

            if(!$conn) {
                echo "failed" . mysqli_connect_error();
            } else {
            }
        }

    }

?>