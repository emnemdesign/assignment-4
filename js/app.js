//alert('Hello!'); 

//Get access to the nav-btn, we want to select it
//Select nav-top
var navBtn = document.querySelector('.nav-btn');
var navTop = document.querySelector('.nav-top')

//We want to wait for the user to click the nav-btn
//We want to close the nav or open it 
  //If data-state is open, then set it to closed
  //If data-state is closed then set it to open

navBtn.addEventListener('click', function (eventObject) {
	//Stop the link from doing what it normally does
	eventObject.preventDefault();
	if (navTop.getAttribute('data-state')  == 'open') {
		navTop.setAttribute ('data-state', 'closed');
	} else {
		navTop.setAttribute('data-state', 'open')	
	}
}, false);