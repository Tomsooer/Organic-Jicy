const menuIcon = document.querySelector('.menu-icon');
header = document.querySelector('header');
	body = document.querySelector(body);

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('menu-icon--active');
	header.classList.toggle('header--mobile');
	body.classList.toggle('no-scroll')
});

const  sliderArows = document.querySelector('.slider-arrows')
	   sliderArows = sliderArows.querySelectorAll('.slider-arrows__item');
       prev = sliderArows.querySelector('.slider-arrows__arrow--left')
       prev = sliderArows.querySelector('.slider-arrows__arrow--right')

console.log(sliderArows)

