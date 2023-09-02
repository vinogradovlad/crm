import * as model from './../model.js'
import * as view from './edit.view.js'

function start(){
   const id = getRequestId();
   const request = model.getRequestById(id);
   view.renrderRequest(request);
   setupEventListeners();
}

function getRequestId(){
    // чтоыб получить значение параметра из строки запроса - надо создать объект класса URLSearchParams
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function setupEventListeners(){
    // прослушка по отправке формы
    view.elements.form.addEventListener('submit', formSubmitHandler)
}

function formSubmitHandler(e) {
     e.preventDefault(); // отменил отправку формы
     const formData = view.getFormInput(); // собрал данные с формы
    //  console.log(formData);
     model.updateRequest(formData);

     window.location = './table.html'
}



start()

