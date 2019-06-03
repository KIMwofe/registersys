<?php
	if ($_FILES["file"]["error"] > 0)
{
    echo "错误：" . $_FILES["file"]["error"] . "<br>";
}
else
{
    // $db = mysqli_connect("localhost","root","");
    // mysqli_select_db($db,"dormitorysys");
    // mysqli_query($db,"set names utf8");
    // $sql = "SELECT lNuber,shuNuber,sName FROM student WHERE sNuber = '$sNuber'";
    // $result = mysqli_query($db,$sql);
    // $arr= mysqli_fetch_array($result);
    // if($arr){
        //$sql = "INSERT INTO `mesboard`(`lNuber`, `sNuber`, `name`,`	tmpName`) VALUES ('$arr['lNuber']','$arr['shuNuber']','$arr['sName']','$_FILES['file']['name']')";
        // print_r($arr);
        // echo "上传文件名: " . $_FILES["file"]["name"] . "<br>";
        // echo "文件类型: " . $_FILES["file"]["type"] . "<br>";
        // echo "文件大小: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
        // echo "文件临时存储的位置: " . $_FILES["file"]["tmp_name"];
        move_uploaded_file($_FILES["file"]["tmp_name"], "../../images/" . $_FILES["file"]["name"]);
    // }
    

}

	
?>