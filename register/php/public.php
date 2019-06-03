<?php
	header("content-type:text/html;charset=utf-8");
	function getConnect($sql){
		$db = mysqli_connect("localhost","root","","dormitorysys");
		//mysqli_select_db($db,"studentsys");
		mysqli_query($db,"set names utf8");
		//$q = $sql;
		$result = mysqli_query($db,$sql);
		return $result;
	};
	
?>