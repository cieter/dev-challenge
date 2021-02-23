<?php 
header('Content-Type: application/json');
    if ($dir = opendir('files/images/')) {
        $arrayjs = array();
        while (false !== ($entry = readdir($dir))) {
            if ($entry != "." && $entry != "..") {
                $arrayjs[] = $entry;
            }
        }
        echo json_encode($arrayjs);
        closedir($dir);
    };
?>