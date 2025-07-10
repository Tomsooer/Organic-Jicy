const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('header');
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('menu-icon--active');
	header.classList.toggle('header--mobile');
	body.classList.toggle('no-scroll');
});

let sliderArrows = document.querySelector('.slider-arrows');
const slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item');
const prev = sliderArrows.querySelector('.slider-arrows__arrow--left');
const next = sliderArrows.querySelector('.slider-arrows__arrow--right');

let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows(-1));
next.addEventListener('click', () => showSlideArrows(1));

function showSlideArrows(n = 0) {
	slideIndex += n;
	if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
	if (slideIndex >= slidesArrows.length) slideIndex = 0;

	slidesArrows.forEach(item => item.style.display = 'none');
	slidesArrows[slideIndex].style.display = 'block';
}

showSlideArrows(slideIndex);


const sliderDots = document.querySelector('.slider-dots');
const slidesDots = sliderDots.querySelectorAll('.slider-dots__item');
let wrapperDots = sliderDots.querySelector('.slider-dots__nav');

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
	const dot = document.createElement('button');
	dot.dataset.slideTo = i.toString();
	dot.classList.add('slider-dots__nav-item');
	if (i === 0) dot.classList.add('slider-dots__nav-item--active');

	if (i !== 0) slidesDots[i].style.display = 'none';

	dot.addEventListener('click', showSlideDots);

	wrapperDots.append(dot);
	dots.push(dot);
}

function showSlideDots(e) {
	const slideTo = e.target.dataset.slideTo;

	slidesDots.forEach(item => item.style.display = 'none');
	slidesDots[slideTo].style.display = 'block';

	dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
	e.target.classList.add('slider-dots__nav-item--active');
}
