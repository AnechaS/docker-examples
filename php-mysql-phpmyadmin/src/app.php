<?php

try {
    $db_host = "db";
    $db_username = "root";
    $db_password = "123456";
    $db_name = "mysql";
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_username, $db_password);

    $users = $conn->query("SELECT Host, User FROM `user`")->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($users);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
