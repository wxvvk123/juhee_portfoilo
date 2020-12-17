// 네비바 클릭 시 네비 활성화
$('.btn').on('click',function(){ 
    $('#menu').show();
});
// 네비 클로즈버튼 클릭 시 네비 비활성화
$('.close').on('click',function(){
    $('#menu').hide();
});
$('.menu_bg').on('click',function(){
    $('#menu').hide();
});
// 로드창
$(window).load(function() {
	$('#loader').addClass('is_active');
	setTimeout(function() {
		$('#loader').addClass('is_loaded');
	}, 4000);
	setTimeout(function() {
		$('#loader_second').addClass('is_loaded');
	}, 1800);
});

// mokup fade in
function triggerJqueryFadeIn(){
    $(".fade-in").each(function(){
        var e=$(this).offset().top;
        $(window).scrollTop()+$(window).height()>e&&"0"==$(this).css("opacity")&&animateQueue.push(this)
    }),triggerJqueryFadeInQueue()}function triggerJqueryFadeInQueue(){
        if(0!=animateQueue.length&&ready){ready=!1,$this=animateQueue.shift();
            var e=void 0!=$($this).attr("data-fade-in-speed")?parseInt($($this).attr("data-fade-in-speed")):700;$($this).animate({opacity:"1",top:"50%"},e,function(){
                $($this).css("position","static"),ready=!0,triggerJqueryFadeInQueue()}
            )}}$(document).ready(function(){
                $(".fade-in").css({opacity:"0",position:"relative",bottom:"-20%"
        }),triggerJqueryFadeIn(),$(window).scroll(triggerJqueryFadeIn)});
            var animateQueue=new Array,ready=!0;
// });


// cursor
var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});