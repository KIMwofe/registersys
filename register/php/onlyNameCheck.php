<?php
	header("content-type:text/html;charset=utf-8");
    $uname = $_POST["uVal"];
    //$upwd = $_GET["upwd"];
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
	//后台接收到value
	//根据$uname到数据库中查找
	$sql = "select * from user where uname like '$uname'";
	$result = mysqli_query($db,$sql);
	$arr = mysqli_fetch_array($result);
	//print_r($arr);
	if($arr){
		echo 1;//1表示存在
	}else{
		//如果没有表示可以注册
		echo 0;//0表示不存在
	}
	
?>