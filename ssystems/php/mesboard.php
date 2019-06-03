<?php
      header("content-type:text/html;charset=utf-8");
      $datas = trim($_POST['datas']);
      $data = json_decode($_POST['datas']);
      $cTime = $data[0];
      $sNuber = $data[1];
      $db = mysqli_connect("localhost","root","");
      mysqli_select_db($db,"dormitorysys");
      mysqli_query($db,"set names utf8");
      $sql = "SELECT lNuber,shuNuber,sName FROM student WHERE sNuber = '$sNuber'";
      $result = mysqli_query($db,$sql);
      $arr= mysqli_fetch_array($result);
      $arr= mysqli_fetch_array($result);
      if($arr){
          $sql = "INSERT INTO `mesboard`(`lNuber`, `sNuber`, `name`) VALUES ('$arr['lNuber']','$arr['shuNuber']','$arr['sName']')";
      }
        
      
?>