var a=[];
var b=[];
var d=[".one",".two",".three",".four"];
function start(){
    a=[];
    b=[];
    var c=Math.floor(Math.random()*4);
    b.push(c+1);
    console.log(b);
    $("h1").text("level-"+b.length);
    $(d[c]).addClass("clk");
    setTimeout(function(){
        $(d[c]).removeClass("clk");
    },500);
    //setTimeout(startgame,500);
}
function ran(){
    a=[];
    var c=Math.floor(Math.random()*4);
    b.push(c+1);
    console.log(b);
    $("h1").text("level-"+b.length);
    $(d[c]).addClass("clk");
    setTimeout(function(){
        $(d[c]).removeClass("clk");
    },500);
}
$(document).on("keypress",start);
{
$(d[0]).on("click",function(){
    var t=$(this);
    a.push(1);
    console.log(a);
   $(this).addClass("clk");
   setTimeout(function(){
    $(t).removeClass("clk");
},500);
//setTimeout(start,1500);
});
$(d[1]).on("click",function(){
    var t=$(this);
    a.push(2);
    console.log(a);
   $(this).addClass("clk");
   setTimeout(function(){
    $(t).removeClass("clk");
},500);
//setTimeout(start,1000);
});
$(d[2]).on("click",function(){
    var t=$(this);
    a.push(3);
    console.log(a);
   $(this).addClass("clk");
   setTimeout(function(){
    $(t).removeClass("clk");
},500);
//setTimeout(start,1000);
});
$(d[3]).on("click",function(){
    var t=$(this);
    a.push(4);
    console.log(a);
   $(this).addClass("clk");
   setTimeout(function(){
    $(t).removeClass("clk");
},500);
});

$(".s").on("click",function(){
    
    if(a[a.length-1]===b[a.length-1]){
        //$("h1").text("level-"+b.length);
        if(a.length===b.length){
            setTimeout(ran,1000);
        }
    }
    else{
        $(".bdy").addClass("wrg");
        var s=new Audio("negative_beeps-6008.mp3");
        s.play();
        var t=$(this);
        setTimeout(function(){
            $(".bdy").removeClass("wrg");
        },500);
        b=[];
        $("h1").text("Press A Key to Re-Start");
    }
});
//setTimeout(start,1000);
}