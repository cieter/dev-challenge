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
    <div id="playButton">
        <div id="myButton">&#9654;</div>
    </div>
    <div id="wrapper">
    <div class="background_image"><img src="files/images/laurahenk.jpg" alt=""></div>
    <div class="logo">
        <div class="title"><span class="first-letter">G</span>oede tijden<span class="bottom-text">Slechte <span>tijden</spane></span></div>
        <div class="red_circle"></div>
        <div class="red_lines"></div>
        <div class="white_lines"></div>
    </div>
    <div id="stack">
        <?php 
            for($i = 0; $i <= count($arrayjs)-1; $i++) {
        ?>
                <div class="card">
                    <div class="image">
                        <img class="iamge" src="<?php echo $dirPath.$arrayjs[$i] ?>" alt="<?php echo $arrayjs[$i] ?>">
                    </div>
                </div>
                <br/>
        <?php
            }
        ?>
    </div>
    <!-- <audio id="intro" src="files/mp3/gtst_seizoen_31_intro.mp3" allow="autoplay"></audio> -->
    </div>
    <script src="main.js"></script>
</body>
</html>