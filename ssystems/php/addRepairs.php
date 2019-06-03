<?php
    header("content-type:text/html;charset=utf-8");
    $datas = trim($_POST['datas']);
    $data = json_decode($_POST['datas']);
    $lNuber = $data[0];
    $sNuber = $data[1];
    $fCount = $data[2];
    $cTime = $data[3];
    $statu =$data[4];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
     $sql = "INSERT INTO `repairs`(`lNuber`, `sNuber`, `fCount`,`cTime`,`statu`) VALUES ('$lNuber','$sNuber','$fCount','$cTime','$statu')";
    // $sql = "update `user` set uname=' $uname',upwd='$upwd' where uname= '$uname'";
    $result = mysqli_query($db,$sql);
    if ($result) {
       echo "1";
     }else {
        echo "0";
    } 