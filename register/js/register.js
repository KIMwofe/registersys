
var uname = document.getElementById("uname");
var upwd = document.getElementsByClassName("upwd")[0];
var h3 = document.getElementsByTagName("h3")[0];
var h4 = document.getElementsByTagName("h4")[0];
var form = document.getElementById("form");
var stu = document.getElementById("stu");
var admin = document.getElementById("admin");
var flag = false;
var num = 6666;
setInterval(createStar, 50);

//用户唯一验证
uname.onchange = function() {
    var uVal = this.value;
   $.ajax({
       type: "POST",
       url: "register/php/onlyNameCheck.php",
       data: {uVal:uVal},
       success: function (res) {
           if(res == 1){
               alert("该用户已存在");
           }
       }
   });

}
$(".num").change(function(){
    var number = this.value;
    if (num == number) {
        flag =  true;
    }else{
        flag =  false;
        alert("注册码不正确");
    }
});
// var number = $(".num").value();
// if (number == num) {
//     flag = true;
// } else {
//     alert("注册码不正确！");
//     flag = false;
// }
form.onsubmit = function() {
    if (flag) {
        return true;
    } else {
        return false;
    }
}


function createStar() {
    var img = document.createElement("img");
    img.style.position = "absolute";
    img.style.zIndex = -1;
    img.src = "register/images/star.gif";
    document.body.appendChild(img);

    function getRand(min, max) {
        return parseInt(Math.random() * (max - min + 1)) + min;
    }
    var randW = getRand(15, 30);
    img.style.width = randW + "px";
    //left最小是0，最大是浏览器可视区的宽度
    //top最小是0,最大是浏览器可视区的高度
    //浏览器可视区的宽度
    //window.innerWidth
    //浏览器可视区的高度
    //window.innerHeight	
    var randL = getRand(0, window.innerWidth - randW);
    var randT = getRand(0, window.innerHeight - randW);
    img.style.top = randT + "px";
    img.style.left = randL + "px";

    img.onclick = function() {
        //this.remove();
        this.parentNode.removeChild(img);
    }

}
//createStar();