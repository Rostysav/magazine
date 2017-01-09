$(document).ready(function(){

	//fulpageJS

	 // $('#fullpage').fullpage();

	/*nav btn toggle*/
	$('.nav-btn').click(function(){
		$('.nav-list li').slideToggle();
	})

	//Slider
	 $('.carousel').carousel({
      interval: 6000
    })


	 //Scroll header
	 $(window).scroll(function() {
		if ($(this).scrollTop() > 0){  
   			$('.navigation').addClass("scroll-nav");
  		}else{
 		   $('.navigation').removeClass("scroll-nav");
 		}
	});

	 //load more btn
	 $('.load-more').on('click', function(e){
	 	e.preventDefault();
	 	$('.letest-prj').find('.toggle').toggleClass('hidden');

	 	if($(this).text() == 'close'){
           $(this).text('Load more');
       } else {
           $(this).text('close');
       }
	 });




})

