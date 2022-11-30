<?php
    require_once('./server/data.php');
    $const = new content();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music</title>

    <?php include('./meta/link.php'); ?>
</head>
<body id="eventMode_animate" theme="AutoDisplay">

    <?php include('./components/nav.php'); ?>
    <?php include('./components/index_content.php'); ?>
    <?php include('meta/script.php') ?>
</body>
</html>