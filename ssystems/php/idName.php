<?php
    header("content-type:text/html;charset=utf-8");
    $snuber = $_POST["snuber"];
    $db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"dormitorysys");
	mysqli_query($db,"set names utf8");
	$sql = "select sNuber,sName FROM student WHERE sNuber = '$snuber'";
    $result = mysqli_query($db,$sql);
    $arr = mysqli_fetch_array($result);
	if($result){
		echo $arr["sName"];
	}
?>