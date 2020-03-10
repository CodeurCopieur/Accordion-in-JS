let navItem = document.querySelectorAll('ul .section__container-navItem'),
    navText = document.querySelectorAll('.section__container-navText'),
    isActive = 'is-active';

  navItem[0].classList.add(isActive);
  navText[0].classList.add(isActive);

for (let index = 0; index < navItem.length; index++) {
    navItem[index].addEventListener('click', (e)=> {
      e.preventDefault();

    for (let index = 0; index < navItem.length; index++) {
          navItem[index].classList.remove(isActive);
          navText[index].classList.remove(isActive);
    }

    navItem[index].classList.add(isActive);
    navText[index].classList.add(isActive);
  })
}
