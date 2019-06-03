<?php
    header("content-type:text/html;charset=utf-8");
    $uname = $_GET["uname"];
    $upwd = $_GET["upwd"];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
    // $sql = "INSERT INTO `user`(`uname`, `upwd`) VALUES ('$uname','$upwd')";
    $sql = "update `user` set uname='$uname',upwd='$upwd' where uname= '$uname'";
    $result = mysqli_query($db,$sql);
    if ($result) {
        echo "<script>alert('恭喜，修改成功');location.href='../../index.html?1'</script>";
     }else {
        echo "<script>alert('很遗憾修改失败');location.href='../../index.html'</script>";
    } 
  
   
    
?>