<?php
    header("content-type:text/html;charset=utf-8");
    $datas = trim($_POST['datas']);
    $data = json_decode($_POST['datas']);
	$uname = $data[0];
	$pwd =  $data[1];
	$db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"dormitorysys");
	mysqli_query($db,"set names utf8");
	$sql = "select uname,upwd from user where uname like '$uname'";
	$result = mysqli_query($db,$sql);
	$arr = mysqli_fetch_array($result); 
	if($arr){
		if($pwd == $arr["upwd"]){
			echo 1 ;
		}else{
			echo 0 ;
		}
	}else{
		echo 0 ;
	}
?>