<?php
    /*
        - Creates & returns a mysqli database connection
        - Exits on error

        - Requires the: server name, a user credential and the database name
    */
    function connect($server, $username, $password, $db) {
        $connection = new mysqli($server, $username, $password, $db);
        if($connection->connection_errno) {
            die('[connect.php] Database connection failed: %s'.connection->connect_error);
        }
        return $connection;    
    }
?>