<?php
    header("content-type:text/html;charset=utf-8");
    $datas = trim($_POST['datas']);
    $data = json_decode($_POST['datas']);
    $sLou = $data[0];
    $sNum = $data[1];
    $eMonth = $data[2];
    $money = $data[3];
    $statu = $data[4];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
    $sql = "INSERT INTO `electric`(`sLou`, `sNum`, `eMonth`,`money`, `statu`) VALUES ('$sLou','$sNum','$eMonth','$money','$statu')";
    $result = mysqli_query($db,$sql);
    if ($result) {
       echo "1";
     }else {
        echo "0";
    } 
