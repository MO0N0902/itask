const tagBtns = document.querySelectorAll('.mjh-askDetail-tag-btn');

tagBtns.forEach((tagBtn) => {
  tagBtn.addEventListener('click', function () {
    // 모든 버튼에서 bjs-ask-select 클래스 제거
    tagBtns.forEach((btn) => btn.classList.remove('mjh-askDetail-select'));

    // 클릭된 버튼에 bjs-ask-select 클래스 추가
    tagBtn.classList.add('mjh-askDetail-select');
  });
});
//모니터 버튼 누르면 1증가

let count1 = -1;

const img = document.getElementById('Detail-moniter-img')
const countplus = document.getElementById('Detail-monitercount')

img.addEventListener('click',function(){
  if(count1===-1){
    count1 = 1;
  }else{
    count1 = -1;
  }
  countplus.textContent = parseInt(countplus.textContent)+count1;
});
//수정삭제 드롭다운
function Dropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
};



//게시물 삭제
const postDeletebtn = document.getElementById('postdelete');
postDeletebtn.addEventListener('click', function(){
  confirm('게시글을 삭제하시겠습니까?')
  if(true){
    
  }
});
  
//게시글 공유
let count3 = -1
const postshare = document.getElementById('Detail-share-img');
const postshareplus = document.getElementById('Detail-sharecount');
postshare.addEventListener('click', function(){
  confirm('구현 못했습니다 직접 복사해주세요.')
  if(count3===-1){
    count3 = 1;
  }else{
    count3 = -1;
  }
  postshareplus.textContent = parseInt(postshareplus.textContent)+count3;
});



// 댓글 수 초기화는 0으로 해야되는데 html에 더미 댓글 하나 있어서
// 초기 세팅을 1로 설정해뒀습니다~
// 나중에 바꿔주시면 됩니다!
let commentCount = 1;

function addComment() {
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();
  
  // 댓글이 비어 있지 않으면
  if (commentText !== '') {
    // 새로운 댓글을 생성

    // 댓글의 모든 정보를 담은 제일 큰 박스
    const commentArea = document.createElement('div');
    commentArea.classList.add('mjh-askDetail-comment-show');

    // 댓글 작성자
    const commmentAuthor = document.createElement('span');
    commmentAuthor.classList.add('mjh-askDetail-comment-author');
    commmentAuthor.textContent = "3inch 임초현🏅"; // 나중에 불러오는거 여기 추가

    // 댓글 (진짜)
    const comment = document.createElement('div');
    comment.classList.add('mjh-askDetail-comment-section');
    comment.textContent = commentText;

    // 작성일자, 조회수, 모니터 담은 박스
    const commentInfo = document.createElement('div');
    commentInfo.classList.add('mjh-askDetail-comment-info');

    // 작성일자
    const commentDate = document.createElement('span');
    commentDate.classList.add('mjh-askDetail-comment-date');
    commentDate.textContent = "1시간 전" // 나중에 불러오는거 여기 추가

   
    // 모니터 수, 이미지 박스
    const commentMonitor = document.createElement('span');
    commentMonitor.classList.add('mjh-askDetail-comment-monitor');


    // 모니터 수
    const commentMonitorNum = document.createElement('span');
    commentMonitorNum.classList.add('mjh-askDetail-comment-monitor-num');
    commentMonitorNum.textContent = " 0"; // 나중에 불러오는거 여기 추가

    //댓글 삭제
    const commentdelete = document.createElement('span');
    // commentdelete.addEventListener('click', function(){
    //   // confirm('댓글을 삭제하시겠습니까?')
    //   if(confirm('댓글을 삭제하시겠습니까?')){
    //     alert('댓글을 삭제합니다')
    //     comment.textContent = '삭제된 댓글입니다.';
    //     comment.classList.add('mjh-askDetail-delete-comment-style');
    //     // 모니터 수 - 변경
    //     commentMonitorNum.textContent = '-';
    //   }else{
    //     alert('취소')
    //   }
    // });
    commentdelete.classList.add('mjh-askDetail-comment-delete');
    commentdelete.textContent = "삭제";

    commentdelete.addEventListener('click', function(){
      // confirm('댓글을 삭제하시겠습니까?')
      if(comment.textContent = '삭제된 댓글입니다.'){
        alert('이미 삭제된 댓글입니다.')
      }else if(confirm('댓글을 삭제하시겠습니까?')){
        alert('댓글을 삭제합니다')
        comment.textContent = '삭제된 댓글입니다.';
        comment.classList.add('mjh-askDetail-delete-comment-style');
        // 모니터 수 - 변경
        commentMonitorNum.textContent = '-';
      }else{
        alert('취소')
      }
    });


    
    //댓글 수정
    const commentmodify = document.createElement('span');
    commentmodify.addEventListener('click', function(){
      if(comment.textContent === '삭제된 댓글입니다.'){
        alert('삭제한 댓글은 수정할 수 없습니다.')
      }else if(confirm('댓글을 수정하시겠습니까?')){
        if(true){
        const modifycomment = prompt('수정할 댓글을 입력해주세요')
        comment.textContent = modifycomment + ' (수정됨)';
        }else{
          
        }
      }else{
        alert('취소')
      }
    });
    commentmodify.classList.add('mjh-askDetail-comment-modify');
    commentmodify.textContent = "수정 ";

    let count = -1;

    //모니터 이미지
    const monitorImg = document.createElement('img');
    monitorImg.setAttribute('src', './../../../assets/img/monitor.png');
    monitorImg.setAttribute('alt', '사진오류');
    monitorImg.addEventListener('click', function(){
      if(comment.textContent === '삭제된 댓글입니다.'){
        alert('삭제한 댓글에는 모니터기능이 제한됩니다.');
        count = 316;
      }else if(count===-1){
        count = 1;
        commentMonitorNum.textContent = parseInt(commentMonitorNum.textContent)+count;
      }else{
        count = -1;
        commentMonitorNum.textContent = parseInt(commentMonitorNum.textContent)+count;
      }
    });
    
    

    // 댓글을 댓글 섹션에 추가
    const commentSection = document.getElementById('comment-section');
    commentSection.appendChild(commentArea);
    commentArea.appendChild(commmentAuthor);
    commentArea.appendChild(comment);
    commentArea.appendChild(commentInfo);
    commentInfo.appendChild(commentDate);
    commentInfo.appendChild(commentMonitor);
    commentMonitor.appendChild(monitorImg);
    commentMonitor.appendChild(commentMonitorNum);
    commentInfo.appendChild(commentmodify);
    commentInfo.appendChild(commentdelete);
    
    // 댓글 수 증가
    commentCount++;

    // 댓글 수 업데이트
    document.getElementById('comment-count').textContent = commentCount;

    // 입력창 비우기
    commentInput.value = '';
  } else {
    alert('댓글을 입력해주세요!');
  }
}