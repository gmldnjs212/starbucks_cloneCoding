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

// 요소를 찾아서 할당시켜 두는 코드 , 한번찾았으니 이후에 또 찾지말고 할당된 변수 사용
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

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
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0 // 0 : 원래위치
    });

  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100 // 100 : 오른쪽으로 100px만큼 , 화면밖으로 사라짐
    });
  }
}, 300));
// _.throttle( 함수, 시간(ms))

toTopEl.addEventListener('click', function(){ // toTopEl을 클릭하면
  gsap.to(window, .7, { // 0.7초에 걸쳐서
    scrollTo: 0 // 화면의 0인 위치로 이동하겠다!
  });
})

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
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 하나의 화면에 몇개의 슬라이드를 보여줄 것인가
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){ // 선택자, 지연시간, 크기
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5 , 2.5), { // 위에서 정의한 랜덤함수 (최소값, 최대값)
    // 옵션
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // y 20만큼 이동하고 다시 되돌아가는 속성
    ease: Power1.easeInOut, // https://greensock.com/docs/v2/Easing
    delay: random(0, delay) // 지연시간 = 0 ~ 인자값 delay
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  
  new ScrollMagic
    // .Scene메소드 : 특정한 요소를 감시하는 역할수행
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 감시하는 요소가 뷰포트(0~1)기준 지정한 값에 걸리면 실행
    })
    // .setClassToggle(클래스를 토글할 요소, 토글할 클래스 이름)
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
})

const thisYear = document.querySelector('.this-year');
// textContent : 요소의 글자내용을 알아내거나 값을 지정하는 용도
thisYear.textContent = new Date().getFullYear(); // 2023 