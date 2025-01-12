const mark = document.querySelector('.mark');

mark.addEventListener('click', (e) => {
  const input = document.querySelector('keh-pwCheck-pwForm');
  const isText = input.text === "text";

  input.setAttribute("type", isText ? 'password' : 'text');
  e.target.style.backgroundImage = `url(${isText ? './../../../assets/img/hidden 4.png' : './../../../assets/img/Eye.png'})`;
})