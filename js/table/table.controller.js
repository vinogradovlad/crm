import * as model from './../model.js'
import * as view from './table.view.js'



function start(){
    // записываю результат ретерна в переменную
    const requests = model.getRequest();
    view.renderRequests(requests);
    addEventListeners();
    const newRequestCount = model.countNewRequests();
    view.renderBadgeNew(newRequestCount);

    const filter = model.getFilter();

    //отображение на страницы отфильтрованных данных из ЛС
    view.updateFilter(filter);
}

function addEventListeners(){
    view.elements.select.addEventListener('change', filterProducts) // так как сушаем Select то this в колбек функции будет ссылаться на Select
    view.elements.topStatusBar.addEventListener('click', filterByStatus);
    view.elements.leftStatusLinks.forEach((link) => {
        link.addEventListener('click', filterByStatus)
    })  

}

function filterProducts(){
    const filter = model.changeFilter('products', this.value)
    const filteredRequests = model.filterRequests(filter) // овзвращает отфильтрованные заявки, которые потом надо отобразить на странице
    view.renderRequests(filteredRequests)
}

function filterByStatus(e){
   const filter = model.changeFilter('status', e.target.dataset.value); // changeFilter(prop, value)
   const filteredRequests = model.filterRequests(filter); // овзвращает отфильтрованные заявки, которые потом надо отобразить на странице
   view.renderRequests(filteredRequests);
   view.updateStatusLinks(e.target.dataset.value);
   
}

start();