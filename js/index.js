$(document).ready(function(){

	//브라우저 높이 가져오기
	let wh = $(window).height();

	//브라우저 창 사이즈 변경시
	$(window).resize(function(){
		wh = $(window).height();
		$("#txt1").text($(this).scrollTop());
		$("html,body").stop().animate({ scrollTop:wh*a},700);
	});

	//탑메뉴 클릭시
	$("#gnb li").click(function(){
		let num=$(this).index();
		$('html,body').animate({ scrollTop:wh*num},700);
		$("#dot span").eq(num).addClass("active");
		$("#dot span").eq(num).siblings().removeClass("active");

		$(this).addClass("active");
    $(this).siblings().removeClass("active");


	});

	window.addEventListener('scroll', function() { 
		var nav = document.querySelector('ul'); 
		var sections = document.querySelectorAll('section'); 
		var currentSectionIndex = -1;
	});

  //마우스휠 이벤

	let a = 0;  
	let area_n = $(".area").length;  
	let wheel = true;

	$(".area").on("mousewheel DOMMouseScroll",function(e,delta) {
		
		e.preventDefault();
		if ( wheel ) {
			let n = $(this).index();

			if(delta < 0) {  //휠을 아래로 
				a = n+1;
				
			} 
			else {  //휠을 위로 
				a = n-1;
			}
			if ( a <= 0 ) { a = 0; }
			if ( a >= area_n-1 ) { a = area_n-1; }
			
			$("#gnb li").eq(a).addClass("active");
			$("#gnb li").eq(a).siblings().removeClass("active");
			$("#dot span").eq(a).addClass("active");
			$("#dot span").eq(a).siblings().removeClass("active");
			$('html,body').stop().animate({ scrollTop:wh*a },700);
		}

	}); 

});