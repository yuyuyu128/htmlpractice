theadData = ["Name", "Address", "Phone"];
names = ["Alan", "Banana", "Car"];
addresses = ["addr1", "addr2", "addr3"];
phones = ["0000", "1111", "2222"];

data = [{
    "name": "Alan"
}, {
    "addr": "addr1"
}, {
    "phone": "0000"
}]

let theadtr = document.querySelector('thead tr');
for (let i = 0; i < theadData.length; i++) {
    let th = document.createElement('th');
    th.innerText = theadData[i];
    theadtr.appendChild(th);
}

let tbody = document.querySelector('tbody');
for (let j = 0; j < names.length; j++) {
    let tbodytr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td.innerText = names[j];
    td2.innerText = addresses[j];
    td3.innerText = phones[j];
    tbodytr.appendChild(td);
    tbodytr.appendChild(td2);
    tbodytr.appendChild(td3);
    tbody.appendChild(tbodytr);
}