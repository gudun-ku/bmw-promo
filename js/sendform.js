const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callback, falseCallback) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', ()=> {
        if (request.readyState !== 4) return;
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);
            callback(response.id);
        } else {
            falseCallback(request.status, request.statusText);
            throw new Error(request.statusText);
        }
    });

    request.send(data);
};

const trimText = (elemValue) => {
    return elemValue.
        replace(/(^\s*)|(\s*$)/gi, ""). // removes leading and trailing spaces
        replace(/[ ]{2,}/gi, " "). // replaces multiple spaces with one space
        replace(/\n +/, "\n"); // Removes spaces after newlines
}

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {};

        const smallElems = form.querySelectorAll('.temp-elem');
        smallElems.forEach((smallElem) => {
            smallElem.remove();
        })    

        const smallElem = document.createElement('small');
        smallElem.classList.add('temp-elem');

        for (const {name, value} of form.elements) {
            if (name) {

                if (trimText(value) === '') {
                    smallElem.innerHTML = '<br> Пожалуйста заполните все поля!';
                    smallElem.style.color = 'red';
                    form.append(smallElem);
                    return;
                }
                //console.log(name, value);
                data[name] = value;
            }
        }      

        //console.log(data);
        sendData(JSON.stringify(data),
        (id) => {
            smallElem.innerHTML = '<br> Ваша заявка № ' + id + '! В ближайшее время с вами свяжемся';
            smallElem.style.color = 'green';           
        },
        (err, errTxt) => {
            smallElem.innerHTML = '<br> Ошибка ' + err + ': ' + errTxt;
            smallElem.style.color = 'red';            
        });
        form.append(smallElem);

        form.reset();
    });
}

formElems.forEach(formHandler);
