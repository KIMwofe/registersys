<?php
    header("content-type:text/html;charset=utf-8");
    $datas = trim($_POST['datas']);
    $data = json_decode($_POST['datas']);

    $lNuber = $data[0];
    $shuNuber = $data[1];
    $cNuber = $data[2];
    $sNuber = $data[4];
    $total = $data[3];
    $sMajor = $data[5];
    $sClass = $data[6];
    $sName = $data[7];
    $sSex = $data[8];
    $sPwd = $data[9];
    $sGrade = $data[10];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
     $sql = "INSERT INTO `student`(`lNuber`, `shuNuber`, `cNuber`,`total`, `sNuber`,`sMajor`,`sClass`, `sName`, `sSex`, `sPwd`,`sGrade`) VALUES ('$lNuber','$shuNuber','$cNuber','$total','$sNuber','$sMajor','$sClass','$sName','$sSex','$sPwd','$sGrade')";
    //  INSERT INTO `student`(`id`, `lNuber`, `shuNuber`, `cNuber`, `sNuber`, `sName`, `sSex`, `sPwd`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8])
    // $sql = "update `user` set uname=' $uname',upwd='$upwd' where uname= '$uname'";
    $result = mysqli_query($db,$sql);
    if ($result) {
       echo "1";
     }else {
        echo "0";
    } 
  
   
    
?>