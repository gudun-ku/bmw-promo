const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {        

        event.preventDefault();
        
        const lnkId = link.getAttribute('href').substring(1);
        const blockScrollTo = document.getElementById(lnkId);
        blockScrollTo.scrollIntoView({
            behavior: 'smooth'
        });
        
    });
});