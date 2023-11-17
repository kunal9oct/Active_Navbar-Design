let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // total top = 2756 
        let offset = sec.offsetTop - 150; // 0, 689, 1378, 2067, 2756 - for all sections 
        let height = sec.offsetHeight; // height = 689 for each section 
        let id = sec.getAttribute('id'); // home, about, services, portfolio, contact are ids passed with every pixel scrolled as window.onScroll() function 

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
