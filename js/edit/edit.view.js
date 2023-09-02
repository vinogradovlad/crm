const elements = {
    form: document.querySelector("#form"),
    number: document.querySelector("#number"), // сюда будет подставляться текстовое значение из input
    id: document.querySelector("#id"), // id input'а
    date: document.querySelector("#date"), // получаем div с датой в виде ISO строки: 2023-07-23T14:12:33.434Z
    name: document.querySelector("#name"), // 
    product: document.querySelector("#product"), // 
    email: document.querySelector("#email"), // 
    phone: document.querySelector("#phone"), // 
    status: document.querySelector("#status"), // 
}

function renrderRequest(request){
    elements.number.innerText = request.id,
    elements.id.value = request.id,
    elements.date.innerText = `${request.dateDate} ${request.dateTime}`,

    elements.product.value = request.product,
    elements.name.value = request.name,
    elements.email.value = request.email,
    elements.phone.value = request.phone,
    elements.status.value = request.status
}

function getFormInput(){
    return new FormData(elements.form);
}


export {elements,  renrderRequest, getFormInput}