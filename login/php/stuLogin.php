<?php
    header("content-type:text/html;charset=utf-8");
    $datas = trim($_POST['datas']);
    $data = json_decode($_POST['datas']);
	$sNuber = $data[0];
	$sPwd =  $data[1];
	$db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"dormitorysys");
	mysqli_query($db,"set names utf8");
	$sql = "select sNuber,sPwd from student where sNuber = '$sNuber'";
	$result = mysqli_query($db,$sql);
	$arr = mysqli_fetch_array($result); 
	if($arr){
		if($sPwd == $arr["sPwd"]){
			echo 1 ;
		}else{
			echo 0 ;
		}
	}else{
		echo 0 ;
	}
		
	
	
?>