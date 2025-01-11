let count = 0;

const img = document.getElementById('mjh-noticeDetail-moniter')
const countplus = document.getElementById('mjh-noticeDetail-count')

img.addEventListener('click',function(){
  if(count===0){
    count++;
  }else{
    count--;
  }
  countplus.textContent = count;
})