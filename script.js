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


