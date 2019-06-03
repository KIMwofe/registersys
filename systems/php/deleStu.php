<?php
    header("content-type:text/html;charset=utf-8");
    $total = $_POST["taNum"];
    $db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"dormitorysys");
	mysqli_query($db,"set names utf8");
	$sql = "delete FROM student WHERE total = '$total'";
    $result = mysqli_query($db,$sql);
	if($result){
		echo 1;
	}else{
		echo 0;
	}
?>