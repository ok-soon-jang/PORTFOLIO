

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

const btn = document.querySelector(".detail_wrap"); // 모달을 띄우는 버튼 요소 가져오기
const modal = document.getElementById("modalWrap"); // 모달 창 요소 가져오기
// const closeModalBtn = document.querySelector(".closeBtn"); // 모달을 닫는 버튼(X) 요소 가져오기


btn.onclick = function () {
  modal.style.display = "block"; // 버튼을 클릭하면 모달을 보이게 함
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // 모달 외부를 클릭하면 모달을 숨김
  }
};

// closeModalBtn.addEventListener('click', () => {
//   modal.style.display = "none";
// });

