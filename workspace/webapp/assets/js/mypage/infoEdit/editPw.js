const input = document.querySelector('.keh-editPw-pw');
const mark = document.querySelector('.mark');

let pwStatus = false;

// 비밀번호 눈 상태 바꾸기
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

// 유효성에 대한 메시지
const check1 = document.querySelector('.keh-editPw-check1'); // 유효성 불일치 메시지
const check2 = document.querySelector('.keh-editPw-check2'); // 유효성 일치 메시지

// 비밀번호 유효성 조건: 8~20자 영문, 숫자, 특수문자를 포함해야 함 - 참고
const check = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

input.addEventListener('input', function(){
  const inputValue = input.value;

  // 유효성 검사
  if(!check.test(inputValue)){
    check2.style
  }
})