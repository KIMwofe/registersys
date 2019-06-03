<?php
	 header("content-type:text/html;charset=utf-8");
	 $sName = $_GET["sName"];
	$db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"dormitorysys");
	mysqli_query($db,"set names utf8");
	$sql = "SELECT  sName FROM student WHERE sName = '$sName'";
	$result = mysqli_query($db,$sql);
	$arr = mysqli_fetch_array($result);

	if($arr["sName"] == $sName){
		echo 1;
	}else{
		echo 0;
	}
	
?>