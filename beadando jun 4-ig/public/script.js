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
async function postSellerFunction(test) {
    try {
        const res = await fetch(`http://localhost:3000/sellers`, {
            method: 'POST',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: test,
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

async function putSellerFunction(test, id) {
    try {
        const res = await fetch(`http://localhost:3000/sellers/${id}`, {
            method: 'PUT',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: test,
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
async function postBuyerFunction(test) {
    try {
        const res = await fetch(`http://localhost:3000/buyers`, {
            method: 'POST',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: test,
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

async function putBuyerFunction(test, id) {
    try {
        const res = await fetch(`http://localhost:3000/buyers/${id}`, {
            method: 'PUT',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: test,
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
async function postBillFunction(test) {
    try {
        const res = await fetch(`http://localhost:3000/bills`, {
            method: 'POST',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: test,
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

async function putBillFunction(test, id) {
    try {
        const res = await fetch(`http://localhost:3000/bills/${id}`, {
            method: 'PUT',
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: test,
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
const billNumberRegex = /^[0-9]{8}-[0-9]{8}-[0-9]{8}$/;
const taxNumberRegex = /^[0-9]{8}-[0-9]{1}-[0-9]{2}$/;
const tartalom = document.getElementById("tartalom");

function addPerson() {
    tartalom.innerHTML = "<label for='personType'>Válassz típust:</label> <select name='personType' id='personType'>"
    const menu = document.getElementById("personType")
    menu.innerHTML += `<option value='buyer'>vásárló</option>`
    menu.innerHTML += `<option value='seller'>eladó</option>`
    tartalom.innerHTML += "</select>"
    tartalom.innerHTML += "<label for='name'>név:</label> <input type='text' id='name'>"
    tartalom.innerHTML += "<label for='address'>lakcím:</label> <input type='text' id='address'>"
    tartalom.innerHTML += "<label for='taxNumber'>adószám(például:11111111-1-11):</label> <input type='text' id='taxNumber' placeholder='11111111-1-11'>"
    tartalom.innerHTML += "<button id='submit' onclick='savePerson()'>személy mentése</button>"
    tartalom.innerHTML += "<p id='message'></p>"
}

async function savePerson() {
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = ""
    }
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const taxNumber = document.getElementById("taxNumber").value.trim();

    buyers = await getAllBuyerFunction();
    sellers = await getAllSellerFunction();
    if (name != undefined && name.length > 0 && address != undefined && address.length > 0 && taxNumber != undefined && taxNumber.length > 0) {
        if (taxNumber.length != 13 || !taxNumberRegex.test(taxNumber)) {
            document.getElementById("message").innerHTML = "Adjon helyes adószámot!"
            return
        }
        for (const buyer of buyers) {
            if (buyer.taxNumber == taxNumber) {
                document.getElementById("message").innerHTML = "ilyen adószám már létezik!"
                return
            }
        }
        for (const seller of sellers) {
            if (seller.taxNumber == taxNumber) {
                document.getElementById("message").innerHTML = "ilyen adószám már létezik!"
                return
            }
        }

        let test = {
            "name": `${name}`,
            "address": `${address}`,
            "taxNumber": `${taxNumber}`
        }
        const listOfSelects = document.getElementsByTagName("option");
        let type;
        for (let i = 0; i < listOfSelects.length; i++) {
            if (listOfSelects[i].selected) {
                type = listOfSelects[i].value
            }
        }
        if (type == "buyer") {
            await postBuyerFunction(JSON.stringify(test));
        }
        else {
            await postSellerFunction(JSON.stringify(test))
        }
        tartalom.innerHTML = "";
    }
    else {
        document.getElementById("message").innerHTML = "Adjon meg minden adatot!"
    }
}

async function updateUser() {
    buyers = await getAllBuyerFunction()
    sellers = await getAllSellerFunction()
    if (buyers.length == 0 && sellers.length == 0) {
        tartalom.innerHTML = "<p id='message'> Nincs személy!</p>"
        return
    }
    tartalom.innerHTML = "<label for='person'>Válassz módosítandó személyt:</label> <select name='person' id='person' onchange='loadPersonSelect()'>"
    const menu = document.getElementById("person")
    menu.innerHTML += " <option value='' selected disabled hidden>Válaszz</option>"

    for (const buyer of buyers) {
        menu.innerHTML += `<option value='${buyer.taxNumber}'>${buyer.name}</option>`
    }
    for (const seller of sellers) {
        menu.innerHTML += `<option value='${seller.taxNumber}'>${seller.name}</option>`
    }
    tartalom.innerHTML += "</select>"
    tartalom.innerHTML += "<div id='loadPersonData'>"
    tartalom.innerHTML += "</div'>"
    tartalom.innerHTML += "<p id='message'></p>"

}
async function loadPersonSelect() {
    const loadPerson = document.getElementById("loadPersonData")
    const options = document.getElementsByTagName("option")
    let person
    for (const option of options) {

        if (option.selected) {
            person = await findPerson(option.value)
        }
    }
    if (loadPerson.innerHTML != "") {
        loadPerson.innerHTML = ""
    }
    loadPerson.innerHTML += `<label for='name'>név:</label> <input type='text' id='name' value='${person.name}'>`
    loadPerson.innerHTML += `<label for='address'>lakcím:</label> <input type='text' id='address' value='${person.address}'>`
    loadPerson.innerHTML += "<button id='submit' onclick='saveUpdatedPerson()'>személy mentése</button>"
    selectedPerson = person
}

async function saveUpdatedPerson() {
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = ""
    }
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();

    buyers = await getAllBuyerFunction();
    sellers = await getAllSellerFunction();
    if (name != undefined && name.length > 0 && address != undefined && address.length > 0) {

        let test = {
            "name": `${name}`,
            "address": `${address}`,
            "taxNumber": `${selectedPerson.taxNumber}`
        }
        let type;
        for (const buyer of buyers) {
            if (buyer.taxNumber == selectedPerson.taxNumber) {

                type = "buyer"
            }
        }
        for (const seller of sellers) {
            if (seller.taxNumber == selectedPerson.taxNumber) {
                type = "seller"

            }
        }
        if (type == "buyer") {
            await putBuyerFunction(JSON.stringify(test), selectedPerson.id);
        }
        else {
            await putSellerFunction(JSON.stringify(test), selectedPerson.id)
        }
        tartalom.innerHTML = "";
    }
    else {
        document.getElementById("message").innerHTML = "Adjon meg minden adatot!"
    }
}

async function findPerson(taxNumber) {
    sellers = await getAllSellerFunction()
    buyers = await getAllBuyerFunction()
    for (const seller of sellers) {
        if (seller.taxNumber == taxNumber) {
            return seller
        }
    }
    for (const buyer of buyers) {
        if (buyer.taxNumber == taxNumber) {
            return buyer
        }
    }
}

async function deletePerson() {
    buyers = await getAllBuyerFunction()
    sellers = await getAllSellerFunction()
    if (buyers.length > 0 || sellers.length > 0) {
        tartalom.innerHTML = "<label for='person'>Válassz törlendő személyt:</label> <select name='person' id='person'>"
        const menu = document.getElementById("person")
        menu.innerHTML += " <option value='' selected disabled hidden>Válaszz</option>"
        for (const buyer of buyers) {
            menu.innerHTML += `<option value='${buyer.taxNumber}'>${buyer.name}</option>`
        }
        for (const seller of sellers) {
            menu.innerHTML += `<option value='${seller.taxNumber}'>${seller.name}</option>`
        }
        tartalom.innerHTML += "</select>"
        tartalom.innerHTML += "<button id='submit' onclick='deleteSelectedPerson()'>személy törlése</button>"
        tartalom.innerHTML += "<p id='message'></p>"
    }
    else {
        tartalom.innerHTML = "<p id='message'> Nincs személy!</p>"
    }
}

async function deleteSelectedPerson() {
    buyers = await getAllBuyerFunction()
    sellers = await getAllSellerFunction()
    const listOfSelects = document.getElementsByTagName("option");
    for (let i = 0; i < listOfSelects.length; i++) {
        if (listOfSelects[i].selected) {
            selectedPerson = await findPerson(listOfSelects[i].value)
        }
    }
    let type;
    for (const buyer of buyers) {
        if (buyer.taxNumber == selectedPerson.taxNumber) {

            type = "buyer"
        }
    }
    for (const seller of sellers) {
        if (seller.taxNumber == selectedPerson.taxNumber) {
            type = "seller"

        }
    }
    if (type == "buyer") {
        await deleteBuyerFunction(selectedPerson.id);
    }
    else {
        await deleteSellerFunction(selectedPerson.id)
    }
    tartalom.innerHTML = "";

}

async function addBill() {
    buyers = await getAllBuyerFunction()
    sellers = await getAllSellerFunction()
    if (buyers.length == 0) {
        tartalom.innerHTML = "<p id='message'> Nincs vevő!</p>"
        return
    }
    if (sellers.length == 0) {
        tartalom.innerHTML = "<p id='message'> Nincs eladó!</p>"
                return
    }
    tartalom.innerHTML = "<label for='buyer'>Válassz vevőt:</label> <select name='buyer' id='buyer'>"
    const buyerMenu = document.getElementById("buyer")
    for (let i = 0; i < buyers.length; i++) {
        buyerMenu.innerHTML += `<option value='${buyers[i].id}' class='buyers'>${buyers[i].name}</option>`
    }
    tartalom.innerHTML += "</select>"

    tartalom.innerHTML += "<label for='seller'>Válassz eladót:</label> <select name='seller' id='seller'>"
    const sellerMenu = document.getElementById("seller")
    for (let i = 0; i < sellers.length; i++) {
        sellerMenu.innerHTML += `<option value='${sellers[i].id}' class='sellers'>${sellers[i].name}</option>`
    }
    tartalom.innerHTML += "</select>"
    tartalom.innerHTML += "<label for='billNumber'>Számlaszám(például:11111111-11111111-11111111):</label> <input type='text' id='billNumber'  placeholder='11111111-11111111-11111111'>"
    tartalom.innerHTML += "<label for='total' >Összeg:</label> <input type='number' id='total' min='0'>"
    tartalom.innerHTML += "<label for='afa'>Áfa:</label> <input type='number' id='afa' min='0'>"

    tartalom.innerHTML += "<div id='createdP'>"
    const createdBekezdes = document.getElementById("createdP");
    createdBekezdes.innerHTML = "<label for='created'>Számla kelte:</label> <input type='date' id='created'>"
    tartalom.innerHTML += "</div>"

    tartalom.innerHTML += "<div id='deadLineP'>"
    const deadLineBekezdes = document.getElementById("deadLineP");
    deadLineBekezdes.innerHTML = "<label for='deadline'>Fizetési határidő:</label> <input type='date' id='deadline'>"
    tartalom.innerHTML += "</div>"

    tartalom.innerHTML += "<div id='payDayP'>"
    const payDayBekezdes = document.getElementById("payDayP");
    payDayBekezdes.innerHTML = "<label for='payDay'>Befizetés napja:</label> <input type='date' id='payDay'>"
    tartalom.innerHTML += "</div>"

    tartalom.innerHTML += "<button id='submit' onclick='saveBill()'>számla mentése</button>"
    tartalom.innerHTML += "<p id='message'></p>"

}

async function saveBill() {
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = ""
    }
    let sellerId = 0;
    let buyerId = 0;
    const billNumber = document.getElementById("billNumber").value.trim();
    let total = document.getElementById("total").value.trim();
    let afa = document.getElementById("afa").value.trim();
    let created = document.getElementById("created").value;
    let payDay = document.getElementById("payDay").value.trim();
    let deadline = document.getElementById("deadline").value;

    if (billNumber != undefined && billNumber.length > 0 && total != undefined && total.length > 0 && afa != undefined && afa.length > 0 && created != undefined && created.length > 0 && payDay != undefined && payDay.length > 0 && deadline != undefined && deadline.length > 0) {
        const selllerList = document.getElementsByClassName('sellers')
        const buyerList = document.getElementsByClassName('buyers')
        for (const seller of selllerList) {
            if (seller.selected) {
                sellerId =parseInt(seller.value)
                break
            }
        }
        for (const buyer of buyerList) {
            if (buyer.selected) {
                buyerId = parseInt(buyer.value)
                break
            }
        }
        if (billNumber.length != 26 || !billNumberRegex.test(billNumber)) {
            document.getElementById("message").innerHTML = "Adjon meg helyes számlaszámot!"
            return
        }
        bills = await getAllBillsFunction()
        for (const bill of bills) {
            if (bill.billNumber == billNumber) {
                document.getElementById("message").innerHTML = "Ilyen számlaszám már létezik!"
                return
            }
        }
        total =Math.round(parseFloat(total))
        if(total < 0)
        {
            document.getElementById("message").innerHTML = "az összeg nem lehet negatív!"
                return
        }
        afa =Math.round(parseFloat(afa))
        if(afa < 0)
        {
            document.getElementById("message").innerHTML = "az ÁFA nem lehet negatív!"
                return
        }
        created = new Date(created)
        deadline = new Date(deadline)
        payDay = new Date(payDay)
        if(created >= deadline)
        {
            document.getElementById("message").innerHTML = "A határidő nem lehet a keltezés napja vagy előtte!"
            return
        }
        if(created > payDay)
        {
            document.getElementById("message").innerHTML = "Nem lehet a keltezés napja előtt befizetni!"
            return
        }
         if(deadline < payDay)
        {
            document.getElementById("message").innerHTML = "Nem lehet a határidő után befizetni!"
            return
        }
        const dateStringCreated = `${created.getFullYear()}.${created.getMonth()}.${created.getDate()}`
        const dateStringDeadline= `${deadline.getFullYear()}.${deadline.getMonth()}.${deadline.getDate()}`
        const dateStringPayDay = `${payDay.getFullYear()}.${payDay.getMonth()}.${payDay.getDate()}`
        let test = {
            "sellerId": sellerId,
            "buyerId": buyerId,
            "billNumber": `${billNumber}`,
            "created":`${dateStringCreated}`,
            "payday": `${dateStringDeadline}`,
            "deadline": `${dateStringPayDay}`,
            "total":total,
            "afa":afa
        }
        await postBillFunction(JSON.stringify(test));
        tartalom.innerHTML = "";
    }
    else {
        document.getElementById("message").innerHTML = "Adjon meg minden adatot!"
    }
}

async function listBlogs() {
    tartalom.innerHTML = ""
    users = await getAllUserFunction();
    blogs = await getAllBillsFunction();
    if (blogs.length == 0) {
        tartalom.innerHTML = "<p id='message'> Nincs blog!</p>"
        return
    }
    for (let i = 0; i < blogs.length; i++) {
        let selectedUser
        for (const user of users) {
            if (user.id == blogs[i].userId) {
                selectedUser = user
                break
            }
        }

        tartalom.innerHTML += `<div class='lista' >`
        let elemSzam = document.getElementsByClassName('lista').length
        const elem = document.getElementsByClassName('lista')[elemSzam - 1]
        elem.innerHTML += `<p> felhasználó: ${selectedUser.name}</p>`
        elem.innerHTML += `<p> cím: ${blogs[i].title}</p>`
        elem.innerHTML += `<p> kategória: ${blogs[i].category}</p>`
        elem.innerHTML += `<p> készítve: ${blogs[i].created}</p>`
        elem.innerHTML += `<p> utoljára módosítva: ${blogs[i].lastModified}</p>`
        elem.innerHTML += `<p> tartalma: ${blogs[i].content}</p>`
        elem.innerHTML += `<button class='modify' onclick='updateBlog()' value='${blogs[i].id}'>blog módosítása</button>`
        elem.innerHTML += `<button class='deleteButton' onclick='deleteBlog()' value='${blogs[i].id}'>blog törlése</button>`
        tartalom.innerHTML += `</div>`
    }

    const modifyButtons = document.getElementsByClassName('modify')
    const deleteButtons = document.getElementsByClassName('deleteButton')
    for (let i = 0; i < modifyButtons.length; i++) {
        modifyButtons[i].addEventListener("click", (event) => { selectedBlogId = event.target.value })
    }
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", (event) => { selectedBlogId = event.target.value })
    }

}

async function updateBlog() {
    tartalom.innerHTML = ""
    blogs = await getAllBillsFunction();
    let blog
    for (const temp of blogs) {
        if (selectedBlogId == temp.id) {
            blog = temp
            break;
        }
    }
    tartalom.innerHTML += `<label for='title'>Cím:</label> <input type='text' id='title' value='${blog.title}'>`
    tartalom.innerHTML += `<label for='category'>Kategória:</label> <input type='text' id='category' value='${blog.category}'>`
    tartalom.innerHTML += `<label for='content'>Tartalom:</label> <input type='text' id='content'value='${blog.content}'>`
    tartalom.innerHTML += `<button id='submit' onclick='saveUpdatedBlog()'>felhasználó mentése</button>`
    tartalom.innerHTML += "<p id='message'></p>"

}

async function saveUpdatedBlog() {
    blogs = await getAllBillsFunction();
    let blog
    for (const temp of blogs) {
        console.log(selectedBlogId)

        if (selectedBlogId == temp.id) {
            blog = temp
            console.log("sajt")
            break;
        }
    }
    if (document.getElementById("message").innerHTML != "") {
        document.getElementById("message").innerHTML = ""
    }
    const title = document.getElementById("title").value.trim();
    const category = document.getElementById("category").value.trim();
    const content = document.getElementById("content").value.trim();

    if (title != undefined && title.length > 0 && category != undefined && category.length > 0 && content != undefined && content.length > 0) {
        const d = new Date()
        const dateString = `${d.getFullYear()}.${d.getMonth()}.${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        let test = {
            "userId": `${blog.userId}`,
            "title": `${title}`,
            "category": `${category}`,
            "content": `${content}`,
            "created": `${blog.created}`,
            "lastModified": `${dateString}`
        }
        await putBillFunction(JSON.stringify(test), blog.id);
        tartalom.innerHTML = "";
    }
    else {
        document.getElementById("message").innerHTML += "Adjon meg minden adatot"
    }
}

async function deleteBlog() {
    blogs = await getAllBillsFunction();
    await deleteBillFunction(selectedBlogId);
    tartalom.innerHTML = "";
    listBlogs()

}