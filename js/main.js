
if($(window).width() > 1199){
    $(document).ready(function(){
        $('#search').click(function(){
            $('.navigation-link').toggleClass('hide-item');
            $('.search-form').toggleClass('active')
        });
    });
}
else{
    $(document).ready(function(){
        $('#search').click(function(){
            $('.search-form').toggleClass('active').css("transition-delay","0.1s");
        });
    });
}


$(document).ready(function() {
    $(".toggle").on("click", function() {
        if ($(".navigation-child").hasClass("active")) {
            $(".navigation-child").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".navigation-child").addClass("active");
            $('.navigation-child.active ').css("background","rgb(204, 161, 117)");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});


$(document).ready(function() {
	$('.right-arrow').on('click',function() {
		var currentSlide = $('.users.active');
		var nextSlide = currentSlide.next();

		currentSlide.css('display','none').removeClass('active');
		nextSlide.css('display','flex').addClass('active');

		if(nextSlide.length == 0){
			$('.users').first().css('display','flex').addClass('active');
		}	

	});

	$('.left-arrow').on('click',function() {
		var currentSlide = $('.users.active');
		var nextSlide = currentSlide.prev();

		currentSlide.css('display','none').removeClass('active');
		nextSlide.css('display','flex').addClass('active');

		if(nextSlide.length == 0){
			$('.users').last().css('display','flex').addClass('active');
		}	

	});    
});


function openMeal(evt, mealName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(mealName).style.display = "flex";
    evt.currentTarget.className += " active-tab";
  }