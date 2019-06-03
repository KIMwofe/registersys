<?php
    header("content-type:text/html;charset=utf-8");
    $total = $_POST["taNum"];
    $news = "已交";
    $db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"dormitorysys");
	mysqli_query($db,"set names utf8");
	$sql = "UPDATE `electric` SET `statu`='$news' WHERE `id`='$total' ";
    $result = mysqli_query($db,$sql);
	if($result){
		echo 1;
	}else{
		echo 0;
	}
?>