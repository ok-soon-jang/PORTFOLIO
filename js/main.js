// const btns = document.querySelector(".detail_wrap"); // 모달을 띄우는 버튼 요소 가져오기
// const modal = document.querySelector(".modalWrap"); // 모달 창 요소 가져오기
// const closeModalBtn = document.querySelector(".closeBtn"); // 모달을 닫는 버튼(X) 요소 가져오기

// btns.forEach((btn)=>{
//   btn.onclick = function () {
//     modal.style.display = "block"; // 버튼을 클릭하면 모달을 보이게 함
//   };
// })

  // btns.onclick = function () {
  //   modal.style.display = "block"; // 버튼을 클릭하면 모달을 보이게 함
  // };


// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none"; // 모달 외부를 클릭하면 모달을 숨김
//   }
// };

// closeModalBtn.addEventListener('click', () => {
//   modal.style.display = "none";
// });






window.addEventListener('load',()=>{
  const grid = new Isotope("div.detail_portfolio__contents", {
    itemSelector: 'article',
    columnWidth: 'article',
    transitionDuration: "0.5s"
  });

  const btns=document.querySelectorAll('.detail_portfolio ul li');

  btns.forEach( btn => {
    btn.addEventListener('click', e=>{
      e.preventDefault();

      const isOn=e.currentTarget.classList.contains('on');
      if(isOn) return;
      activation(e);
    })
  })

  function activation(event){

    for(let btn of btns) btn.classList.remove('on');
    event.currentTarget.classList.add('on');

    const btn_a = event.currentTarget.querySelector('a');
    const a_href = btn_a.getAttribute("href");

    grid.arrange({filter: a_href});
  }
});



window.addEventListener('load',()=>{
  const grid = new Isotope("div.web_portfolio__contents", {
    itemSelector: 'article',
    columnWidth: 'article',
    transitionDuration: "0.5s"
  });

  const btns=document.querySelectorAll('.web_portfolio ul li');

  btns.forEach( btn => {
    btn.addEventListener('click', e=>{
      e.preventDefault();

      const isOn=e.currentTarget.classList.contains('on');
      if(isOn) return;
      activation(e);
    })
  })

  function activation(event){

    for(let btn of btns) btn.classList.remove('on');
    event.currentTarget.classList.add('on');

    const btn_a = event.currentTarget.querySelector('a');
    const a_href = btn_a.getAttribute("href");

    grid.arrange({filter: a_href});
  }
});

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!

const toTopEl = document.querySelector('#to-top')
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {

    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {

    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300)
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
  console.log("xptmxm")
})
