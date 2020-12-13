const next = document.querySelector('.button .next');
const prev = document.querySelector('.button .prev');
const slides = document.querySelectorAll('.slide');

index = 0;

function display(index){
  Array.from(slides).forEach(slide => {
    slide.style.display = 'none';
  })
  slides[index].style.display = 'grid';
}

display(index);

next.addEventListener('click', () => {
  index++;
  if(index >= slides.length){
    index = 0;
  }
  display(index);
});

prev.addEventListener('click', () => {
  index--;
  if(index < 0) {
    index = slides.length -1;
  }
  display(index);
});