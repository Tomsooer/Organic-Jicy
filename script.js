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
       next = sliderArows.querySelector('.slider-arrows__arrow--right')


console.log(sliderArows)


let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows (-1) );
next.addEventListener('click', () => showSlideArrows (1) );

function showSlideArrows(n = 0) {
	console.log(n)

	slideIndex += n;

	console.log(slideIndex);

	if (slideIndex < 0) slideIndex = sliderArows.length - 1;
	if (slideIndex >= sliderArows.length) slideIndex = 0;

	sliderArows.forEach(item => item.style.display = 'none')
	sliderArows[slideIndex].style.display = 'block'
}

showSlideArows(slideIndex);


const sliderDots = document.querySelector('.slider-dots')
      sliderDots = sliderDots.querySelector('.slider-dots__item')
      wrapperDots = sliderDots.querySelector('.slider-dots__nav')

console.log(sliderDots)

const dots = [];

for (let i = 0; i < sliderDots.length; i++) {
	// console.log(i)
	const dot = document.createElement('button');
	// console.log(dot);
	dot.dataset.slideTo = i;
	dot.classList.add('.slider-dots__nav-item');
	if (i == 0 ) dot.classList.add('.slider-dots__nav--active');

	if (i != 0) sliderDots[i].style.display = 'none';

	dot.addEventListener('click', showSlideDots)

	wrapperDots.append(dot)
}

function showSlideDots(e) {
	console.log(e.target);
	console.log(e.target.dataset.slideTo);

	const sliderTo = e.target.dataset.slideTo

	 console.log(sliderTo)
	console.log(sliderDots[sliderTo])

	sliderDots.forEach(item => item.style.display = 'none')
	sliderDots[sliderTo].style.display = 'block';

	console.log(dots);
	dots.forEach(dot => dot.classList.remove('.slider-dots__nav-item--active'));
	e.target.classList.add('.slider-dots__nav-item--active')
}


