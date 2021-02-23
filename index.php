<?php
$dirPath = 'files/images/';
if ($dir = opendir($dirPath)) {
    $arrayjs = array();
    while (false !== ($entry = readdir($dir))) {
        if ($entry != "." && $entry != "..") {
            $arrayjs[] = $entry;
        }
    }
    closedir($dir);
};
?>
<!DOCTYPE htnml>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>GTST Intro</title>
</head>
<body>


    <?php 
        for($i = 0; $i <= count($arrayjs)-1; $i++) {
            // echo $dirPath.$arrayjs[$i];
            ?>
            <div class="card">
                <div class="image">
                    
                </div>
            </div>
            <br/>
            <?php
        }
    ?>

    <script src="main.js"></script>
</body>
</html>