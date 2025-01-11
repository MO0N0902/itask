const tagBtns = document.querySelectorAll('.bjs-ask-tag-btn');

tagBtns.forEach((tagBtn) => {
  tagBtn.addEventListener('click', function () {
    // 모든 버튼에서 bjs-ask-select 클래스 제거
    tagBtns.forEach((btn) => btn.classList.remove('bjs-ask-select'));

    // 클릭된 버튼에 bjs-ask-select 클래스 추가
    tagBtn.classList.add('bjs-ask-select');
  });
});
let commentCount = 0;
function addComment() {
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();
  
  // 댓글이 비어 있지 않으면
  if (commentText !== '') {
    // 새로운 댓글을 생성
    const commentArea = document.createElement('div');
    commentArea.classList.add('comment');
    commentArea.textContent = commentText;

    // 댓글을 댓글 섹션에 추가
    const commentSection = document.getElementById('comment-section');
    commentSection.appendChild(commentArea);
    
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