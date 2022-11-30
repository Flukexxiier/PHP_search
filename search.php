<?php

    require_once('./server/data.php');
    $const = new content();

    if(isset($_POST['btn_sr'])) {

        $search = $_GET['search'];
        echo" <script> window.location.href='search.php?query=$search' </script> ";

    }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Search</title>
    <?php include('./meta/link.php'); ?>
    <?php include('./meta/indexStyle.php'); ?>

</head>

<body id="eventMode_animate" theme="AutoDisplay">

    <?php include('./components/nav.php'); ?>

    <div class="c_const">
        <div class="c_body">

            <div class="c_grid c_col">

                <?php include('./components/aside.php'); ?>

                <div class="c_main">
                    <div class="c_main_area">
                        <div class="c_main_area_grid">
                            <div class="c_main_content_box">
                                <form method="get" id="formLoad">
                                    <div class="sr_content_position">
                                        <div class="sr_body" id="srBody">
                                            <h1 class="h_area"><i class="fa-solid fa-magnifying-glass"></i> ค้นหา</h1>
                                            <input type="text" id="srFetch" name="search"
                                                class="compo_int_sr form_content" placeholder="ค้นหา..." autofocus
                                                requried>
                                            <button type="submit" id="btnFetch" name="btn_sr" class="btn_fetch"
                                                onclick="save_data(); return false;"><i
                                                    class="fa-regular fa-thumbs-up"></i> ค้นหา</button>
                                        </div>
                                    </div>

                                    <div class="root grid-items bg_elements scrolled">
                                        <div class="box">
                                            <div class="preview"><i class="fa-regular fa-image"></i> Preview:</div>
                                        </div>
                                        <div class="box">
                                            <div class="box_title"><i class="fa-solid fa-align-left"></i> Name:</div>
                                        </div>
                                        <div class="box">
                                            <div class="box_time"><i class="fa-regular fa-clock"></i> Duration:</div>
                                        </div>
                                        <div class="box" style="text-align: right;">
                                            <div class="action"><i class="fa-solid fa-location-crosshairs"></i> Action:
                                            </div>
                                        </div>
                                    </div>

                                    <div class="contents" id="_nextContents" content_href="contents"></div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php include('meta/script.php') ?>

</body>

</html>