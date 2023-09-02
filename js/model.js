const requests = loadRequests();

class Request {
    constructor(id, name, phone, email, product) {
        this.id = id,
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.product = product,
        this.date = new Date().toISOString(),
        this.status = 'new'
    }
}

const products = {
    "course-php": 'Курс по PHP',
    "course-html": 'Курс по верстке',
    "course-js": 'Курс по JavaScript',
    "course-wordpress": 'Курс по WordPress',
    "course-vue": 'Курс по Vue JS'
}

const statuses = {
    "new": 'Новая',
    "inwork": 'В работе',
    "complete": 'Завершена'
}

const filter = loadFilter();


function loadFilter(){
    let filter = {
        products: 'all',
        status: 'all'
    }

    if (localStorage.getItem('filter')) {
       filter = JSON.parse(localStorage.getItem('filter'))
    }
    return filter
}

function changeFilter(prop, value){
    filter[prop] = value; // prop = properties of const filter
    localStorage.setItem('filter', JSON.stringify(filter))
    return filter;
}

function filterRequests(filter){
    let filteredRequests;

    // фильтрация по продукту - свойство products объекта filter
    if (filter.products !== 'all') {
        filteredRequests = requests.filter((request) => request.product == filter.products)
    } else {
        filteredRequests = [...requests]; // деструктурировал массив requests на элементы и положил их снова в массив. Но теперь это новый массив, копия, а не ссылка на старый
    }
    
    // фильтрация по статусу - свойство status объекта filter
    if (filter.status !== 'all') {
        filteredRequests = filteredRequests.filter((request) => request.status === filter.status)
    }

    return prepareRequest(filteredRequests)
}

// подсчет количества новых заявок для sidebar
function countNewRequests(){
    const newRequests = requests.filter((el) => el.status === 'new');
    return newRequests.length;
}


function addRequest (formData) {
    const id = requests.length > 0 ? requests.at(-1)['id'] +1 : 1;
    // создаю объект для новой заявки
    const request = new Request (id, formData.get("name"), formData.get("phone"), formData.get("email"), formData.get("product"))
   // наполняю массив этими заявками
    requests.push(request);
    saveRequests();

}

function saveRequests(){
    localStorage.setItem("requests", JSON.stringify(requests))
}

function loadRequests(){
   return localStorage.getItem("requests") ? JSON.parse(localStorage.getItem("requests")) : [];
}

// чтобы передать массив requests в другие модули
function getRequest(){
    const filteredRequests = filterRequests(filter);
    return prepareRequest(filteredRequests);
}


function prepareRequest(requests){
    return requests.map((item) => {
        return {
            ...item,
            displayDate: new Date(item.date).toLocaleDateString(),
            productName: products[item.product],
            statusName: statuses[item.status]
        }
    })
}

function getRequestById(id){
    // получаем ссылку на элемент в  массиве
    const request = requests.find((item) => item.id == id)
    request.dateDate = new Date(request.date).toLocaleDateString() // теперь здесь только дата, полученная из iso строки
    request.dateTime = new Date(request.date).toLocaleTimeString() // только время
    
    return request
}

function updateRequest(formData){

    const request = getRequestById(formData.get('id'));
    // далее обновляем данные в полях - они перезаписываются
    request.name = formData.get('name');
    request.email = formData.get('email');
    request.phone = formData.get('phone');
    request.product = formData.get('product');
    request.status = formData.get('status');

    // сохраняю новые данные в ЛС
    saveRequests(); 

}

function getFilter(){
return {...filter}

}
export {addRequest, getRequest, getRequestById, updateRequest, changeFilter, filterRequests, countNewRequests, getFilter}