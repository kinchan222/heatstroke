$(function(){
	// pagepilingをPCのみで表示する。レスポンシブはoffにするコード
	if (responsive() == false) {
		$(document).ready(function() {
			$('#pagepiling').pagepiling({
				menu: '#menu',
						anchors: ['page1', 'page2', 'page3','page4','page5'],
						anchorsColor:"#00bfff",
					sectionsColor: ['#FFFFFF'],
					navigation: {
							'position': 'right',
							 'tooltips': ['熱中症とは', '熱中症になってしまったら', '熱中症予防','おすすめアイテム','一押しアイテム']
				}
			});
		});
	}


	// slick
	$('.ntu-slick').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

  // 1,熱中症とは？原因 
  $(".question").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass('on');
  })  

  // 2,熱中症になってしまったら
  $(".nts-severity-list1").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass('on');
  })  

  // go to top 
  $('.go-top-btn').on('click',function(){
    $('html,body').animate({'scrollTop':0},1000); 
   })

	 console.log(responsive())
	 function responsive() {
			var w = $(window).width();
		 	if ( w <= 767 ) {
		 		return true
		 	} else {
		 		return false
		 	}
		 }

// 大外かっこ
})


// ********* レスポンシブ *************
// $(function(){
// $('#pagepiling').fullpage();
 
// $(window).on('load resize', function () {
// 	responsive();
// });

// function responsive() {
// 	var w = $(window).width();
// 	if ( w <= 767 ) {
// 		$.fn.fullpage.setResponsive(true);
// 	} else {
// 		$.fn.fullpage.setResponsive(false);
// 	}
// }
// })