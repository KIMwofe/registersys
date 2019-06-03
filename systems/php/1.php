<?php
    //在数据库中查询所有的学生信息，
    header("Access-Control-Allow-Origin：http://服务器ip");
    header("content-type:text/html;charset=utf-8");
    $db = mysqli_connect("localhost","root","");
    mysqli_select_db($db,"dormitorysys");
    mysqli_query($db,"set names utf8");
    // $sql = "INSERT INTO `user`(`uname`, `upwd`) VALUES ('$uname','$upwd')";
    $sql = "SELECT * FROM `student` ORDER BY `student`.`lNuber`,`student`.`shuNuber`,`student`.`cNuber` ASC";
    $result = mysqli_query($db,$sql);
	
    while($arr = mysqli_fetch_array($result)){
         $arrJson =json_encode($arr,JSON_UNESCAPED_UNICODE);
         echo $arrJson.",";
    }
    
    

	/*print_r($studentInfo);
	echo "";*/
	//并且展示在页面
?>