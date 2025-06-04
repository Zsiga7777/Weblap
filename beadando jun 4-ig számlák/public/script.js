async function getAllSellerFunction() {
    try {
        const res = await fetch(`http://localhost:3000/sellers`, {
            method: 'GET',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getAllSellerTaxNumberFunction() {
    try {
        const res = await fetch(`http://localhost:3000/sellers/taxNumbers`, {
            method: 'GET',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }
        let taxNumbersAsStringArray = [];
        for (const taxNumber of data) {
            taxNumbersAsStringArray.push(taxNumber.taxNumber);
        }
        return taxNumbersAsStringArray;
    }
    catch (error) {
        console.log(error);
    }
}

async function postSellerFunction(body) {
    try {
        const res = await fetch(`http://localhost:3000/sellers`, {
            method: 'POST',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: body,
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function putSellerFunction(body, id) {
    try {
        const res = await fetch(`http://localhost:3000/sellers/${id}`, {
            method: 'PUT',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: body,
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteSellerFunction(id) {
    try {
        const res = await fetch(`http://localhost:3000/sellers/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getAllBuyerFunction() {
    try {
        const res = await fetch(`http://localhost:3000/buyers`, {
            method: 'GET',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getAllBuyersTaxNumberFunction() {
    try {
        const res = await fetch(`http://localhost:3000/buyers/taxNumbers`, {
            method: 'GET',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }
        let taxNumbersAsStringArray = []
        for (const taxNumber of data) {
            taxNumbersAsStringArray.push(taxNumber.taxNumber);
        }
        return taxNumbersAsStringArray;
    }
    catch (error) {
        console.log(error);
    }
}
async function postBuyerFunction(body) {
    try {
        const res = await fetch(`http://localhost:3000/buyers`, {
            method: 'POST',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: body,
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function putBuyerFunction(body, id) {
    try {
        const res = await fetch(`http://localhost:3000/buyers/${id}`, {
            method: 'PUT',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: body,
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteBuyerFunction(id) {
    try {
        const res = await fetch(`http://localhost:3000/buyers/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getAllBillsFunction() {
    try {
        const res = await fetch(`http://localhost:3000/bills`, {
            method: 'GET',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}
async function postBillFunction(body) {
    try {
        const res = await fetch(`http://localhost:3000/bills`, {
            method: 'POST',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: body
        });
        const data = await res.json();
        if (!res.ok) {
            console.log(data);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function putBillFunction(body, id) {
    try {
        const res = await fetch(`http://localhost:3000/bills/${id}`, {
            method: 'PUT',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: body,
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteBillFunction(id) {
    try {
        const res = await fetch(`http://localhost:3000/bills/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}
let bills = [];
let sellers = [];
let buyers = [];
let selectedBillId = 0;
let selectedPerson;
let selectedBuyer;
let selectedSeller;
const taxNumberRegex = /^[0-9]{8}-[0-9]{1}-[0-9]{2}$/;
const content = document.getElementById("content");


window.onload = async () => {
    await listBills();
};

function addBuyer() {
    content.innerHTML = "<label for='name'>név:</label> <input type='text' id='name'>";
    content.innerHTML += "<label for='address'>lakcím:</label> <input type='text' id='address'>";
    content.innerHTML += "<label for='taxNumber'>adószám(például:11111111-1-11):</label> <input type='text' id='taxNumber' placeholder='11111111-1-11'>";
    content.innerHTML += "<button id='submit' onclick='saveBuyer()'>Vevő mentése</button>";
    content.innerHTML += "<p id='message'></p>";
}

async function saveBuyer() {
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = "";
    }
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const taxNumber = document.getElementById("taxNumber").value.trim();

    buyerTaxNumbers = await getAllBuyersTaxNumberFunction();
    sellerTaxNumbers = await getAllSellerTaxNumberFunction();
    if (name != undefined && name.length > 0 && address != undefined && address.length > 0 && taxNumber != undefined && taxNumber.length > 0) {
        if (taxNumber.length != 13 || !taxNumberRegex.test(taxNumber)) {
            document.getElementById("message").innerHTML = "Adjon helyes adószámot!";
            return;
        }
        if (buyerTaxNumbers.includes(taxNumber) || sellerTaxNumbers.includes(taxNumber)) {
            document.getElementById("message").innerHTML = "ilyen adószám már létezik!";
            return;
        }

        let body = {
            "name": `${name}`,
            "address": `${address}`,
            "taxNumber": `${taxNumber}`
        };

        await postBuyerFunction(JSON.stringify(body));

        content.innerHTML = "";
        await listBills();
    }
    else {
        document.getElementById("message").innerHTML = "Adjon meg minden adatot!";
    }
}

async function updateBuyer() {
    buyers = await getAllBuyerFunction();
    if (buyers.length == 0) {
        content.innerHTML = "<p id='message'> Nincs vevő!</p>";
        return;
    }
    content.innerHTML = "<label for='person'>Válassz módosítandó vevőt:</label> <select name='person' id='person' onchange='loadBuyerSelect()'>";
    const menu = document.getElementById("person");
    menu.innerHTML += " <option value='' selected disabled hidden>Válaszz</option>";

    for (const buyer of buyers) {
        menu.innerHTML += `<option value='${buyer.taxNumber}'>${buyer.name}</option>`;
    }
    content.innerHTML += "</select>";
    content.innerHTML += "<div id='loadPersonData'>";
    content.innerHTML += "</div'>";
    content.innerHTML += "<p id='message'></p>";

}
async function loadBuyerSelect() {
    const loadPerson = document.getElementById("loadPersonData");
    const options = document.getElementsByTagName("option");
    let person;
    for (const option of options) {

        if (option.selected) {
            person = await findPerson(option.value);
        }
    }
    if (loadPerson.innerHTML != "") {
        loadPerson.innerHTML = "";
    }
    loadPerson.innerHTML += `<label for='name'>név:</label> <input type='text' id='name' value='${person.name}'>`;
    loadPerson.innerHTML += `<label for='address'>lakcím:</label> <input type='text' id='address' value='${person.address}'>`;
    loadPerson.innerHTML += `<label for='taxNumber'>adószám(például:11111111-1-11):</label> <input type='text' id='taxNumber' placeholder='11111111-1-11' value='${person.taxNumber}'>`;
    loadPerson.innerHTML += "<button id='submit' onclick='saveUpdatedBuyer()'>Vevő mentése</button>";
    selectedPerson = person;
}

async function saveUpdatedBuyer() {
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = "";
    }
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const taxNumber = document.getElementById("taxNumber").value.trim();

    sellerTaxNumbers = await getAllSellerTaxNumberFunction();
    buyers = await getAllBuyerFunction()
    if (name != undefined && name.length > 0 && address != undefined && address.length > 0) {

        if (taxNumber.length != 13 || !taxNumberRegex.test(taxNumber)) {
            document.getElementById("message").innerHTML = "Adjon helyes adószámot!";
            return;
        }

        if (sellerTaxNumbers.includes(taxNumber)) {
            document.getElementById("message").innerHTML = "ilyen adószám már létezik!";
            return;
        }
        for (const buyer of buyers) {
            if (buyer.taxNumber == taxNumber && buyer.id != selectedPerson.id) {
                document.getElementById("message").innerHTML = "ilyen adószám már létezik!";
                return;
            }
        }

        let body = {
            "name": `${name}`,
            "address": `${address}`,
            "taxNumber": `${taxNumber}`
        };


        await putBuyerFunction(JSON.stringify(body), selectedPerson.id);

        content.innerHTML = "";
        await listBills()
    }
    else {
        document.getElementById("message").innerHTML = "Adjon meg minden adatot!";
    }
}

async function findPerson(taxNumber) {
    sellers = await getAllSellerFunction();
    buyers = await getAllBuyerFunction();
    for (const seller of sellers) {
        if (seller.taxNumber == taxNumber) {
            return seller;
        }
    }
    for (const buyer of buyers) {
        if (buyer.taxNumber == taxNumber) {
            return buyer;
        }
    }
}

async function deleteBuyer() {
    buyers = await getAllBuyerFunction();
    if (buyers.length > 0) {
        content.innerHTML = "<label for='person'>Válassz törlendő vevőt:</label> <select name='person' id='person'>";
        const menu = document.getElementById("person");
        menu.innerHTML += " <option value='' selected disabled hidden>Válaszz</option>";
        for (const buyer of buyers) {
            menu.innerHTML += `<option value='${buyer.taxNumber}'>${buyer.name}</option>`;
        }
        content.innerHTML += "</select>";
        content.innerHTML += "<button id='submit' onclick='deleteSelectedBuyer()'>vevő törlése</button>";
        content.innerHTML += "<p id='message'></p>";
    }
    else {
        content.innerHTML = "<p id='message'> Nincs vevő!</p>";
    }
}

async function deleteSelectedBuyer() {
    if (confirm("Biztos törli a vevőt?") == false) {
        return;
    }
    const listOfSelects = document.getElementsByTagName("option");
    for (let i = 0; i < listOfSelects.length; i++) {
        if (listOfSelects[i].selected) {
            selectedPerson = await findPerson(listOfSelects[i].value);
        }
    }

    await deleteBuyerFunction(selectedPerson.id);

    content.innerHTML = "";
    await listBills();

}

function addSeller() {
    content.innerHTML = "<label for='name'>név:</label> <input type='text' id='name'>";
    content.innerHTML += "<label for='address'>lakcím:</label> <input type='text' id='address'>";
    content.innerHTML += "<label for='taxNumber'>adószám(például:11111111-1-11):</label> <input type='text' id='taxNumber' placeholder='11111111-1-11'>";
    content.innerHTML += "<button id='submit' onclick='saveSeller()'>Eladó mentése</button>";
    content.innerHTML += "<p id='message'></p>";
}

async function saveSeller() {
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = "";
    }
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const taxNumber = document.getElementById("taxNumber").value.trim();

    buyerTaxNumbers = await getAllBuyersTaxNumberFunction();
    sellerTaxNumbers = await getAllSellerTaxNumberFunction();
    if (name != undefined && name.length > 0 && address != undefined && address.length > 0 && taxNumber != undefined && taxNumber.length > 0) {
        if (taxNumber.length != 13 || !taxNumberRegex.test(taxNumber)) {
            document.getElementById("message").innerHTML = "Adjon helyes adószámot!";
            return;
        }
        if (buyerTaxNumbers.includes(taxNumber) || sellerTaxNumbers.includes(taxNumber)) {
            document.getElementById("message").innerHTML = "ilyen adószám már létezik!";
            return;
        }

        let body = {
            "name": `${name}`,
            "address": `${address}`,
            "taxNumber": `${taxNumber}`
        };

        await postSellerFunction(JSON.stringify(body));

        content.innerHTML = "";
        await listBills();
    }
    else {
        document.getElementById("message").innerHTML = "Adjon meg minden adatot!";
    }
}

async function updateSeller() {
    sellers = await getAllSellerFunction();
    if (sellers.length == 0) {
        content.innerHTML = "<p id='message'> Nincs eladó!</p>";
        return;
    }
    content.innerHTML = "<label for='person'>Válassz módosítandó eladót:</label> <select name='person' id='person' onchange='loadSellerSelect()'>";
    const menu = document.getElementById("person");
    menu.innerHTML += " <option value='' selected disabled hidden>Válaszz</option>";

    for (const seller of sellerss) {
        menu.innerHTML += `<option value='${seller.taxNumber}'>${seller.name}</option>`;
    }
    content.innerHTML += "</select>";
    content.innerHTML += "<div id='loadPersonData'>";
    content.innerHTML += "</div'>";
    content.innerHTML += "<p id='message'></p>";

}
async function loadSellerSelect() {
    const loadPerson = document.getElementById("loadPersonData");
    const options = document.getElementsByTagName("option");
    let person;
    for (const option of options) {

        if (option.selected) {
            person = await findPerson(option.value);
        }
    }
    if (loadPerson.innerHTML != "") {
        loadPerson.innerHTML = "";
    }
    loadPerson.innerHTML += `<label for='name'>név:</label> <input type='text' id='name' value='${person.name}'>`;
    loadPerson.innerHTML += `<label for='address'>lakcím:</label> <input type='text' id='address' value='${person.address}'>`;
    loadPerson.innerHTML += `<label for='taxNumber'>adószám(például:11111111-1-11):</label> <input type='text' id='taxNumber' placeholder='11111111-1-11' value='${person.taxNumber}'>`;
    loadPerson.innerHTML += "<button id='submit' onclick='saveUpdatedSeller()'>Eladó mentése</button>";
    selectedPerson = person;
}

async function saveUpdatedSeller() {
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = "";
    }
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const taxNumber = document.getElementById("taxNumber").value.trim();

    buyerTaxNumbers = await getAllBuyersTaxNumberFunction();
    sellers = await getAllSellerFunction()
    if (name != undefined && name.length > 0 && address != undefined && address.length > 0) {

        if (taxNumber.length != 13 || !taxNumberRegex.test(taxNumber)) {
            document.getElementById("message").innerHTML = "Adjon helyes adószámot!";
            return;
        }

        if (buyerTaxNumbers.includes(taxNumber)) {
            document.getElementById("message").innerHTML = "ilyen adószám már létezik!";
            return;
        }
        for (const seller of sellers) {
            if (seller.taxNumber == taxNumber && seller.id != selectedPerson.id) {
                document.getElementById("message").innerHTML = "ilyen adószám már létezik!";
                return;
            }
        }

        let body = {
            "name": `${name}`,
            "address": `${address}`,
            "taxNumber": `${taxNumber}`
        };


        await putSellerFunction(JSON.stringify(body), selectedPerson.id);

        content.innerHTML = "";
        await listBills()
    }
    else {
        document.getElementById("message").innerHTML = "Adjon meg minden adatot!";
    }
}

async function deleteSeller() {
    sellers = await getAllSellerFunction();
    if (sellers.length > 0) {
        content.innerHTML = "<label for='person'>Válassz törlendő eladót:</label> <select name='person' id='person'>";
        const menu = document.getElementById("person");
        menu.innerHTML += " <option value='' selected disabled hidden>Válaszz</option>";
        for (const seller of sellers) {
            menu.innerHTML += `<option value='${seller.taxNumber}'>${seller.name}</option>`;
        }
        content.innerHTML += "</select>";
        content.innerHTML += "<button id='submit' onclick='deleteSelectedSeller()'>eladó törlése</button>";
        content.innerHTML += "<p id='message'></p>";
    }
    else {
        content.innerHTML = "<p id='message'> Nincs eladó!</p>";
    }
}

async function deleteSelectedSeller() {
    if (confirm("Biztos törli az eladót?") == false) {
        return;
    }
    const listOfSelects = document.getElementsByTagName("option");
    for (let i = 0; i < listOfSelects.length; i++) {
        if (listOfSelects[i].selected) {
            selectedPerson = await findPerson(listOfSelects[i].value);
        }
    }

    await deleteSellerFunction(selectedPerson.id);

    content.innerHTML = "";
    await listBills();

}

async function addBill() {
    buyers = await getAllBuyerFunction();
    sellers = await getAllSellerFunction();
    if (buyers.length == 0) {
        content.innerHTML = "<p id='message'> Nincs vevő!</p>";
        return;
    }
    if (sellers.length == 0) {
        content.innerHTML = "<p id='message'> Nincs eladó!</p>";
        return;
    }
    content.innerHTML = "<label for='buyer'>Válassz vevőt:</label> <select name='buyer' id='buyer'>";
    const buyerMenu = document.getElementById("buyer");
    for (let i = 0; i < buyers.length; i++) {
        buyerMenu.innerHTML += `<option value='${buyers[i].id}' class='buyers'>${buyers[i].name}</option>`;
    }
    content.innerHTML += "</select>";

    content.innerHTML += "<label for='seller'>Válassz eladót:</label> <select name='seller' id='seller'>";
    const sellerMenu = document.getElementById("seller");
    for (let i = 0; i < sellers.length; i++) {
        sellerMenu.innerHTML += `<option value='${sellers[i].id}' class='sellers'>${sellers[i].name}</option>`;
    }
    content.innerHTML += "</select>";
    content.innerHTML += "<label for='total' >Nettó összeg(Ft):</label> <input type='number' id='total' min='0'>";
    content.innerHTML += "<label for='afa'>Áfa(%):</label> <input type='number' id='afa' min='0'>";

    content.innerHTML += "<div id='createdP'>";
    const createdBekezdes = document.getElementById("createdP");
    createdBekezdes.innerHTML = "<label for='created'>Számla kelte:</label> <input type='date' id='created'>";
    content.innerHTML += "</div>";

    content.innerHTML += "<div id='deadLineP'>";
    const deadLineBekezdes = document.getElementById("deadLineP");
    deadLineBekezdes.innerHTML = "<label for='deadline'>Fizetési határidő:</label> <input type='date' id='deadline'>";
    content.innerHTML += "</div>";

    content.innerHTML += "<div id='payDayP'>";
    const payDayBekezdes = document.getElementById("payDayP");
    payDayBekezdes.innerHTML = "<label for='payDay'>Befizetés napja:</label> <input type='date' id='payDay'>";
    content.innerHTML += "</div>";

    content.innerHTML += "<button id='submit' onclick='saveBill()'>számla mentése</button>";
    content.innerHTML += "<p id='message'></p>";

}

async function saveBill() {
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = "";
    }
    sellers = await getAllSellerFunction();
    buyers = await getAllBuyerFunction();
    bills = await getAllBillsFunction()
    const billNumber = bills[bills.length - 1].billNumber + 1;
    let total = document.getElementById("total").value.trim();
    let afa = document.getElementById("afa").value.trim();
    let created = document.getElementById("created").value;
    let payDay = document.getElementById("payDay").value.trim();
    let deadline = document.getElementById("deadline").value;

    if (total != undefined && total.length > 0 && afa != undefined && afa.length > 0 && created != undefined && created.length > 0 && payDay != undefined && payDay.length > 0 && deadline != undefined && deadline.length > 0) {
        const selllerList = document.getElementsByClassName('sellers');
        const buyerList = document.getElementsByClassName('buyers');
        for (const sellerid of selllerList) {
            if (sellerid.selected) {
                for (const seller of sellers) {
                    if (seller.id == parseInt(sellerid.value)) {
                        selectedSeller = seller;
                        break;
                    }
                }
                break;
            }
        }
        for (const buyerid of buyerList) {
            if (buyerid.selected) {
                for (const buyer of buyers) {
                    if (buyer.id == parseInt(buyerid.value)) {
                        selectedBuyer = buyer;
                        break;
                    }
                }
                break;
            }
        }

        total = Math.round(parseFloat(total))
        if (total < 0) {
            document.getElementById("message").innerHTML = "az összeg nem lehet negatív!";
            return;
        }
        afa = Math.round(parseFloat(afa))
        if (afa < 0) {
            document.getElementById("message").innerHTML = "az ÁFA nem lehet negatív!";
            return;
        }
        if (afa > 100) {
            document.getElementById("message").innerHTML = "az ÁFA nem lehet 100%-nál nagyobb!";
            return;
        }
        created = new Date(created);
        deadline = new Date(deadline);
        payDay = new Date(payDay);
        var timestamp = created.getTime() + (30 * 24 * 60 * 60 * 1000)
        if (created > deadline) {
            document.getElementById("message").innerHTML = "A határidő nem lehet a keltezés napja előtt!";
            return;
        }
        if (deadline.getTime() > timestamp) {
            document.getElementById("message").innerHTML = "A határidő nem lehet 30 nappal a létrehozás után!";
            return;
        }
        if (created > payDay) {
            document.getElementById("message").innerHTML = "Nem lehet a keltezés napja előtt befizetni!";
            return;
        }

        const dateStringCreated = `${created.getFullYear()}-${created.getMonth() + 1 > 9 ? created.getMonth() + 1 : "0" + (created.getMonth() + 1)}-${created.getDate() > 9 ? created.getDate() : "0" + created.getDate()}`;
        const dateStringDeadline = `${deadline.getFullYear()}-${deadline.getMonth() + 1 > 9 ? deadline.getMonth() + 1 : "0" + (deadline.getMonth() + 1)}-${deadline.getDate() > 9 ? deadline.getDate() : "0" + deadline.getDate()}`;
        const dateStringPayDay = `${payDay.getFullYear()}-${payDay.getMonth() + 1 > 9 ? payDay.getMonth() + 1 : "0" + (payDay.getMonth() + 1)}-${payDay.getDate() > 9 ? payDay.getDate() : "0" + payDay.getDate()}`;
        let body = {
            sellerId: selectedSeller.id,
            sellerName: selectedSeller.name,
            sellerAddress: selectedSeller.address,
            sellerTaxNumber: selectedSeller.taxNumber,
            buyerId: selectedBuyer.id,
            buyerName: selectedBuyer.name,
            buyerAddress: selectedBuyer.address,
            buyerTaxNumber: selectedBuyer.taxNumber,
            billNumber: `${billNumber}`,
            created: `${dateStringCreated}`,
            payDay: `${dateStringPayDay}`,
            deadline: `${dateStringDeadline}`,
            total: total,
            afa: afa,
            storno: 0
        };
        await postBillFunction(JSON.stringify(body));
        content.innerHTML = "";
        await listBills()
    }
    else {
        document.getElementById("message").innerHTML = "Adjon meg minden adatot!";
    }
}

async function listBills() {
    content.innerHTML = "";
    bills = await getAllBillsFunction();
    if (bills.length == 0) {
        content.innerHTML = "<p id='message'> Nincs számmla!</p>";
        return;
    }
    for (const bill of bills) {

        content.innerHTML += `<div class='lista' >`;
        let itemNumber = document.getElementsByClassName('lista').length;
        const item = document.getElementsByClassName('lista')[itemNumber - 1];
        item.innerHTML += `<div class="bill-header">Számlaszám: ${bill.billNumber}</div>`;
        item.innerHTML += ` <div class="bill-parties"> </div>`
        let billParty = document.getElementsByClassName("bill-parties")[document.getElementsByClassName("bill-parties").length - 1]
        billParty.innerHTML = `<div class="party"></div><div class="party"></div>`;
        let party1 = document.getElementsByClassName("party")[document.getElementsByClassName("party").length - 2]
        party1.innerHTML = `<h4>Eladó</h4><p>${bill.sellerName}</p><p>${bill.sellerAddress}</p><p>${bill.sellerTaxNumber}</p>`;
        let party2 = document.getElementsByClassName("party")[document.getElementsByClassName("party").length - 1]
        party2.innerHTML = `<h4>Vevő</h4><p>${bill.buyerName}</p><p>${bill.buyerAddress}</p><p>${bill.buyerTaxNumber}</p>`;

        item.innerHTML += `<div class="dates"></div>`;
          let dates = document.getElementsByClassName("dates")[document.getElementsByClassName("dates").length - 1];
          dates.innerHTML = ` <div><strong>Kelt:</strong> ${bill.created}</div><div><strong>Határidő:</strong> ${bill.deadline}</div><div><strong>Befizetve:</strong> ${bill.payDay}</div>`;

          item.innerHTML += `<div class="totals"></div>`;
          let totals = document.getElementsByClassName("totals")[document.getElementsByClassName("totals").length - 1];
          totals.innerHTML = ` <p>Nettó összeg: ${bill.total} Ft</p> <p>ÁFA: ${bill.afa}%</p><p>Bruttó összeg: ${(bill.total * (1 + bill.afa / 100)).toFixed(2)} Ft</p>`;
        if (bill.storno == 1) {
            item.innerHTML += `<p class="storno"> A számla sztornózva lett!</p>`;
        }
        else {
            item.innerHTML += `<button class='modify' onclick='updateBill()' value='${bill.id}'>számla módosítása</button>`;
            item.innerHTML += `<button class='stornoButton' onclick='stornoBill()' value='${bill.id}'>számla sztornózása</button>`;
        }

        content.innerHTML += `</div>`;
    }

    const modifyButtons = document.getElementsByClassName('modify');
    const stornoButtons = document.getElementsByClassName('stornoButton');
    for (let i = 0; i < modifyButtons.length; i++) {
        modifyButtons[i].addEventListener("click", (event) => { selectedBillId = event.target.value });
    }
    for (let i = 0; i < stornoButtons.length; i++) {
        stornoButtons[i].addEventListener("click", (event) => { selectedBillId = event.target.value });
    }

}

async function updateBill() {
    content.innerHTML = "";
    bills = await getAllBillsFunction();
    let bill;
    for (const temp of bills) {
        if (selectedBillId == temp.id) {
            bill = temp;
            break;
        }
    }
    buyers = await getAllBuyerFunction();
    sellers = await getAllSellerFunction();
    if (buyers.length == 0) {
        content.innerHTML = "<p id='message'> Nincs vevő!</p>";
        return;
    }
    if (sellers.length == 0) {
        content.innerHTML = "<p id='message'> Nincs eladó!</p>";
        return;
    }
    content.innerHTML = "<label for='buyer'>Válassz vevőt:</label> <select name='buyer' id='buyer'>";
    const buyerMenu = document.getElementById("buyer");
    for (let i = 0; i < buyers.length; i++) {
        if (buyers[i].id == bill.buyerId) {
            buyerMenu.innerHTML += `<option value='${buyers[i].id}' class='buyers' selected>${buyers[i].name}</option>`;
        }
        else {
            buyerMenu.innerHTML += `<option value='${buyers[i].id}' class='buyers'>${buyers[i].name}</option>`;
        }
    }
    content.innerHTML += "</select>";

    content.innerHTML += "<label for='seller'>Válassz eladót:</label> <select name='seller' id='seller'>";
    const sellerMenu = document.getElementById("seller");
    for (let i = 0; i < sellers.length; i++) {
        if (sellers[i].id == bill.sellerId) {
            sellerMenu.innerHTML += `<option value='${sellers[i].id}' class='sellers' selected>${sellers[i].name}</option>`;
        }
        else {
            sellerMenu.innerHTML += `<option value='${sellers[i].id}' class='sellers'>${sellers[i].name}</option>`;
        }

    }
    content.innerHTML += "</select>";
    content.innerHTML += `<label for='total' >Nettó összeg:</label> <input type='number' id='total' min='0' value='${bill.total}'>`;
    content.innerHTML += `<label for='afa'>Áfa:</label> <input type='number' id='afa' min='0' value='${bill.afa}'>`;

    content.innerHTML += `<div id='createdP'>`;
    const createdBekezdes = document.getElementById("createdP");
    createdBekezdes.innerHTML = `<label for='created'>Számla kelte:</label> <input type='date' id='created' value='${bill.created}'>`;
    content.innerHTML += `</div>`;

    content.innerHTML += `<div id='deadLineP'>`;
    const deadLineBekezdes = document.getElementById("deadLineP");
    deadLineBekezdes.innerHTML = `<label for='deadline'>Fizetési határidő:</label> <input type='date' id='deadline' value='${bill.deadline}'>`;
    content.innerHTML += `</div>`;

    content.innerHTML += `<div id='payDayP'>`;
    const payDayBekezdes = document.getElementById("payDayP");
    payDayBekezdes.innerHTML = `<label for='payDay'>Befizetés napja:</label> <input type='date' id='payDay' value='${bill.payDay}'>`;
    content.innerHTML += `</div>`;

    content.innerHTML += "<button id='submit' onclick='saveUpdatedBill()'>számla mentése</button>";
    content.innerHTML += "<p id='message'></p>";


}

async function saveUpdatedBill() {
    bills = await getAllBillsFunction();
    let bill;
    for (const temp of bills) {

        if (selectedBillId == temp.id) {
            bill = temp;
            break;
        }
    }
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = "";
    }
    sellers = await getAllSellerFunction();
    buyers = await getAllBuyerFunction();
    bills = await getAllBillsFunction()
    const billNumber = bills[bills.length - 1].billNumber + 1;
    let total = document.getElementById("total").value.trim();
    let afa = document.getElementById("afa").value.trim();
    let created = document.getElementById("created").value;
    let payDay = document.getElementById("payDay").value.trim();
    let deadline = document.getElementById("deadline").value;

    if (total != undefined && total.length > 0 && afa != undefined && afa.length > 0 && created != undefined && created.length > 0 && payDay != undefined && payDay.length > 0 && deadline != undefined && deadline.length > 0) {
        const selllerList = document.getElementsByClassName('sellers');
        const buyerList = document.getElementsByClassName('buyers');
        for (const sellerid of selllerList) {
            if (sellerid.selected) {
                for (const seller of sellers) {
                    if (seller.id == parseInt(sellerid.value)) {
                        selectedSeller = seller;
                        break;
                    }
                }
                break;
            }
        }
        for (const buyerid of buyerList) {
            if (buyerid.selected) {
                for (const buyer of buyers) {
                    if (buyer.id == parseInt(buyerid.value)) {
                        selectedBuyer = buyer;
                        break;
                    }
                }
                break;
            }
        }

        total = Math.round(parseFloat(total))
        if (total < 0) {
            document.getElementById("message").innerHTML = "az összeg nem lehet negatív!";
            return;
        }
        afa = Math.round(parseFloat(afa))
        if (afa < 0) {
            document.getElementById("message").innerHTML = "az ÁFA nem lehet negatív!";
            return;
        }
        if (afa > 100) {
            document.getElementById("message").innerHTML = "az ÁFA nem lehet 100%-nál nagyobb!";
            return;
        }
        created = new Date(created);
        deadline = new Date(deadline);
        payDay = new Date(payDay);
        var timestamp = created.getTime() + (30 * 24 * 60 * 60 * 1000)
        if (created > deadline) {
            document.getElementById("message").innerHTML = "A határidő nem lehet a keltezés napja előtt!";
            return;
        }
        if (deadline.getTime() > timestamp) {
            document.getElementById("message").innerHTML = "A határidő nem lehet 30 nappal a létrehozás után!";
            return;
        }
        if (created > payDay) {
            document.getElementById("message").innerHTML = "Nem lehet a keltezés napja előtt befizetni!";
            return;
        }

        const dateStringCreated = `${created.getFullYear()}-${created.getMonth() + 1 > 9 ? created.getMonth() + 1 : "0" + (created.getMonth() + 1)}-${created.getDate() > 9 ? created.getDate() : "0" + created.getDate()}`;
        const dateStringDeadline = `${deadline.getFullYear()}-${deadline.getMonth() + 1 > 9 ? deadline.getMonth() + 1 : "0" + (deadline.getMonth() + 1)}-${deadline.getDate() > 9 ? deadline.getDate() : "0" + deadline.getDate()}`;
        const dateStringPayDay = `${payDay.getFullYear()}-${payDay.getMonth() + 1 > 9 ? payDay.getMonth() + 1 : "0" + (payDay.getMonth() + 1)}-${payDay.getDate() > 9 ? payDay.getDate() : "0" + payDay.getDate()}`;
        let body = {
            sellerId: selectedSeller.id,
            sellerName: selectedSeller.name,
            sellerAddress: selectedSeller.address,
            sellerTaxNumber: selectedSeller.taxNumber,
            buyerId: selectedBuyer.id,
            buyerName: selectedBuyer.name,
            buyerAddress: selectedBuyer.address,
            buyerTaxNumber: selectedBuyer.taxNumber,
            billNumber: `${billNumber}`,
            created: `${dateStringCreated}`,
            payDay: `${dateStringPayDay}`,
            deadline: `${dateStringDeadline}`,
            total: total,
            afa: afa,
            storno: 0
        };
        await postBillFunction(JSON.stringify(body));
        let bodyStorno = {
            sellerId: bill.sellerId,
            sellerName: bill.sellerName,
            sellerAddress: bill.sellerAddress,
            sellerTaxNumber: bill.sellerTaxNumber,
            buyerId: bill.buyerId,
            buyerName: bill.buyerName,
            buyerAddress: bill.buyerAddress,
            buyerTaxNumber: bill.buyerTaxNumber,
            billNumber: bill.billNumber,
            created: bill.created,
            payDay: bill.payDay,
            deadline: bill.deadline,
            total: bill.total,
            afa: bill.afa,
            storno: 1
        };
        await putBillFunction(JSON.stringify(bodyStorno), bill.id);
        content.innerHTML = "";
        await listBills()
    }
    else {
        document.getElementById("message").innerHTML += "Adjon meg minden adatot";
    }
}

async function stornoBill() {
    if (confirm("Biztos sztornózza a számlát?") == false) {
        return;
    }
    bills = await getAllBillsFunction();
    let selectedBill;
    for (const bill of bills) {
        if (bill.id == selectedBillId) {
            selectedBill = bill;
            break;
        }
    }
    let body = {
        sellerId: selectedBill.sellerId,
        sellerName: selectedBill.sellerName,
        sellerAddress: selectedBill.sellerAddress,
        sellerTaxNumber: selectedBill.sellerTaxNumber,
        buyerId: selectedBill.buyerId,
        buyerName: selectedBill.buyerName,
        buyerAddress: selectedBill.buyerAddress,
        buyerTaxNumber: selectedBill.buyerTaxNumber,
        billNumber: selectedBill.billNumber,
        created: selectedBill.created,
        payDay: selectedBill.payDay,
        deadline: selectedBill.deadline,
        total: selectedBill.total,
        afa: selectedBill.afa,
        storno: 1
    };
    await putBillFunction(JSON.stringify(body), selectedBill.id);
    content.innerHTML = "";
    listBills();

}