const tagBtns = document.querySelectorAll('.mjh-askDetail-tag-btn');

tagBtns.forEach((tagBtn) => {
  tagBtn.addEventListener('click', function () {
    // 모든 버튼에서 mjh-askDetail-select 클래스 제거
    tagBtns.forEach((btn) => btn.classList.remove('mjh-askDetail-select'));

    // 클릭된 버튼에 mjh-askDetail-select 클래스 추가
    tagBtn.classList.add('mjh-askDetail-select');
  });
});
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
    commmentAuthor.classList.add('mjh-askDetail-commnet-author');
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

    // 조회수
    const commentViews = document.createElement('span');
    commentViews.classList.add('mjh-askDetail-comment-views');
    commentViews.textContent = "조회수 316"; // 나중에 불러오는거 여기 추가

    // 모니터 수, 이미지 박스
    const commentMonitor = document.createElement('span');
    commentMonitor.classList.add('mjh-askDetail-comment-monitor');

    // 모니터 수
    const commentMonitorNum = document.createElement('span');
    commentMonitorNum.classList.add('mjh-askDetail-comment-monitor-num');
    commentMonitorNum.textContent = " 24"; // 나중에 불러오는거 여기 추가

    //모니터 이미지
    const monitorImg = document.createElement('img');
    monitorImg.setAttribute('src', './../../../assets/img/monitor.png');
    monitorImg.setAttribute('alt', '사진오류');

    // 댓글을 댓글 섹션에 추가
    const commentSection = document.getElementById('comment-section');
    commentSection.appendChild(commentArea);
    commentArea.appendChild(commmentAuthor);
    commentArea.appendChild(comment);
    commentArea.appendChild(commentInfo);
    commentInfo.appendChild(commentDate);
    commentInfo.appendChild(commentViews);
    commentInfo.appendChild(commentMonitor);
    commentMonitor.appendChild(monitorImg);
    commentMonitor.appendChild(commentMonitorNum);
    
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