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