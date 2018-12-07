<?php
    $names = array("Jairo", "Jose", "Victor", "Alejandro", "Ana", "Carmen", "María");

    $q = $_REQUEST["q"];

    $total = 0;

    foreach($names as $name){
        if($q == $name){      
            $total++;
        }else{
            $total = $total + 2;
        }
    }

    if($total % 2 == 0){
        echo "The name is avaible";
    }else{
        echo "The name is already in use";
    }
?>