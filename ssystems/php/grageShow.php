<?php
    //在数据库中查询所有的学生信息，
    header("Access-Control-Allow-Origin：http://服务器ip");
    header("content-type:text/html;charset=utf-8");
    $sNuber = $_POST["sNuber"];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
    // $sql = "INSERT INTO `user`(`uname`, `upwd`) VALUES ('$uname','$upwd')";
    $sql = "SELECT sName FROM student WHERE sNuber = '$sNuber'";
    $result = mysqli_query($db,$sql);
    $arr= mysqli_fetch_array($result);
    $sName = $arr["sName"];
    if($result){
        $sql = "SELECT * FROM `gragemsg` WHERE `sname`='$sName' ORDER BY `gragemsg`.`ctime` ASC ";
        $result = mysqli_query($db,$sql);
         while($prr = mysqli_fetch_array($result)){
         $arrJson =json_encode($prr,JSON_UNESCAPED_UNICODE);
         echo $arrJson.",";
         }
    }
?>