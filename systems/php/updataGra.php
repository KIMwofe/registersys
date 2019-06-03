<?php
    header("content-type:text/html;charset=utf-8");
    $datas = trim($_POST['datas']);
    $data = json_decode($_POST['datas']);
    $ctime = $data[0];
    $grage = $data[1];
    $mesage = $data[2];
    $total = $data[3];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
    $sql = "SELECT `sName` FROM `student` WHERE `total`='$total'";
    $result = mysqli_query($db,$sql);
    $arr = mysqli_fetch_array($result);
    if ($result) {
       $sname = $arr["sName"];
       $sql = "INSERT INTO `gragemsg`(`sname`, `ctime`, `grage`, `mesage`) VALUES ('$sname','$ctime','-$grage','$mesage')";
       $result = mysqli_query($db,$sql);
       if($result){
          $sql = "SELECT `sGrade` FROM `student` WHERE `total`='$total'";
          $result = mysqli_query($db,$sql);
          $arr = mysqli_fetch_array($result);
          $sGrade=$arr["sGrade"];
          $all = $sGrade - $grage;
          if($result){
              $sql = "UPDATE `student` SET `sGrade`='$all' WHERE `total`='$total'";
              $result = mysqli_query($db,$sql);
              if($result){
                echo "1";
              }else{
                echo "0";
              }
          }else{
            echo "0";
          }
       }else{
         echo "0";
       }
     }else {
        echo "0";
    } 
?>