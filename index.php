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

    <div class="stack">
        <?php 
            for($i = 0; $i <= count($arrayjs)-1; $i++) {
                ?>
                <div class="card">
                    <div class="image">
                        <img src="<?php echo $dirPath.$arrayjs[$i] ?>" alt="<?php echo $arrayjs[$i] ?>">
                    </div>
                </div>
                <br/>
                <?php
            }
        ?>
    </div>

    <script src="main.js"></script>
</body>
</html>