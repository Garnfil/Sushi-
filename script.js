
const aosElements = document.querySelectorAll('.aos');

window.addEventListener('scroll', ScrollElements);

function ScrollElements() {

  aosElements.forEach(e => {
    if (isVisable(e)) {
      e.classList.add('active');
    } 
  });

}

function isVisable(e) {
  const elementPosition = e.getBoundingClientRect();
  const distanceFromTop = -300;

  return elementPosition.top - window.innerHeight < distanceFromTop ? true : false;
}