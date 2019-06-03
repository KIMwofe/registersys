<?php
	 header("content-type:text/html;charset=utf-8");
	 $sNuber = $_GET["sNuber"];
	$db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"dormitorysys");
	mysqli_query($db,"set names utf8");
	$sql = "SELECT  * FROM student WHERE sNuber = '$sNuber'";
	$result = mysqli_query($db,$sql);
	$arr = mysqli_fetch_array($result);

	if($result){
		$arrJson =json_encode($arr,JSON_UNESCAPED_UNICODE);
        echo $arrJson;
	}else{
		echo 0;
	}
	
?>