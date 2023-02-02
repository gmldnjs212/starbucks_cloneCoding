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


const thisYear = document.querySelector('.this-year');
// textContent : 요소의 글자내용을 알아내거나 값을 지정하는 용도
thisYear.textContent = new Date().getFullYear(); // 2023 