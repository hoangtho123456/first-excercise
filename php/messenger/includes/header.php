<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Messenger</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"/>
        <!-- Kết nối file css/style.css -->
        <link rel="stylesheet" href="css/style.css">
        <!-- Kết nối thư viện Font Awesome Icons -->
        <link rel="stylesheet" href="css/fontawesome/css/fontawesome.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    </head>
    <body>
        <?php
            //if user exist;
            if ($user) {
                //menu show
                echo '<div class="main-menu">
                    <h1><i class="fa fa-comments"></i> Messenger</h1>
                    <a href="logout.php"><i class="fa fa-sign-out-alt"></i>Logout</a>
                    </div>
                    <div class="clearfix"></div>
                ';
            } else {
                echo '<div class="main-menu">
                <h1><i class="fa fa-comments"></i> Messenger</h1>
            </div><!-- div.main-header -->';
            }
        ?>
