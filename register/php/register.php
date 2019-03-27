<?php
    header("content-type:text/html;charset=utf-8");
    $uname = $_GET["uname"];
    $upwd = $_GET["upwd"];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
    $sql = "INSERT INTO `user`(`uname`, `upwd`) VALUES ('$uname','$upwd')";
    $result = mysqli_query($db,$sql);
    if ($result) {
        echo "<script>alert('恭喜，注册成功');location.href='../../login.html'</script>";
     }else {
        echo "<script>alert('很遗憾注册失败');location.href='../../register.html'</script>";
    } 
  
   
    
?>