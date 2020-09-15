let information = []

function sentform(){
    let completeInfo = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    }    
    information.push(completeInfo);
    formtable();
}

function formtable(){
    let table = document.getElementById('listTable');
    let tablerow = document.createElement('tr')
    let data = document.createElement('td')
    let data2 = document.createElement('td')
    for(i = 0; i < information.length; i++){
        data.innerHTML = information[i].name
        data2.innerHTML = information[i].email

        tablerow.append(data);
        tablerow.append(data2)
        table.append(tablerow);
    }
}