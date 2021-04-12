const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlink');
    const navlink = document.querySelectorAll('.navlink li')
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    

        navlink.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = '';
            }
            else {
            console.log(item, index)
            item.style.animation = `navlinkfade 0.1s ease forwards ${index /3 + 0.2}s`;
            /* this is the order of 
            arguments type, speed, way, 
            something else, delay 
            (delay based on the index used)' */
        }});
        burger.classList.toggle('toggle');
    });

    window.addEventListener('resize', () => {
        nav.classList.remove('nav-active')});
    ;
    
} 
window.onload = ()  => {
	if(!window.location.hash) {
		window.location = window.location + '#Welcome';
		window.location.reload();
	}
}

navSlide();