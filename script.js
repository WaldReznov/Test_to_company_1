const handleScroll = () => {
  const sections = document.getElementsByTagName('section');

  for(let i = 0; i < sections.length; i++) {
    checkPositionAside(sections[i], i)
  }
}

function checkPositionAside(element, index) {
  const aside = document.querySelector('.aside')
  let {y, height} = element.getBoundingClientRect()

  if(height + y > aside.getBoundingClientRect().top && y <= aside.getBoundingClientRect().top) {

    
    changeColor(element);
    changeActiveAside(index)
  }
}

const changeColor = (element) => {
  const aside = document.getElementsByClassName('aside')[0];
  const classes = element.classList;

  for(let i = 0; i < classes.length; i++){
    if (classes[i] === 'aside__white'){
      aside.classList.add('aside__white')
      aside.classList.remove('aside__black')
    } else if (classes[i] === 'aside__black') {
      aside.classList.remove('aside__white')
      aside.classList.add('aside__black')
    }
  }
}

function changeActiveAside(index) {
  const items = document.getElementsByClassName('aside__item');
  
  for(let i = 0; i < items.length; i++) {
    if(i === index) {
      items[i].classList.add('aside__item__active');
    } else {
      items[i].classList.remove('aside__item__active');
    }
  }
}


window.addEventListener('scroll', handleScroll);


const showMenu = () => {
  document.getElementsByClassName('toggleMenu')[0].classList.toggle('toggleMenu__active')
}