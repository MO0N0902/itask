// const mark = document.querySelector('.mark');
// console.log(mark);

// mark.addEventListener('click', (e) => {
//   const input = document.querySelector("input[name=password]");
//   const isText = input.type === "text";

//   input.setAttribute("type", isText ? 'password' : 'text');
//   e.target.style.backgroundImage = `url(${isText ? './../../../assets/img/hidden 4.png' : './../../../assets/img/Eye.png'})`;
// })


const input = document.querySelector(".keh-pwCheck-pw");
const mark = document.querySelector(".mark");

let pwStatus = false; // 초기 상태: 비밀번호 숨김

mark.addEventListener("click", () => {
  if (pwStatus) {
    input.type = "password"; // 비밀번호 숨김
    mark.src = "./../../../assets/img/hidden 4.png"; // 아이콘 변경
  } else {
    input.type = "text"; // 비밀번호 표시
    mark.src = "./../../../assets/img/Eye.png"; // 아이콘 변경
  }
  pwStatus = !pwStatus; // 상태 변경
});