import {randomPerson} from './form.test-data.js';
import * as view from './form.view.js';
import * as model from './../model.js'; // т.к. в другой директории лежит

// функция старта работы
function start(){
    // рендерю тестовые данные
    renderTestData();
    // запускаю прослушки
    submitListener();
}

// прослушка кнопки отправки заявки
function submitListener(){
    view.forms.form.addEventListener('submit', formButton);
};

// функция рендера тестовых данных 
function renderTestData(){
    // случайное число
    const indexData = randomPerson();
    // отображаю случайную запись    
    view.goTestData(indexData);
}

//функция, запускаемая Listener'ом при клике по кнопке
function formButton(e){
    //отменяю отправку формы
    e.preventDefault();
    // данные со всей формы, записываю с помощью класса
    const formData = view.getFormData();
    // отправляю их в конструктор для создания нового объекта с последующей записью в массив requests
    model.addRequest(formData);
    view.clearForm();
    renderTestData();
}  

// запуск кода
start();
