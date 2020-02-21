const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

const rightButton = document.querySelector('.carousel_button--right');
const leftButton = document.querySelector('.carousel_button--left');

const dotsnav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsnav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//arrange the slides next to each other

const setSlidePosition = (slide,index) =>{
	slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);



const moveToSlide = (track,currentSlide,targetSlide) => {

	track.style.transform =' translateX(-'+ targetSlide.style.left+')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
	
}

const updateDots = (currentDot, targetDot)=> {
	currentDot.classList.remove('current-slide');
	targetDot.classList.add('current-slide');
}

//------------------Prev slide----------------------
leftButton.addEventListener('click', e => {

//tracking the current slide and the next slide
const currentSlide = track.querySelector('.current-slide');
const prevSlide = currentSlide.previousElementSibling;
const currentDot = dotsnav.querySelector('.current-slide');
const prevDot = currentDot.previousElementSibling;

//move the slide to position

moveToSlide(track,currentSlide,prevSlide);
updateDots(currentDot,prevDot);

})

//------------------Next slide----------------------
rightButton.addEventListener('click', e => {

//tracking the current slide and the next slide
const currentSlide = track.querySelector('.current-slide');
const nextSlide = currentSlide.nextElementSibling;
const currentDot = dotsnav.querySelector('.current-slide');
const nextDot = currentDot.nextElementSibling;
//move the slide to position

moveToSlide(track,currentSlide,nextSlide);
updateDots(currentDot,nextDot);

})

// nav buttons -- move to selected slide
dotsnav.addEventListener('click', e =>{
	//which dot was clicked on
	const targetDot = e.target.closest('button');

	if (!targetDot) return;
	const currentSlide = track.querySelector('.current-slide');
	const currentDot = dotsnav.querySelector('.current-slide');
	const targetIndex = dots.findIndex(dot => dot === targetDot)

	const targetSlide = slides[targetIndex];
	moveToSlide(track, currentSlide, targetSlide);
	updateDots(currentDot,targetDot);

})