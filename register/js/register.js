
var uname = document.getElementById("uname");
var upwd = document.getElementsByClassName("upwd")[0];
var h3 = document.getElementsByTagName("h3")[0];
var h4 = document.getElementsByTagName("h4")[0];
var form = document.getElementById("form");
var stu = document.getElementById("stu");
var admin = document.getElementById("admin");
var flag = false;
uname.onfocus = function() {
    h3.style.display = "block";
}
uname.onblur = function() {
    h3.style.display = "none";
}
upwd.onfocus = function() {
    h4.style.display = "block";
}
upwd.onblur = function() {
    h4.style.display = "none";
}
setInterval(createStar, 50);

//用户唯一验证
uname.onchange = function() {
    var uVal = this.value;
    var xhr = new XMLHttpRequest();
    // console.log("registersys/register/php/onlyNameCheck.php?uname=" + uVal);
    xhr.open("get", "register/php/onlyNameCheck.php?uname=" + uVal);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //console.log(xhr.responseText);
                var res = xhr.responseText;
                //console.log(res);
                // //1表示用户名存在
                if (res == 1) {
                    alert("用户名已存在");
                    flag = false;
                } else {
                    //0表示用户名不存在
                    flag = true;

                }
            }
        }
    }

}
stu.onfocus = function() {
    form.action = "register/php/student.php"
}
admin.onfocus = function() {
    form.action = "register/php/register.php"
}

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