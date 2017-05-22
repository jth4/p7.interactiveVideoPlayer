//highlight caption script
//idea:
//1) target captions via spans
//2) apend class to highlight, remove when inactive

console.log("highlight go");

//declare vars
const vid = document.querySelector('video');
const captionWrap = document.getElementById('capWrap');
const captions = document.querySelectorAll('p span');

//add click event listener on parent div & etarget spans for clicks; 
// retrieve time data & set video currentTime
captionWrap.addEventListener('click', (e) => {
	if(e.target.tagName === 'SPAN') {
		let time = e.target.getAttribute('data-start');
		vid.currentTime = time;
	}	
});

vid.addEventListener('timeupdate', () => {
	for(let i=0; i < captions.length; i+= 1) {
		let start = captions[i].getAttribute('data-start');
		let end = captions[i].getAttribute('data-end');
		
		if (vid.currentTime >= start && vid.currentTime < end) {
		 	captions[i].className = 'highlighted';
		} else {
			captions[i].className = '';
		}
	}
});