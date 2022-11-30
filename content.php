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
    <title>Search</title>

    <?php include('./meta/link.php'); ?>

    <style>
        .c_main_area {
            padding-top: 88px;
        }
    </style>
</head>
<body>

    <?php include('./components/nav.php'); ?>
    
    <div class="c_const">
            <div class="c_body">

                <div class="c_grid c_col">

                    <?php include('./components/aside.php'); ?>

                    <div class="c_main">

                        <div class="c_main_area">
                            <h1 class="h_area">ค้นหา</h1>

                            <div class="c_main_area_grid">

                                <div class="c_main_content_box">

                                    <form method="get" id="formLoad">

                                        <input type="text" id="srFetch" name="search" class="compo_int_sr form_content" placeholder="ค้นหา..." autofocus requried>
                                        <button type="submit" id="btnFetch" name="btn_sr" class="btn_fetch" onclick="save_data(); return false;">ค้นหา</button>

                                        <?php if(isset($_GET['data'])) { ?>

                                        <?php
                                            $data = $_GET['data'];

                                            $str = '0123456789abcdefghijk';
                                            $randStr = str_shuffle($str);

                                        ?>

                                        <div class="next_box">
                                            <a href="https://www.youtube.com/watch?v=<?php echo $data ?>" target="_blank" class="url">
                                                https://www.youtube.com/watch?v=<?php echo $data ?>?path=<?php echo $randStr ?>
                                            </a>
                                        </div>

                                        <?php } ?>

                                        <div class="root"></div>
                                        
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