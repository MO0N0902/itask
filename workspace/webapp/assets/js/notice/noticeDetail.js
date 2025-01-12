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