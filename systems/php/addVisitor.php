<?php
    header("content-type:text/html;charset=utf-8");
    $datas = trim($_POST['datas']);
    $data = json_decode($_POST['datas']);
    $lNuber = $data[0];
    $sNuber = $data[1];
    $vName = $data[2];
    $cTime = $data[3];
    $gTime = $data[4];
    $sSex = $data[5];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
     $sql = "INSERT INTO `visitor`(`lNuber`, `sNuber`, `vName`,`cTime`, `gTime`,`sSex`) VALUES ('$lNuber','$sNuber','$vName','$cTime','$gTime','$sSex')";
    //  INSERT INTO `student`(`id`, `lNuber`, `shuNuber`, `cNuber`, `sNuber`, `sName`, `sSex`, `sPwd`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8])
    // $sql = "update `user` set uname=' $uname',upwd='$upwd' where uname= '$uname'";
    $result = mysqli_query($db,$sql);
    if ($result) {
       echo "1";
     }else {
        echo "0";
    } 