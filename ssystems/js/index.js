window.onload = function () {
    cookies();
    userHover();
    claarCookie();
    suerUp();
    visitEle();
    repairs();
    visirepairs();
}
// 用户名检测
function cookies() {
    var str = document.cookie;
    var snuber = str.split("=").slice(1).join();
    // console.log( snuber);
    if (str) {
        $.ajax({
            type: "post",
            url: "ssystems/php/idName.php",
            data: { snuber: snuber },
            success: function (res) {
                if (res) {
                    $(".adminImg").find("i").text(res);
                } else {
                    console.log(0);
                }
            }
        });
    } else {
        alert("还未登陆，请登陆");
        location.href = "login.html"
    }
}
//清除用户登陆状态
function claarCookie() {
    var str = document.cookie;
    var sname = str.split("=").slice(1).join();
    $(".action").find("h1").eq(1).click(function () {
        var date = new Date(0);
        document.cookie = "uname=sname;expires=" + date;
        window.location.reload();
    })
}
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
function suerUp() {
    $(".action h1").eq(0).click(function () {
        var str = "";
        str += ` 
             <div class="updata_user">
                <h1>修改用户密码</h1>
                <form action="./ssystems/php/update_stu.php" method="get">
                    请输入学号： <input type="text" name="uname" id="userName"> <br>
                    请输入密码： <input type="password" name="upwd" id="userPwd"> <br>
                    <!-- 请再次输入密码：<input type="password" name="upwd" id="userPwd1"><br> -->
                     <input type="submit" value="提交" id="sub">
                </form>
            </div>`

        $(".warp_inner").html(str);
        scrollTo(0, 0);
    });
}
//点击显示学生信息表
$(".stuMg").click(function () {
    $(".warp_counte").hide();
    $(".stu_mge").show();
    phpJson();
    scrollTo(0, 0);
});
//点击显示报修信息
function visirepairs() {
    $(".visirepairs").click(function () {
        $(".warp_counte").hide();
        $(".stu_mge").show();
        rMesage();
    });
}
//点击显示学生宿舍电费信息表
function visitEle() {
    $(".visiEle").click(function () {
        $(".warp_counte").hide();
        $(".stu_mge").show();
        visiEle();
    });
}

//学生信息表显示
function phpJson() {
    var str = document.cookie;
    var sNuber = str.split("=").slice(1).join();
    $.ajax({
        type: "GET",
        url: "ssystems/php/1.php",
        data: { sNuber: sNuber },
        success: function (res) {
            if (res) {
                var arrJs = JSON.parse(res);
                var str = "";
                str += ` 
                <tr>
                    <td>${arrJs.lNuber}</td>
                    <td>${arrJs.shuNuber}</td>
                    <td>${arrJs.cNuber}</td>
                    <td>${arrJs.sGrade}</td>
                    <td>${arrJs.sMajor}</td>
                    <td>${arrJs.sClass}</td>
                    <td>${arrJs.sNuber}</td>
                    <td>${arrJs.sName}</td>
                    <td>${arrJs.sSex}</td>
                    <td style="display:none" class="taNum">${arrJs.total}</td>
                </tr>
                `
                var spr = "";
                spr = `
                <div class="stu_mge ">
                <table class="fl-table">
                    <thead>
                        <tr>
                            <th>宿舍楼</th>
                            <th>宿舍号</th>
                            <th>床位</th>
                            <th>社区文明分</th>
                            <th>学院</th>
                            <th>班级</th>
                            <th>学号</th>
                            <th>姓名</th>
                            <th>性别</th>
                        </tr>
                    </thead>
                </table>
                <table class="fl-table">
                    <tbody>
                    <tbody>
                </table>
                    <div id="barcon" name="barcon"></div>
                </div>
                `
                $(".warp_inner").html(spr);
                $(".fl-table").eq(1).html(str);
            } else {
                alert(0);
            }
        }
    });
}
//添加保修信息
function repairs() {
    $(".repairs").click(function () {
        var str = `
        <div class="addStu">
            <form action="" method="GET" id="form">
                <ul>
                    <li></li>
                    <li>报修楼号 : <select class="se1">
                            <option value="">---选择楼栋---</option>
                            <option value="1">一号楼</option>
                            <option value="2">二号楼</option>
                            <option value="3">三号楼</option>
                            <option value="4">四号楼</option>
                            <option value="5">五号楼</option>
                        </select>
                    </li>
                    <li>报修宿舍 : <select class="se2">
                            <option value="">---选择楼层号---</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="70">70</option>
                        </select>
                        <select class="se3">
                            <option value="">---选择宿舍号---</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </li>
                    <li>
                        报修内容 : <input type="text" name="" id="">
                    </li>
                    <li>
                        报修时间 :  <input id="datetime-local" name="datetime-local" type="datetime-local"/> 
                    </li>
                    <li style="display : none ">
                        报修状态 : <input type="text" name="" value="未受理">
                    </li>
                    <li class="list">
                        <input type="button" value="提交" id="fBtn" class="in"> &nbsp;&nbsp;<input type="reset" value="重置" class="in">
                    </li>
                </ul>
            </form>
         </div>
        `
        $(".warp_counte").hide();
        $(".warp_inner").html(str);
        addRepairs();
        scrollTo(0, 0);
    })

}
function addRepairs() {
    $("#fBtn").click(function () {
        var sLou = $(".addStu").find("li").eq(1).find("option:selected").text();
        var sNum = $(".addStu").find("li").eq(2).find("option:selected").text();
        var fCount = $(".addStu").find("li").eq(3).find("input").val();
        var cTime = $(".addStu").find("li").eq(4).find("input").val();
        var statu = $(".addStu").find("li").eq(5).find("input").val();
        var ct = cTime.split("T").join(" ");
        //  console.log(sLou + " " + sNum  + " " + fCount + " " + ct);
        var arr = [sLou, sNum, fCount, ct, statu];
        var datas = JSON.stringify(arr);
        $.ajax({
            type: "POST",
            url: "ssystems/php/addRepairs.php",
            data: { datas: datas },
            success: function (res) {
                if (res == 1) {
                    alert("报修成功");
                    document.getElementById("form").reset();
                } else {
                    alert("报修失败");
                }
            }
        });
    })
}
//报修信息查看
function rMesage() {
    var str = document.cookie;
    var sNuber = str.split("=").slice(1).join();
    var table = table;
    var url = "ssystems/php/visitRepairs.php";
    var data = {
        sNuber: sNuber
    };
    $.post(url, data,
        function (res) {
            var arr = "[" + res.substr(0, res.length - 1) + "]";
            var arrJs = JSON.parse(arr);

            var str = "";

            for (var i = 0; i < arrJs.length; i++) {
                str += ` 
             <tr>
                <td>${arrJs[i].lNuber}</td>
                <td>${arrJs[i].sNuber}</td>
                <td>${arrJs[i].fCount}</td>
                <td>${arrJs[i].cTime}</td>
                <td>${arrJs[i].statu}</td>
                <td style="display:none" class="taNum">${arrJs[i].id}</td>
            </tr>
                    `

            }
            var spr = "";
            spr = `
                        <div class="stu_mge ">
                        <h1>已报修信息</h1>
                        <table class="fl-table">
                            <thead>
                                <tr>
                                    <th>报修宿舍楼</th>
                                    <th>报修宿舍号</th>
                                    <th>报修内容</th>
                                    <th>报修时间</th>
                                    <th>维修状态</th>
                                </tr>
                            </thead>
                        </table>
                        <table  class="fl-table fl-table1" >
                            <tbody>
                            <tbody>
                        </table>
                            <div id="barcon" name="barcon"></div>
                        </div>
                        `
            $(".warp_inner").html(spr);
            $(".fl-table").eq(1).html(str);
            scrollTo(0, 0);
        });
}
//电费信息查看
function visiEle() {
    var str = document.cookie;
    var sNuber = str.split("=").slice(1).join();
    var table = table;
    var url = "ssystems/php/eletricShow.php";
    var data = { sNuber: sNuber };
    $.post(url, data,
        function (res) {
            var arr = "[" + res.substr(0, res.length - 1) + "]";
            var arrJs = JSON.parse(arr);
            var str = "";
            for (var i = 0; i < arrJs.length; i++) {
                str += ` 
             <tr>
                <td>${arrJs[i].sLou}</td>
                <td>${arrJs[i].sNum}</td>
                <td>${arrJs[i].eMonth}</td>
                <td>${arrJs[i].money}</td>
                <td>${arrJs[i].statu}</td>
                <td style="display:none" class="taNum">${arrJs[i].id}</td>
            </tr>
                    `
            }
            var spr = "";
            spr = `
                        <div class="stu_mge ">
                        <h1>电费信息</h1>
                        <table class="fl-table">
                            <thead>
                                <tr>
                                    <th>楼栋号</th>
                                    <th>宿舍号</th>
                                    <th>缴纳电费月份</th>
                                    <th>金额</th>
                                    <th>缴纳状态</th>
                                </tr>
                            </thead>
                        </table>
                        <table  class="fl-table fl-table1" >
                            <tbody>
                            <tbody>
                        </table>
                            <div id="barcon" name="barcon"></div>
                        </div>
                        <div id="right_nav">
                        <a href="#" class="r_shoping" id="icon1">
                            <p>支付宝</p>
                        </a>
                        <a href="#" class="r_shoping" id="icon2">
                            <p>微信</p>
                        </a>
                        <div class="app_aload" style="z-index: 50">
                            <p class="s_right"></p>
                        </div>
                        <div class="app_aload1" style="z-index: 50">
                            <p class="s_right"></p>
                        </div>
                        </div>
                        `
            $(".warp_inner").html(spr);
            $(".fl-table").eq(1).html(str);
            scrollTo(0, 0);
            ewm();
        });
}
function ewm(){
    for(let i = 0;i < $(".r_shoping").length;i++){
        $(".r_shoping").eq(i).mouseenter(function () { 
            switch(i){
                case 0:
                $(".app_aload").show();
                break;
                case 1:
                $(".app_aload1").show();
                break;
            }
        });
        $(".r_shoping").eq(i).mouseleave(function () { 
            $(".app_aload").hide();
            $(".app_aload1").hide();
        });
    }
}
$(".grage").click(function () {
    grage();
});
function grage() {
    var str = document.cookie;
    var sNuber = str.split("=").slice(1).join();
    var table = table;
    var url = "ssystems/php/grageShow.php";
    var data = { sNuber: sNuber };
    $.post(url, data,
        function (res) {
            console.log(res)
            var arr = "[" + res.substr(0, res.length - 1) + "]";
            var arrJs = JSON.parse(arr);
            var str = "";
            for (var i = 0; i < arrJs.length; i++) {
                str += ` 
             <tr>
                <td>${arrJs[i].sname}</td>
                <td>${arrJs[i].ctime}</td>
                <td>${arrJs[i].grage}</td>
                <td>${arrJs[i].mesage}</td>
                <td style="display:none" class="taNum">${arrJs[i].id}</td>
            </tr>
                    `
            }
            var spr = "";
            spr = `
                        <div class="stu_mge ">
                        <h1>社区分加/扣详情</h1>
                        <table class="fl-table">
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>加/扣分时间</th>
                                    <th>被扣分数</th>
                                    <th>加/扣分事项</th>
                                </tr>
                            </thead>
                        </table>
                        <table  class="fl-table fl-table1" >
                            <tbody>
                            <tbody>
                        </table>
                            <div id="barcon" name="barcon"></div>
                        </div>
                        `
            $(".warp_inner").html(spr);
            $(".fl-table").eq(1).html(str);
            scrollTo(0, 0);
        });
}
$(".unused").click(function () {
    unused();
});
function unused() {
    var str = " ";

}
$(".sub").click(function () {
    var data = new Date().toLocaleString();
    var str = document.cookie;
    var sNuber = str.split("=").slice(1).join();
    var arr = [data, sNuber];
    var datas = JSON.stringify(arr);
    $.ajax({
        type: "POST",
        url: "ssystems/php/mesboard.php",
        data: { datas: datas },   
        success: function (res) {
            
        }
    });
})
