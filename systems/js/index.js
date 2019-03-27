var userHover = function () {
    $(".adminImg").hover(function () {
        $(".action").show();
    }, function () {
        $(".action").hide();
    })
    for (let i = 0; i < $(".action h1").length; i++) {
        $(".action h1").eq(i).hover(function () {
            $(".action h1").eq(i).css("background", "#EEEEE0");
        }, function () {
            $(".action h1").eq(i).css("background", "#fff");
        })
    }

}
userHover();
var suerUp = function () {
    $(".action h1").eq(0).click(function () {
        var str = "";
        str += ` 
             <div class="updata_user">
                <h1>修改用户密码</h1>
                <form action="./systems/php/update_user.php" method="get">
                    请输入用户名： <input type="text" name="uname" id="userName"> <br>
                    请输入密码： <input type="password" name="upwd" id="userPwd"> <br>
                    <!-- 请再次输入密码：<input type="password" name="upwd" id="userPwd1"><br> -->
                     <input type="submit" value="提交" id="sub">
                </form>
            </div>`

        $(".warp_inner").html(str);
    });
    // var url = location.href;
    // var num = url.split("?").slice(1).join();
    // if (num == 1) {
    //     $(".warp_inner").html(" ");
    //     $(".updata_user").show();
    // }
}
suerUp();
var stuMge = function () {
    $(".stuMg").click(function () {
        $(".warp_counte").hide();
        $(".stu_mge").show();
    });
}
stuMge();