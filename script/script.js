const hamburger=document.getElementById('hamburger');
const navMenu=document.querySelector('.nav-menu');

hamburger.addEventListener('click',()=>{
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('is-active');
});
document.querySelectorAll('.nav-item').forEach(n => 
  n.addEventListener('click',() => {
    navMenu.classList.remove('active');

}));
addPragrph();
function addPragrph() {
  let cartona = `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. At, explicabo.`;
  let pragraphs = document.querySelectorAll(".prag");
  pragraphs.forEach((p) => {
    p.innerHTML = cartona;
  });
}

