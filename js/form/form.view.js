const forms = {
    name: document.getElementById('name'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    product: document.getElementById('product'),
    form: document.getElementById('form')
}


function goTestData(indexData){
    forms.name.setAttribute("value", indexData.nameSurname);
    forms.phone.setAttribute("value", indexData.phone);
    forms.email.setAttribute("value", indexData.email);
    Array.from(forms.product.children).forEach(function(item){
        if (item.value === indexData.product) {
            item.setAttribute('selected', true);
        }});
}

function getFormData(){
    return new FormData(forms.form);
}

function clearForm(){
   forms.form.reset();
}


export {forms, goTestData, getFormData, clearForm}



