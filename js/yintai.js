
window.onload=function(){
//1.全部分类选项卡特效
	//先获取元素
	var list=$(".list");
	var item=$(".item");
	for(var i=0;i<list.length;i++){
		/*先执行的循环后执行的事件，所以当触发事件时
		i=4，报错。解决方法：要给每个元素添加属性*/
		list[i].index=i;
		list[i].onmouseover=function(){
			//this指移到哪个元素就是谁
			item[this.index].style.display="block";
		}
		list[i].onmouseout=function(){
			item[this.index].style.display="none";
		}
	}

	// 微信
	var weixin=$(".weixin");
	var weixin1=$(".weixin1");
	weixin[0].onmouseover=function(){
		weixin1[0].style.display="block";
	}
	weixin[0].onmouseout=function(){
		weixin1[0].style.display="none";
	}
	// 手机银泰
	var shoujiyintai=$(".shoujiyintai");
	var shoujiyintai1=$(".shoujiyintai1");
	shoujiyintai[0].onmouseover=function(){
		shoujiyintai1[0].style.display="block";
	}
	shoujiyintai[0].onmouseout=function(){
		shoujiyintai1[0].style.display="none";
	}
	// 我的银泰
	var shouye4=$(".shouye4");
	var myyintai=$(".myyintai");
	shouye4[0].onmouseover=function(){
		myyintai[0].style.display="block";
	}
	shouye4[0].onmouseout=function(){
		myyintai[0].style.display="none";
	}

//2.轮播图特效
	var win=$(".banner_middle")[0];//窗口
	var as=$("a",win);//win指范围，banner_middle范围下的a标签
	var lis=$("li",$(".point")[0]);
	var btnl=$(".btnl")[0];
	var btnr=$(".btnr")[0];
	var num=0;//实时监控当前窗口中显示图片的下标
	//初始化状态 第一张图片的层级调高，剩下的降低
	as[0].style.zIndex=10;
	var t=setInterval(moveR,2000);
	win.onmouseover=function(){
		btnr.style.display="block";
		btnl.style.display="block";
        clearInterval(t);
	}
	win.onmouseout=function(){
		btnr.style.display="none";
		btnl.style.display="none";
		t=setInterval(moveR,2000);
	}
	//点儿 选项卡
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			if(num==this.index){
				return;
			}
			for(var j=0;j<as.length;j++){
				// as[j].style.zIndex=5;
				animate(as[j],{opacity:0});
				lis[j].className="";//初始状态			
			}
			lis[this.index].className="hot";
			// as[this.index].style.zIndex=10;
			animate(as[this.index],{opacity:1});
			num=this.index;//更新num
		}
	}

//右边按钮  左边按钮
	var flag=true;
	btnr.onclick=function(){
		if(flag){
			flag=false;
			moveR();
		}
	}
	btnl.onclick=function(){
		if(flag){
			flag=false;	
			moveL();
		}
	}	
//点儿和图片一起动
	function moveR(){
		num++;
		if(num==as.length){
			num=0;
		}
		//先所有的图片层级降低，调高当前图片层级
		for(var i=0;i<as.length;i++){
			// as[i].style.zIndex=5;
			animate(as[i],{opacity:0});
			lis[i].className="";//初始状态			
		}
		lis[num].className="hot";
		// as[num].style.zIndex=10;
		animate(as[num],{opacity:1},function(){
			flag=true;
		});
	}
	function moveL(){
		num--;
		if(num<0){
			num=lis.length-1;
		}
		//先所有的图片层级降低，调高当前图片层级
		for(var i=0;i<as.length;i++){
			// as[i].style.zIndex=5;
			animate(as[i],{opacity:0});
			lis[i].className="";//初始状态			
		}
		lis[num].className="hot";
		// as[num].style.zIndex=10;
		animate(as[num],{opacity:1},function(){
			flag=true;
		});
	}
//3.超值特卖选项卡
	var chaolefttop1=$(".chaolefttop1");
	var item1=$(".item1");
	for(var i=0;i<chaolefttop1.length;i++){
		if(i==0){
			continue;
		}
	}
	for(var i=0;i<chaolefttop1.length;i++){
		chaolefttop1[i].index=i;
		chaolefttop1[i].onmouseover=function(){
			for(var j=0;j<chaolefttop1.length;j++){
				item1[j].style.display="none";
			}
			item1[this.index].style.display="block";
		}		
	}
//4.专柜同款选项卡
	var remenzi=$(".remenzi");
	var remenitem=$(".remenitem");
for(var i=0;i<remenzi.length;i++){
		if(i==2){
			continue;
		}
	}
	for(var i=0;i<remenzi.length;i++){
		remenzi[i].index=i;
		remenzi[i].onmouseover=function(){
			for(var j=0;j<remenzi.length;j++){
				remenitem[j].style.display="none";
			}
			remenitem[this.index].style.display="block";
		}		
	}

//5.线框
var xian=$(".xian");
	for(var i=0;i<xian.length;i++){
		xk(xian[i]);
	}
	function xk(obj){
	var widths=obj.offsetWidth;
	var heights=obj.offsetHeight;

	var lefts=$((".left"),obj)[0];
	var rights=$(".right",obj)[0];
	var tops=$(".top",obj)[0];
	var bottoms=$(".bottom",obj)[0];

	obj.onmouseover=function(){
		animate(lefts,{height:heights});
		animate(rights,{height:heights});
		animate(tops,{width:widths});
		animate(bottoms,{width:widths});
	  }
	obj.onmouseout=function(){
		animate(lefts,{height:0});
		animate(rights,{height:0});
		animate(tops,{width:0});
		animate(bottoms,{width:0});
	  }
    }

//中间轮播图
var box=$(".xxk");
for (var i = 0; i < box.length; i++) {
      lbt(box[i]);
};

function lbt(obj){
var AS=$("a",obj);
var width=parseInt(getStyle(AS[0],"width"));
var Num=0;
var Next=0;
var Btnl=$(".Btnl",obj)[0];
var Btnr=$(".Btnr",obj)[0];
var Flag=true;
for (var i = 0; i < AS.length; i++) {
	if (i==0) {continue};
	AS[i].style.left=width+"px";
};
obj.onmouseover=function(){
	Btnl.style.display="block";
	Btnr.style.display="block";
}
obj.onmouseout=function(){
	Btnl.style.display="none";
	Btnr.style.display="none";
}
Btnr.onclick=function(){
	if (Flag) {
		Flag=false;
		Next--;
	if (Next<0) {Next=AS.length-1};
	AS[Next].style.left=-width+"px";
	animate(AS[Num],{left:width});
	animate(AS[Next],{left:0},function(){
		Flag=true
	});
	Num=Next;
	};
};
Btnl.onclick=function(){
	if (Flag) {
		Flag=false;
		Next++;
	if (Next==AS.length) {Next=0};
	AS[Next].style.left=width+"px";
	animate(AS[Num],{left:-width});
	animate(AS[Next],{left:0},function(){
		Flag=true
	});
	Num=Next;
	};
};
};

//楼层跳转
var floor=$('.floor');
var arr=[];
for (var i = 0; i < floor.length; i++) {
	arr.push(floor[i].offsetTop);
};
var height=document.documentElement.clientHeight;
var lflag=true;
var jump=$('.jump')[0];
var jumps=$('.jump-1',jump);
var jumpss=$('.jump-11',jump);

for (var i = 0; i < jumps.length; i++) {
	jumps[i].index=i;
	jumps[i].onclick=function(){
		lflag=false;
		for (var j = 0; j < jumpss.length; j++) {
			jumpss[j].style.display='none';
		};
	jumpss[this.index].style.display='block';	
	
	animate(document.body,{scrollTop:arr[this.index]},function(){
		lflag=true;
	});
	animate(document.documentElement,{scrollTop:arr[this.index]},function(){
		lflag=true;
	});
	};
};

//滚动事件
var sflag=true;
window.onscroll=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
	var scrollTop=obj.scrollTop;
	//右侧导航的隐藏与出现
	if (scrollTop>=arr[0]-300) {
		jump.style.display='block';
	}else{
		jump.style.display='none';
	}
   if (!lflag) {
   	return;
   };
   for (var i = 0; i < floor.length; i++) {
   	if(scrollTop+height/2>=arr[i]){
   	for (var j = 0; j < jumpss.length; j++) {
			jumpss[j].style.display='none';
		};	
   	jumpss[i].style.display='block';	
   	}
   };


}

//商标轮播
var Box=$(".xxk1");
for (var i = 0; i < Box.length; i++) {
      Lbt(Box[i]);
};

function Lbt(obj){
var AS=$(".jujue_left21",obj);
var width=parseInt(getStyle(AS[0],"width"));
var Num=0;
var Next=0;
var Btnl=$(".BTNl",obj)[0];
var Btnr=$(".BTNr",obj)[0];
var Flag=true;
for (var i = 0; i < AS.length; i++) {
	if (i==0) {continue};
	AS[i].style.left=width+"px";
};
Btnr.onclick=function(){
	if (Flag) {
		Flag=false;
		Next--;
	if (Next<0) {Next=AS.length-1};
	AS[Next].style.left=-width+"px";
	animate(AS[Num],{left:width});
	animate(AS[Next],{left:0},function(){
		Flag=true
	});
	Num=Next;
	};
};
Btnl.onclick=function(){
	if (Flag) {
		Flag=false;
		Next++;
	if (Next==AS.length) {Next=0};
	AS[Next].style.left=width+"px";
	animate(AS[Num],{left:-width});
	animate(AS[Next],{left:0},function(){
		Flag=true
	});
	Num=Next;
	};
};
};










}

