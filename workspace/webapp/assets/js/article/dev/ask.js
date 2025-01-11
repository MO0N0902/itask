const tagBtns = document.querySelectorAll('.bjs-ask-tag-btn');

// tagBtns.forEach((tagBtn) => {
//   tagBtn.addEventListener('click', function(){
//     with(tagBtn.style){
//       backgroundColor = "#D96073";
//       color= "white";
//     };
//   })
// })

// tagBtns.forEach((tagBtn) => {
//   tagBtn.addEventListener('click', function () {
//     // 모든 버튼의 스타일 초기화
//     tagBtns.forEach((btn) => {
//       btn.style.backgroundColor = "";
//       btn.style.color = "#D96073";
//     });

//     // 클릭된 버튼만 스타일 적용
//     tagBtn.style.backgroundColor = "#D96073";
//     tagBtn.style.color = "white";
//   });
// });

tagBtns.forEach((tagBtn) => {
  tagBtn.addEventListener('click', function () {
    // 모든 버튼에서 bjs-ask-select 클래스 제거
    tagBtns.forEach((btn) => btn.classList.remove('bjs-ask-select'));

    // 클릭된 버튼에 bjs-ask-select 클래스 추가
    tagBtn.classList.add('bjs-ask-select');
  });
});

