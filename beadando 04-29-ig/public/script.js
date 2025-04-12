async function getAllFunction() {
    try {
        const res = await fetch(`http://localhost:3000/albums`, {
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
async function postFunction(test) {
    try {
        const res = await fetch(`http://localhost:3000/albums`, {
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

async function putFunction(test, id) {
    try {
        const res = await fetch(`http://localhost:3000/albums/${id}`, {
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

async function deleteFunction(id) {
    try {
        const res = await fetch(`http://localhost:3000/albums/${id}`, {
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

let albums = [];
let selectedAlbumId = 0;
const albumList = document.getElementById("lista");
const information = document.getElementById("information");
const addButton = document.getElementById("showAlbumAddButton");
const addField = document.getElementById("addAlbum");
const datas =document.getElementById("datas")

let inputFieldsString = `<label for="albumNameInput" class="inputLabel">Album neve:</label>
            <input type="text" id="albumNameInput">
            <br>
            <label for="bandNameInput" class="inputLabel">Banda neve:</label>
            <input type="text" id="BandNameInput">
<br>
            <label for="numberOfSongsInput" class="inputLabel">zeneszámok száma:</label>
            <input type="number" id="numberOfSongsInput" min="1">
<br>
            <label for="lengthInput" class="inputLabel">hossza:</label>
            <input type="number" id="lengthInput" min="1">
<br>
            <p id="message"></p>`;

window.onload = async function () {
    albums = await getAllFunction();
    information.style.display = "none";
    addField.style.display = "none";
    if(albums.length > 0)
    {
    createList();
    }
    else
    {
        albumList.style.display = "none";
    }
}

function createList() {
    albumList.style.display = "block"
    addButton.style.display = "block"
    let listString = "";
    listString += "<ol>"
    for (let i = 0; i < albums.length; i++) {
        listString += `<li Id=${i}>${albums[i].name}</li>`;
    }

    albumList.innerHTML = listString
    addEventListenerToLi()
}

function addEventListenerToLi() {
    const listElements = document.getElementsByTagName("li")
    for (let i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener("click", (event) => { selectedAlbumId = event.target.id })
        listElements[i].addEventListener("click", writeInformation)
    }
}

async function writeInformation() {
    albumList.style.display = "none";
    addButton.style.display = "none";
    information.style.display = "block";
        if( datas.innerHTML !="")
        {
            datas.innerHTML="";
        }
    datas.innerHTML += `
            <button id="back" onclick="closeInformation()"> Vissza </button>
    <p>album neve: ${albums[selectedAlbumId].name}</p>
    <p>bande neve: ${albums[selectedAlbumId].band}</p>
    <p>album zenéinek száma: ${albums[selectedAlbumId].numberOfSongs} darab</p>
    <p>album hossza: ${albums[selectedAlbumId].length} perc</p></p>
        <p id='updateField'><label for="albumNameInput" class="inputLabel">Album neve:</label>
            <input type="text" id="albumNameInput" value='${albums[selectedAlbumId].name}'>
            <br>
            <label for="bandNameInput" class="inputLabel" >Banda neve:</label>
            <input type="text" id="BandNameInput" value='${albums[selectedAlbumId].band}'>
<br>
            <label for="numberOfSongsInput" class="inputLabel" >zeneszámok száma:</label>
            <input type="number" id="numberOfSongsInput" min="1" value='${albums[selectedAlbumId].numberOfSongs}'>
<br>
            <label for="lengthInput" class="inputLabel" >hossza:</label>
            <input type="number" id="lengthInput" min="1" value='${albums[selectedAlbumId].length}'>
<br>
            <p id="message"></p>
    <button id="albumUpdateButton" onclick="updateAlbum()">Album módosítása</button> <button id="albumDeleteButton" onclick="deleteAlbum()">Album törlése</button>` 
}

function displayAddAlbumField() {
    addButton.style.display = "none";
    albumList.style.display = "none";
    addField.style.display = "block";
    addField.innerHTML =`<button id="back" onclick="closeInformation()"> Vissza </button>`+ inputFieldsString + `<button id="AlbumAddButton" onclick="addAlbum()">Album hozzáadása</button>`
}


async function addAlbum() {
    albumList.style.display = "none";
const name = document.getElementById("albumNameInput").value
const band = document.getElementById("BandNameInput").value
const numberOfSongs = document.getElementById("numberOfSongsInput").value
const length = document.getElementById("lengthInput").value

    if (name != undefined && name.trim().length > 0 && band != undefined && band.trim().length > 0 && numberOfSongs != undefined && numberOfSongs > 0 && length != undefined && length > 0) {
        let test = {
            "name": `${name.trim()}`,
            "band": `${band.trim()}`,
            "numberOfSongs": parseInt(numberOfSongs),
            "length" : parseInt(length)
        }
        await postFunction(JSON.stringify(test));
        albums = await getAllFunction();
       createList()
       addButton.style.display = "block";
    addField.style.display = "none";
    addField.innerHTML = ""
    }
    else {
        document.getElementById("message").innerHTML = "Adjon meg minden adatot(a számadatok nem lehetnek 0 vagy az alattiak)!"
    }
}

async function deleteAlbum() {
    await deleteFunction(parseInt(selectedAlbumId)+1);
    datas.innerHTML = "";
        information.style.display = "none";
    albums = await getAllFunction();

   createList()
}

async function updateAlbum() {
    const name = document.getElementById("albumNameInput").value
    const band = document.getElementById("BandNameInput").value
    const numberOfSongs = document.getElementById("numberOfSongsInput").value
    const length = document.getElementById("lengthInput").value

    if (name != undefined && name.trim().length > 0 && band != undefined && band.trim().length > 0 && numberOfSongs != undefined && numberOfSongs > 0 && length != undefined && length > 0) {
        let test = {
           "name": `${name.trim()}`,
            "band": `${band.trim()}`,
            "numberOfSongs": parseInt(numberOfSongs),
            "length" : parseInt(length)
        }
        await putFunction(JSON.stringify(test), selectedAlbumId+1);
        albums = await getAllFunction();
        datas.innerHTML = "";
        information.style.display = "none";
        createList()

    }
    else {
        message.innerHTML = "Adjon meg minden adatot(a számadatok nem lehetnek 0 vagy az alattiak)!"
    }
}

function closeInformation()
{
    createList()
    datas.innerHTML = "";
    addField.style.display = "none"
    information.style.display = "none";
}

