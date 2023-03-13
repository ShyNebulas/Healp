<?php
    /*
        - Inserts a post to the given database
        - Exits on error

        - Requires the: database connection, database name, post id and the post
    */
    function addPost($connection, $db, $id, $post) {
        $query = sprintf('INSERT INTO (`id`, `post`) VALUES (%s, %s)', $id, $post); 
        if($connection->query($query)) {
            return True;
        } else {
            die('[posts.php] Database query failed: %s'.connection->error);
        }
    }
?>