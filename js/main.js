const searchEl = document.querySelector('.search'); /* 클래스가 search인 element를 찾아서 searchEl에 할당 */
const searchInputEl = searchEl.querySelector('input'); /* searchEl안에서 input요소를 찾는 개념 */

/* searchEl에 클릭 이벤트를 추가 */
/* 클릭을 하면 함수를 실행할 것이고 그 함수를 핸들러라고 한다 */
searchEl.addEventListener('click', function(){
  searchInputEl.focus(); // .focus : focus가 가능한 input같은 요소에 focus를 강제 적용해주는 명령어
});

searchInputEl.addEventListener('focus', function(){ // focus : 포커스가 되었을 때
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색'); 
});

searchInputEl.addEventListener('blur', function(){ // blur : 포커스가 해제 되었을 때
  searchEl.classList.remove('focused'); 
  searchInputEl.setAttribute('placeholder',''); 
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
      /* display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에,
        자연스러운 전환 효과를 적용할 수 없습니다. */
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle( 함수, 시간(ms))



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});


// new = 클래스 생성자
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데
  loop: true, // 반복 재생
  // autoplay: {
  //   delay: 500, // 500ms, 기본값은 3000ms(3초)
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자가 페이지 번호 요소 제어 가능 여부
  },
  navigation:{
    prevEl: '.promotion .swiper-prev', // 이전 슬라이드 버튼
    nextEl: '.promotion .swiper-next' // 다음 슬라이드 버튼
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion // !true => false, !false => true 반대값으로 전환
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});