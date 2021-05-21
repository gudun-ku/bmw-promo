document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');

    const handlerAccordion = (btn, index) => {

        btn.addEventListener('click', () => {
            featureSubElems.forEach((featureSubElem, i) => {
                if (index === i) {
                    featureSubElems[index].classList.toggle('hidden');
                } else {
                    featureSubElem.classList.add('hidden');
                }
            });
    
            featureLinkElems.forEach(featureLinkElem => {
                if (featureLinkElem === btn) {
                    btn.classList.toggle('feature__link_active');
                } else {
                    featureLinkElem.classList.remove('feature__link_active');
                }
            });
        });        
    }

    featureLinkElems.forEach(handlerAccordion);

});
