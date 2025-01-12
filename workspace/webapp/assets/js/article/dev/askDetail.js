const tagBtns = document.querySelectorAll('.bjs-ask-tag-btn');

tagBtns.forEach((tagBtn) => {
  tagBtn.addEventListener('click', function () {
    // 모든 버튼에서 bjs-ask-select 클래스 제거
    tagBtns.forEach((btn) => btn.classList.remove('bjs-ask-select'));

    // 클릭된 버튼에 bjs-ask-select 클래스 추가
    tagBtn.classList.add('bjs-ask-select');
  });
});
//모니터 버튼 누르면 1증가
let count = 0;

const img = document.getElementById('Detail-moniter-img')
const countplus = document.getElementById('Detail-monitercount')

img.addEventListener('click',function(){
  if(count===0){
    count++;
  }else{
    count--;
  }
  countplus.textContent = count;
})


function Dropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}


let commentCount = 0; // 댓글 수를 저장하는 변수

function addComment() {
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value;
  commentText.className = 'commentText';
  const userName = '준혁';
  
  const moniterImg = "./../../../img/moniter.png ";
  const settingImg = "./../../../img/Container.png";

  
  // 댓글이 비어 있지 않으면
  if (commentText !== '') {
    // 댓글 공간 만들기기
    const commentArea = document.createElement('div');
    commentArea.className = 'commentTextbox'

    // 이름과 댓글 내용,이미지지 포함한 텍스트 생성
    commentArea.innerHTML = `<img src = ${moniterImg} alt="모니터 사진"><strong>${userName}</strong><br> 
    ${commentText} <br>
      <img src = ${moniterImg}>
     <img src = ${settingImg}>`
    // 댓글을 댓글 섹션에 추가
    const commentSection = document.getElementById('comment-section');
    commentSection.appendChild(commentArea);

    // 댓글 수 증가
    commentCount++;
    document.getElementById('comment-count').textContent = commentCount;

    // 입력창 비
    commentInput.value = '';
  } else {
    alert('댓글을 입력해주세요!');
  }
}