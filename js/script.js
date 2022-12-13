// 헤더
let header = document.querySelector("header");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  	// 스크롤 세로값이 헤더높이보다 크거나 같으면 
	// 헤더에 클래스 'drop'을 추가한다
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } 
  // 아니면 클래스 'drop'을 제거
  else {
    header.classList.remove("drop");
  }
};

// 메뉴
$('.menu > li').mouseover(function(){
  $('.sub').stop().slideDown(500);
  $('#subBg').stop().slideDown(400);
}).mouseout(function(){
  $('.sub').stop().slideUp(500);
  $('#subBg').stop().slideUp(600);
});


// 이미지슬라이드

$('.imgslide li:gt(0)').hide();
setInterval(function(){
    $('.imgslide li:first-child').fadeOut(200)
                                .next('li').fadeIn(200)
                                .end().appendTo('.imgslide');
},3000);

