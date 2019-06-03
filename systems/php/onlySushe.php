<?php
    header("content-type:text/html;charset=utf-8");
    $total = $_GET["total"];
    $db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"dormitorysys");
	mysqli_query($db,"set names utf8");
	$sql = "SELECT  total FROM student WHERE total = '$total'";
	$result = mysqli_query($db,$sql);
    $arr = mysqli_fetch_array($result);

	if($arr["total"] == $total){
		echo 1;
	}else{
		echo 0;
	}
	
?>