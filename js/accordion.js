document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');

    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let isActive = false;
            // save current active state before updating class lists
            if (btn.classList.contains('feature__link_active')) {
                isActive = true;
            }
            featureSubElems.forEach((lnkelem) => {
                lnkelem.classList.add('hidden');
            });
            featureLinkElems.forEach((btnelem) => {
                btnelem.classList.remove('feature__link_active')
            });
            if (!isActive) {
                featureSubElems[index].classList.remove('hidden');          
                btn.classList.add('feature__link_active');
            }
        })
    })

});
