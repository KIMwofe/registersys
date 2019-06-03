window.onload = function () {
    cookies();
    claarCookie();
    userHover();
    suerUp();
    masageShow();
    searchShow();
    addFangClick();
    visitFang();
    eleShow();
    visitEle();
    visirepairs();
}
// 用户名检测
function cookies() {
    var str = document.cookie;
    var sname = str.split("=").slice(1).join();
    // console.log( sname);
    if (str) {
        $(".adminImg").find("i").text(sname);
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
//点击显示学生信息表
$(".stuMg").click(function () {
    $(".warp_counte").hide();
    $(".stu_mge").show();
    phpJson();
});
//点击显示访客信息表
function visitFang() {
    $(".visiFang").click(function () {
        $(".warp_counte").hide();
        $(".stu_mge").show();
        fangMesage();
    });
}
function visitEle() {
    $(".visiEle").click(function () {
        $(".warp_counte").hide();
        $(".stu_mge").show();
        visiEle();
    });
}
//点击显示报修信息
function visirepairs() {
    $(".visirepairs").click(function () {
        $(".warp_counte").hide();
        $(".stu_mge").show();
        rMesage();
    });
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
        scrollTo(0, 0);
    });
}

// 表格分页
var goPage = function (pno, psize) {
    var itable = document.getElementsByClassName("fl-table")[1];
    var num = itable.rows.length;//表格所有行数(所有记录数)
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页
    if (num / pageSize > parseInt(num / pageSize)) {
        totalPage = parseInt(num / pageSize) + 1;
    } else {
        totalPage = parseInt(num / pageSize);
    }
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize + 1;//开始显示的行 31
    var endRow = currentPage * pageSize;//结束显示的行  40
    endRow = (endRow > num) ? num : endRow;  //40
    //遍历显示数据实现分页
    for (var i = 1; i < (num + 1); i++) {
        var irow = itable.rows[i - 1];
        if (i >= startRow && i <= endRow) {
            irow.style = {
                "display": "none"
            };
        } else {
            irow.style.display = "none";
        }
    }
    var tempStr = "共" + num + "条记录 分" + totalPage + "页 当前第" + currentPage + "页";
    if (currentPage > 1) {
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (1) + "," + psize + ")\">首页</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (currentPage - 1) + "," + psize + ")\"><上一页</a>"
    } else {
        tempStr += "首页";
        tempStr += "<上一页";
    }
    if (currentPage < totalPage) {
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (currentPage + 1) + "," + psize + ")\">下一页></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (totalPage) + "," + psize + ")\">尾页</a>";
    } else {
        tempStr += "下一页>";
        tempStr += "尾页";
    }
    document.getElementById("barcon").innerHTML = tempStr;
}
// goPage(1, 5);
// 学生信息渲染
var phpJson = function () {
    var table = table;
    var url = "systems/php/1.php";
    var data = {};
    $.post(url, data,
        function (res) {

            var arr = "[" + res.substr(0, res.length - 1) + "]";
            var arrJs = JSON.parse(arr);

            var str = "";

            for (var i = 0; i < arrJs.length; i++) {
                str += ` 
             <tr>
                <td>${arrJs[i].lNuber}</td>
                <td>${arrJs[i].shuNuber}</td>
                <td>${arrJs[i].cNuber}</td>
                <td>${arrJs[i].sMajor}</td>
                <td>${arrJs[i].sClass}</td>
                <td>${arrJs[i].sNuber}</td>
                <td>${arrJs[i].sName}</td>
                <td>${arrJs[i].sSex}</td>
                <td style="display:none" class="taNum">${arrJs[i].total}</td>
                <td><input type="button" value="-" id="minBtn"></td>
            </tr>
                    `

            }

            var spr = "";
            spr = `
                        <div class="stu_mge ">
                        <h1>学生信息</h1>
                        <table class="fl-table">
                            <thead>
                                <tr>
                                    <th>宿舍楼</th>
                                    <th>宿舍号</th>
                                    <th>床位</th>
                                    <th>学院</th>
                                    <th>班级</th>
                                    <th>学号</th>
                                    <th>姓名</th>
                                    <th>性别</th>
                                    <th>操作</th>
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
            goPage(1, 10);
            minMesage();
            scrollTo(0, 0);
        });
}


var masageShow = function () {
    $(".adStu").click(function () {
        var str = "";
        str = `
                <div class="addStu">
                <form action="" method="GET" id="form">
                    <ul>
                        <li></li>
                        <li>楼号 : <select class="se1">
                                <option value ="">---选择楼栋---</option>
                                <option value ="1">一号楼</option>
                                <option value ="2">二号楼</option>
                                <option value="3">三号楼</option>
                                <option value="4">四号楼</option>
                                <option value="5">五号楼</option>
                            </select>
                        </li>
                        <li>宿舍号 : <select class="se2">
                                <option value ="">---选择楼层号---</option>
                                <option value ="10">10</option>
                                <option value ="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                                <option value="60">60</option>
                                <option value="70">70</option>
                            </select>
                            <select class="se3">
                                <option value ="">---选择宿舍号---</option>
                                    <option value ="1">1</option>
                                    <option value ="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value ="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                </select>
                        </li>
                        <li>
                            床位 : <select class="se4">
                                    <option value ="">---选择床位---</option>
                                    <option value ="01">01</option>
                                    <option value ="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                </select>
                        </li>
                        <li>
                            学号 : <input type="text" name="sNuber">
                        </li>
                        <li> 
                            学院 : <select class="se5" name="major">
                                <option value ="">---选择学院---</option>
                            </select>
                        </li>
                        <li> 
                            班级 : <select class="se6" name="class">
                                    <option value ="">---选择班级---</option>
                            </select>
                        </li>
                        <li>
                            姓名 : <input type="text" name="sName" >
                        </li>
                        <li>
                            性别 : <input type="radio" name="p" id="man" checked="checked">男 &nbsp;&nbsp;<input type="radio" name="p" id="girl">女
                        </li>
                         <li>
                            社区分 : <input type="text" value="100">
                        </li>
                        <li>
                            密码 : <input type="text" value="0000">
                        </li>
                       
                        <li>
                            <input type="button" value="提交" id="sBtn"> &nbsp;&nbsp;<input type="reset" value="重置">
                        </li>
                    </ul>
                </form>
            
            </div>
        `
        $(".warp_inner").html(str);
        onlySushe()
        onlyStudent()
        erji();
        addStudents();
        scrollTo(0, 0);
    })
}

// 信息录入
function addStudents() {
    var sName = $(".addStu").find("li").eq(5).find("input").text();
    var sex = "男";
    $("#man").focus(function () {
        sex = "男";
    });
    $("#girl").focus(function () {
        sex = "女";
    });
    $("#sBtn").click(function () {
        var sLou = $(".addStu").find("li").eq(1).find("option:selected").text();
        var sNum = $(".addStu").find("li").eq(2).find("option:selected").text();
        var sMahor = $(".addStu").find("li").eq(5).find("option:selected").text();
        var sClass = $(".addStu").find("li").eq(6).find("option:selected").text();

        var sChuang = $(".addStu").find("li").eq(3).find("option:selected").text();
        var sNuber = $(".addStu").find("li").eq(4).find("input").val();
        var sName = $(".addStu").find("li").eq(7).find("input").val();
        var sGrade = $(".addStu").find("li").eq(9).find("input").val();
        var sPwd = $(".addStu").find("li").eq(10).find("input").val();
        var lVal = $(".addStu").find("li").eq(1).find("option:selected").val();
        var total = lVal + sNum + sChuang;
        // console.log(sLou + " " + sNum + " " + sChuang + " " + total + " " + sNuber + " " + sName + " " + sPwd);
        var arr = [sLou, sNum, sChuang, total, sNuber, sMahor, sClass, sName, sex, sPwd, sGrade];
        var datas = JSON.stringify(arr);
        $.ajax({
            type: "post",
            url: "systems/php/addstu.php",
            data: { datas: datas },
            dataType: "json",
            success: function (res) {
                if (res == 1) {
                    alert("学生信息录入成功");
                    document.getElementById("form").reset();
                } else {
                    alert("不好意思，录入失败");
                }
            }
        });

    })

}

//验证学生唯一
function onlyStudent() {
    $(".addStu").find("li").eq(4).find("input").change(function () {
        var sNuber = $(".addStu").find("li").eq(4).find("input").val();
        $.ajax({
            type: "GET",
            url: "systems/php/onlySnuber.php",
            data: { sNuber: sNuber },
            success: function (res) {
                if (res == 1) {
                    $(".addStu").find("li").eq(7).find("input").change(function () {
                        var sName = $(".addStu").find("li").eq(7).find("input").val();
                        $.ajax({
                            type: "GET",
                            url: "systems/php/onlyName.php",
                            data: { sName: sName },
                            success: function (res) {
                                if (res == 1) {
                                    alert("该学生已录入");
                                    var sNuber = $(".addStu").find("li").eq(4).find("input").val(" ");
                                    var sName = $(".addStu").find("li").eq(7).find("input").val(" ");
                                }
                            }
                        });
                    })
                    alert("该学号后台已存在");
                }
            }
        });
    })
}
//验证宿舍床位唯一
function onlySushe() {
    $(".addStu").find("li").eq(3).find("select").change(function () {
        var lVal = $(".addStu").find("li").eq(1).find("option:selected").val();
        var sNum = $(".addStu").find("li").eq(2).find("option:selected").text();
        var sChuang = $(".addStu").find("li").eq(3).find("option:selected").text();
        var total = lVal + sNum + sChuang;
        $.ajax({
            type: "GET",
            url: "systems/php/onlySushe.php",
            data: { total: total },
            success: function (res) {
                if (res == 1) {
                    alert("该床位已有学生入住");
                    document.getElementById("form").reset();
                }
            }
        });
    });
}
// 二级联动
function erji() {
    var province = ["信息工程学院", "外国语学院", "体育学院", "机电工程学院", "医学院"];//0 == 0 
    var city = [["计科1班", "计科2班", "电信1班", "电信2班", "通信1班"], ["英语1班", "日语1班", "日语2班"], ["修体1班", "修体2班", "体教1班", "体教2班"], ["机建1班", "机建2班"], ["医检1班", "医检2班", "影像1班", "影像1班"]];
    var pro = $("select[name=major]");
    var cObj = $("select[name=class]");
    for (var i = 0; i < province.length; i++) {
        var options = new Option(province[i], province[i] + i);
        pro.append(options);
    }
    pro.change(function () {
        var str = $(this).val();
        var pIndex = str.substr(str.length - 1, 1);

        cObj.get(0).options.length = 1;

        for (var i = 0; i < city[pIndex].length; i++) {
            var options = new Option(city[pIndex][i], city[pIndex][i]);
            cObj.append(options);
        }

    });
}
function minMesage() {
    for (let i = 0; i < $("input:button").length; i++) {
        $("input:button").eq(i).click(function () {
            var taNum = $(".taNum").eq(i).text();
            $.ajax({
                type: "post",
                url: "systems/php/deleStu.php",
                data: { taNum: taNum },
                success: function (res) {
                    if (res == 1) {
                        alert("该学生信息已删除成功");
                        phpJson();
                    } else {
                        alert("该学生信息已删除失败");
                    }
                }
            });
        });
    }

}
// 学生信息查询
var search = function () {
    $(".sNamee").change(function () {
        // console.log($(".sNamee").val());
        var sName = $(".sNamee").val();
        $.ajax({
            type: "GET",
            url: "systems/php/search.php",
            data: { sName: sName },
            success: function (res) {
                if (res == "null") {
                    alert("该学生不存在");
                } else {
                    var arrJs = JSON.parse(res);
                    var str = "";
                    str += ` 
                        <tr>
                            <td>${arrJs.lNuber}</td>
                            <td>${arrJs.shuNuber}</td>
                            <td>${arrJs.cNuber}</td>
                            <td>${arrJs.sMajor}</td>
                            <td>${arrJs.sClass}</td>
                            <td>${arrJs.sNuber}</td>
                            <td>${arrJs.sName}</td>
                            <td>${arrJs.sSex}</td>
                            <td style="display:none" class="taNum">${arrJs.total}</td>
                            <td><input type="button" value="-" id="minBtn"></td>
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
                                    <th>学院</th>
                                    <th>班级</th>
                                    <th>学号</th>
                                    <th>姓名</th>
                                    <th>性别</th>
                                    <th>操作</th>
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
                    $(".stuSh_inner").html(spr);
                    $(".fl-table").eq(1).html(str);
                    minMesage();
                }
            }
        });

    });
}
function searchShow() {
    $(".stuSerch").click(function () {
        var str = `
                <div class="stuSh">
                <form action="">
                    <h1>学生信息查询</h1>
                    <input type="text" class="sNamee">
                </form>
                <div class="stuSh_inner"></div>
            </div>
        `
        $(".warp_counte").hide();
        $(".warp_inner").html(str);
        search();
        scrollTo(0, 0);
    })
}
//添加访客信息
function addFangClick() {
    $(".addFang").click(function () {
        var str = `
        <div class="addStu">
            <form action="" method="GET" id="form">
                <ul>
                    <li></li>
                    <li>所去楼号 : <select class="se1">
                            <option value="">---选择楼栋---</option>
                            <option value="1">一号楼</option>
                            <option value="2">二号楼</option>
                            <option value="3">三号楼</option>
                            <option value="4">四号楼</option>
                            <option value="5">五号楼</option>
                        </select>
                    </li>
                    <li>所去宿舍 : <select class="se2">
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
                        访客姓名 : <input type="text" name="" id="">
                    </li>
                    <li>
                        访问时间 :  <input id="datetime-local" name="datetime-local" type="datetime-local"/> 
                    </li>
                    <li>
                        离开时间 :  <input id="datetime-local" name="datetime-local" type="datetime-local"/> 
                    </li>
                    <li>
                        性别 : <input type="radio" name="p" id="man" checked="checked">男 &nbsp;&nbsp;<input
                            type="radio" name="p" id="girl">女
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
        addFang();
        scrollTo(0, 0);
    })

}
function addFang() {
    var sex = "男";
    $("#man").focus(function () {
        sex = "男";
    });
    $("#girl").focus(function () {
        sex = "女";
    });
    $("#fBtn").click(function () {
        var sLou = $(".addStu").find("li").eq(1).find("option:selected").text();
        var sNum = $(".addStu").find("li").eq(2).find("option:selected").text();
        var fName = $(".addStu").find("li").eq(3).find("input").val();
        var cTime = $(".addStu").find("li").eq(4).find("input").val();
        var gTime = $(".addStu").find("li").eq(5).find("input").val();
        var ct = cTime.split("T").join(" ");
        var gt = cTime.split("T").join(" ");
        // console.log(sLou + " " + sNum  + " " + fName + " " + ct +" " + gt+ " " + sex);
        var arr = [sLou, sNum, fName, ct, gt, sex];
        var datas = JSON.stringify(arr);
        $.ajax({
            type: "POST",
            url: "systems/php/addVisitor.php",
            data: { datas: datas },
            success: function (res) {
                if (res == 1) {
                    alert("访客信息添加成功");
                    document.getElementById("form").reset();
                } else {
                    alert("访客信息添加失败");
                }
            }
        });
    })
}
//访客信息查看
function fangMesage() {
    var table = table;
    var url = "systems/php/visitFang.php";
    var data = {};
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
                <td>${arrJs[i].vName}</td>
                <td>${arrJs[i].cTime}</td>
                <td>${arrJs[i].gTime}</td>
                <td>${arrJs[i].sSex}</td>
                <td style="display:none" class="taNum">${arrJs[i].id}</td>
                <td><input type="button" value="-" id="minBtn"></td>
            </tr>
                    `

            }
            var spr = "";
            spr = `
                        <div class="stu_mge ">
                        <h1>访客信息</h1>
                        <table class="fl-table">
                            <thead>
                                <tr>
                                    <th>来访宿舍楼</th>
                                    <th>去向宿舍号</th>
                                    <th>访客时间</th>
                                    <th>来访时间</th>
                                    <th>离开时间</th>
                                    <th>性别</th>
                                    <th>操作</th>
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
            goPage(1, 10);
            deleVitor();
            scrollTo(0, 0);
        });
}
function deleVitor() {
    for (let i = 0; i < $("input:button").length; i++) {
        $("input:button").eq(i).click(function () {
            var taNum = $(".taNum").eq(i).text();
            $.ajax({
                type: "post",
                url: "systems/php/deleVisitor.php",
                data: { taNum: taNum },
                success: function (res) {
                    if (res == 1) {
                        alert("该学生信息已删除成功");
                        fangMesage();
                    } else {
                        alert("该学生信息已删除失败");
                    }
                }
            });
        });
    }
}
// 添加电费信息
function eleShow() {
    $(".addEle").click(function () {
        var str = `
        <div class="addStu">
            <form action="" method="GET" id="form">
                <ul>
                    <li></li>
                    <li>楼栋号 : <select class="se1">
                            <option value="">---选择楼栋---</option>
                            <option value="1">一号楼</option>
                            <option value="2">二号楼</option>
                            <option value="3">三号楼</option>
                            <option value="4">四号楼</option>
                            <option value="5">五号楼</option>
                        </select>
                    </li>
                    <li>宿舍号 : <select class="se2">
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
                    电费月份 : <select class="se3">
                        <option value="">---选择月份---</option>
                        <option value="1">1月</option>
                        <option value="2">2月</option>
                        <option value="3">3月</option>
                        <option value="4">4月</option>
                        <option value="5">5月</option>
                        <option value="6">6月</option>
                        <option value="7">8月</option>
                        <option value="7">9月</option>
                        <option value="7">10月</option>
                        <option value="7">11月</option>
                        <option value="7">12月</option>
                    </select>
                    </li>
                    <li>
                        金额 : <input type="text" name="" id=""> 
                    </li>
                    <li>
                    电费支付状态 : <select class="se3">
                        <option value="">---请选择---</option>
                        <option value="1">已交</option>
                        <option value="2">未交</option>
                    </select>
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
        addEle();
        scrollTo(0, 0);
    });
}
function addEle() {
    $("#fBtn").click(function () {
        var sLou = $(".addStu").find("li").eq(1).find("option:selected").text();
        var sNum = $(".addStu").find("li").eq(2).find("option:selected").text();
        var eMonth = $(".addStu").find("li").eq(3).find("option:selected").text();
        var money = $(".addStu").find("li").eq(4).find("input").val();
        var statu = $(".addStu").find("li").eq(5).find("option:selected").text();
        // console.log(sLou + " " + sNum  + " " + eMonth + " " + money +" " + statu);
        var arr = [sLou, sNum, eMonth, money, statu];
        var datas = JSON.stringify(arr);
        $.ajax({
            type: "POST",
            url: "systems/php/addEletrict.php",
            data: { datas: datas },
            success: function (res) {
                if (res == 1) {
                    alert("电费信息添加成功");
                    document.getElementById("form").reset();
                } else {
                    alert("电费信息添加失败");
                }
            }
        });
    })
}
//电费信息查看
function visiEle() {
    var table = table;
    var url = "systems/php/eletricShow.php";
    var data = {};
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
                <td><input type="button" value="更新" id="minBtn"></td>
            </tr>
                    `
            }
            var spr = "";
            spr = `
                        <div class="stu_mge ">
                        <h1>各宿舍电费信息</h1>
                        <table class="fl-table">
                            <thead>
                                <tr>
                                    <th>楼栋号</th>
                                    <th>宿舍号</th>
                                    <th>缴纳电费月份</th>
                                    <th>金额</th>
                                    <th>缴纳状态</th>
                                    <th>操作</th>
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
            goPage(1, 10);
            updataEle();
            scrollTo(0, 0);
        });
}
function updataEle() {
    for (let i = 0; i < $("input:button").length; i++) {
        $("input:button").eq(i).click(function () {
            var taNum = $(".taNum").eq(i).text();
            $.ajax({
                type: "post",
                url: "systems/php/updataELe.php",
                data: { taNum: taNum },
                success: function (res) {
                    if (res == 1) {
                        alert("更新成功");
                        visiEle();
                    } else {
                        alert("更新失败");
                    }
                }
            });
        });
    }
}
function rMesage() {
    var table = table;
    var url = "systems/php/visitRepairs.php";
    var data = {};
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
                <td><input type="button" value="受理" id="minBtn" class="changSt"></td>
            </tr>
                    `
            }
            var spr = "";
            spr = `
                        <div class="stu_mge ">
                        <h1>宿舍报修信息</h1>
                        <table class="fl-table">
                            <thead>
                                <tr>
                                    <th>报修宿舍楼</th>
                                    <th>报修宿舍号</th>
                                    <th>报修内容</th>
                                    <th>报修时间</th>
                                    <th>维修状态</th>
                                    <th>操作</th>
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
            statusChga();
        });
}
function statusChga() {
    for (let i = 0; i < $("input:button").length; i++) {

        $(".changSt").eq(i).click(function () {
            var taNum = $(".taNum").eq(i).text();
            $.ajax({
                type: "post",
                url: "systems/php/changeStaru.php",
                data: { taNum: taNum },
                success: function (res) {
                    if (res == 1) {
                        alert("受理成功");
                        rMesage()
                    } else {
                        alert("受理失败");
                    }
                }
            });
        });
    }
}
 $(".community").click(function () { 
     frageShow() ;
  });
function frageShow() {
        var table = table;
        var url = "systems/php/1.php";
        var data = {};
        $.post(url, data,
            function (res) {

                var arr = "[" + res.substr(0, res.length - 1) + "]";
                var arrJs = JSON.parse(arr);

                var str = "";

                for (var i = 0; i < arrJs.length; i++) {
                    str += ` 
             <tr>
                <td>${arrJs[i].lNuber}</td>
                <td>${arrJs[i].shuNuber}</td>
                <td>${arrJs[i].cNuber}</td>
                <td>${arrJs[i].sGrade}</td>
                <td>${arrJs[i].sMajor}</td>
                <td>${arrJs[i].sClass}</td>
                <td>${arrJs[i].sNuber}</td>
                <td>${arrJs[i].sName}</td>
                <td>${arrJs[i].sSex}</td>
                <td style="display:none" class="taNum">${arrJs[i].total}</td>
                <td><input type="button" value="+"  class="btn addBtn"> <input type="button" value="-" id="miBtn" class="btn miBtn"></td>
            </tr>
                    `

                }

                var spr = "";
                spr = `
                        <div class="stu_mge ">
                        <h1>学生信息</h1>
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
                                    <th>操作</th>
                                </tr>
                            </thead>
                        </table>
                        <table class="fl-table">
                            <tbody>
                            <tbody>
                        </table>
                            <div id="barcon" name="barcon"></div>
                        </div>
                        <div class="update"></div>
                        `
                $(".warp_inner").html(spr);
                $(".fl-table").eq(1).html(str);
                goPage(1, 10);
                updataGra();
                scrollTo(0, 0);
            });
}
function updataGra() {
    var str = " ";
    var index=1;
    str = `
            <div class="addStu">
                <form action="" method="GET" id="form">
                    <ul>
                        <li><div class=xx>✖</div></li>
                        <li>
                        加分/扣分时间 :  <input id="datetime-local" name="datetime-local" type="datetime-local"/> 
                        </li>
                        <li>
                            加/扣分数 : <input type="text" name="" id=""> 
                        </li>
                        <li>
                            加/扣原因 : <input type="text" name="" id=""> 
                    
                        </li>
                        <li class="list">
                            <input type="button" value="提交" id="fBtn" class="in"> &nbsp;&nbsp;<input type="reset" value="重置" class="in">
                        </li>
                    </ul>
                </form>
         </div>
    `;
    for (let i = 0; i < $("input:button").length; i++) {
        $(".miBtn").eq(i).click(function () {
            $(".update").html(str);
            var sid = $(".taNum").eq(i).text();
            $("#fBtn").click(function () {
                var eTime = $(".addStu").find("li").eq(1).find("input").val();
                var sGrade = $(".addStu").find("li").eq(2).find("input").val();
                var statu = $(".addStu").find("li").eq(3).find("input").val();
                var ct = eTime.split("T").join(" ");
                // console.log(ct+" "+sGrade+" "+statu+" "+sid)
                var arr = [ct, sGrade, statu,sid];
                var datas = JSON.stringify(arr);
                $.ajax({
                    type: "post",
                    url: "systems/php/updataGra.php",
                    data:  {datas: datas },
                    success: function (res) {
                        if(res == 1){
                            alert("社区分更新成功！");
                            $(".update").html(" ");
                            frageShow();
                        }else{
                            alert("社区分更新失败！");
                        }
                    }
                });
            });
            $(".xx").click(function(){ 
                $(".addStu").hide();
            });
        });  
        $(".addBtn").eq(i).click(function () {
            $(".update").html(str);
            var sid = $(".taNum").eq(i).text();
            $("#fBtn").click(function () {
                var eTime = $(".addStu").find("li").eq(1).find("input").val();
                var sGrade = $(".addStu").find("li").eq(2).find("input").val();
                var statu = $(".addStu").find("li").eq(3).find("input").val();
                var ct = eTime.split("T").join(" ");
                // console.log(ct+" "+sGrade+" "+statu+" "+sid)
                var arr = [ct, sGrade, statu,sid];
                var datas = JSON.stringify(arr);
                $.ajax({
                    type: "post",
                    url: "systems/php/addGrage.php",
                    data:  {datas: datas },
                    success: function (res) {
                        if(res == 1){
                            alert("社区分更新成功！");
                            $(".update").html(" ");
                            frageShow();
                        }else{
                            alert("社区分更新失败！");
                        }
                    }
                });
            });
            $(".xx").click(function(){ 
                $(".addStu").hide();
            });
        });
    } 
  
}

