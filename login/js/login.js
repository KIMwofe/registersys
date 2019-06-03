setInterval(createStar,50);
	
function createStar(){
    var img = document.createElement("img");
    img.style.position = "absolute";
    img.style.zIndex = -1;
    img.src = "register/images/star.gif";
    document.body.appendChild(img);
    function getRand(min,max){
        return parseInt(Math.random() * (max - min + 1)) + min;
    }
    var randW = getRand(15,30);
    img.style.width = randW + "px";
    //left最小是0，最大是浏览器可视区的宽度
    //top最小是0,最大是浏览器可视区的高度
    //浏览器可视区的宽度
    //window.innerWidth
    //浏览器可视区的高度
    //window.innerHeight
    
    var randL = getRand(0,window.innerWidth - randW);
    var randT = getRand(0,window.innerHeight - randW);
    img.style.top = randT + "px";
    img.style.left = randL + "px";
    
    img.onclick = function(){
        //this.remove();
        this.parentNode.removeChild(img);
    }
    
}
function login(){
    var index = 1;
    $("#stu").focus(function(){ 
        index = 0;
    });
    $("#admin").focus(function(){ 
        index = 1;
    });
    $("#login-button").click(function(){
        var uname = $("form").find("input").eq(0).val();
         var uPw = $("form").find("input").eq(1).val();
        if(index == 1){
            //  console.log(uname + " " + uPw);
            var arr = [uname,uPw];
            var datas = JSON.stringify(arr);
            console.log(datas)
            $.ajax({
                type: "POST",
                url: "login/php/adminLogin.php",
                data: { datas:datas },
                success: function (res) {
                    if(res == 1){
                        var exp= new Date();
                         exp.setTime(exp.getTime()+ 60*30000);
                         document.cookie = "uname="+$("form").find("input").eq(0).val()+";expires="+exp;
                         location.href="index.html";
                    }else{
                       alert("用户名或密码错误，请重新填写");
                       document.getElementById("form").reset();
                    }
                }
            });
        }else{
            var arr = [uname,uPw];
            var datas = JSON.stringify(arr);
            $.ajax({
                type: "POST",
                url: "login/php/stuLogin.php",
                data: { datas:datas },
                success: function (res) {
                    if(res == 1){
                        var exp= new Date();
                         exp.setTime(exp.getTime()+ 60*30000);
                         document.cookie = "uname="+$("form").find("input").eq(0).val()+";expires="+exp;
                         location.href="sindex.html";
                    }else{
                       alert("学号或密码错误，请重新填写");
                       document.getElementById("form").reset();
                    }
                }
        });
    }
    
    });
}
login();