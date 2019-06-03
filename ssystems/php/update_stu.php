<?php
    header("content-type:text/html;charset=utf-8");
    $sNuber = $_GET["uname"];
    $sPwd = $_GET["upwd"];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
    // $sql = "INSERT INTO `user`(`uname`, `upwd`) VALUES ('$uname','$upwd')";
    $sql = "update `student` set sPwd='$sPwd' where sNuber= '$sNuber'";
    $result = mysqli_query($db,$sql);
    if ($result) {
        echo "<script>alert('恭喜，修改成功');location.href='../../sindex.html'</script>";
     }else {
        echo "<script>alert('很遗憾修改失败');location.href='../../sindex.html'</script>";
    } 
  
   
    
?>