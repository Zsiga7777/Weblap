let working = document.getElementById("workingField");
let chooseButtons = document.getElementsByName("studentCourseChoose");
let chosenType = 0;

chooseButtons.forEach(element => {
    element.addEventListener("change", () => {
        for (let i = 0; i < chooseButtons.length; i++) {
            if (chooseButtons[i].checked) {
                chosenType = i;
                working.innerHTML == "";
                working.style.display = "none";
                feedback.innerHTML == "";
            }
        }
    })
});


async function getFunction(id, type) {
    let result
    await fetch(`https://vvri.pythonanywhere.com/api/${type}/${id}`)
        .then(response => response.json())
        .then(json => { result = json });
    return result
}

async function getAllFunction(type) {
    let result
    await fetch(`https://vvri.pythonanywhere.com/api/${type}`)
        .then(response => response.json())
        .then(json => { result = json });
    return result
}

async function postFunction(test, type) {
    let result
    await fetch(`https://vvri.pythonanywhere.com/api/${type}`, {
        method: "POST",
        body: test,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => result = json);
    return result
}

async function putFunction(test, id, type) {
    let result
    await fetch(`https://vvri.pythonanywhere.com/api/${type}/${id}`, {
        method: "PUT",
        body: test,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => result = json);
    return result
}

async function patchFunction(test, id, type) {
    let result
    await fetch(`https://vvri.pythonanywhere.com/api/${type}/${id}`, {
        method: "PATCH",
        body: test,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => result = json);
    return result
}

async function deleteFunction(id, type) {
    let result
    await fetch(`https://vvri.pythonanywhere.com/api/${type}/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(json => result = json)
    return result
}

function addNewSomething() {
    if (chosenType == 0) {
        addStudent()
    }
    else {
        addCourse()
    }
}

function modifySomething() {
    if (chosenType == 0) {
        modifyStudent()
    }
    else {
        modifyCourse()
    }
}

async function addStudent() {
    let courses = await getAllFunction("courses");

    working.style.display = "flex"
    working.innerHTML = "<label for='studentInput'>Új tanuló neve: </label><input type='text' id='studentInput'> "
    working.innerHTML += "<label for='selectedCourse'>Tanuló tantárgya:</label> <select id='selectedCourse'> name='selectedCourse' </select>"

    select = document.getElementById("selectedCourse")

    courses.forEach(element => {
        select.innerHTML += `<option value='${element.id}'> ${element.name} </option>`
    });

    working.innerHTML += "<button onclick='saveStudent()'>Új tanuló mentése</button>"
}

async function saveStudent() {
    let newName = document.getElementById("studentInput").value;
    let selectedCourse = document.getElementById("selectedCourse").value
    if (newName == null) {
        alert("Adjon meg nevet!")
        return
    }
    let newStudent = { name: newName, course_id: selectedCourse }
    let response = await postFunction(JSON.stringify(newStudent), "students")

    if (response.name == newName) {
        alert("A tanuló sikeresen hozzáadásra került.")
    }
    else {
        alert("A tanuló már létezett, vagy valami hiba történt")
    }
    working.style.display = "none"
}

async function addCourse() {
    working.style.display = "flex"
    working.innerHTML = "<label for='courseInput'>Új kurzus neve: </label><input type='text' id='courseInput'> "

    working.innerHTML += "<button onclick='saveCourse()'>Új kurzus mentése</button>"

}

async function saveCourse() {
    let newName = document.getElementById("courseInput").value;

    if (newName == null) {
        alert("Adjon meg nevet!")
        return
    }
    let newCourse = { name: newName }
    let response = await postFunction(JSON.stringify(newCourse), "courses")

    if (response.name == newName) {
        alert("A kurzus sikeresen hozzáadásra került.")
    }
    else {
        alert("A kurzus már létezett, vagy valami hiba történt")
    }
    working.style.display = "none"
}

async function modifyStudent() {
    let students = await getAllFunction("students");

    working.style.display = "flex"
    working.innerHTML = "<label for='selectedStudent'>Tanulók:</label> <select id='selectedStudent'> name='selectedStudent' </select>"
    working.innerHTML += "<label for='studentInput'>tanuló új neve: </label><input type='text' id='studentInput'> "

    select = document.getElementById("selectedStudent")

    students.forEach(element => {
        select.innerHTML += `<option value='${element.id}'> ${element.name} </option>`
    });

    working.innerHTML += "<button onclick='saveModifiedStudent()'>tanuló módosításának mentése</button>"
}
async function saveModifiedStudent() {
    let newName = document.getElementById("studentInput").value;
    let selectedStudent = document.getElementById("selectedStudent").value

    if (newName == null) {
        alert("Adjon meg nevet!")
        return
    }
    let modifiedStudent = { name: newName, course_id: selectedStudent }
    let response = await putFunction(JSON.stringify(modifiedStudent), selectedStudent, "students")

    if (response.name == newName) {
        alert("A tanuló sikeresen módosítva került.")
    }
    else {
        alert("A tanuló nem került módosításra, vagy valami hiba történt")
    }
    working.style.display = "none"
}

async function modifyCourse() {
    let courses = await getAllFunction("courses");

    working.style.display = "flex"
    working.innerHTML = "<label for='selectedCourse'>Kurzusok:</label> <select id='selectedCourse'> name='selectedCourse' </select>"
    working.innerHTML += "<label for='courseInput'>kurzus új neve: </label><input type='text' id='courseInput'> "

    select = document.getElementById("selectedCourse")

    courses.forEach(element => {
        select.innerHTML += `<option value='${element.id}'> ${element.name} </option>`
    });

    working.innerHTML += "<button onclick='saveModifiedCourse()'>kurzus módosításának mentése</button>"

}
async function saveModifiedCourse() {
    let newName = document.getElementById("courseInput").value;
    let selectedCourse = document.getElementById("selectedCourse").value

    if (newName == null) {
        alert("Adjon meg nevet!")
        return
    }
    let modifiedCourse = { name: newName }
    let response = await patchFunction(JSON.stringify(modifiedCourse), selectedCourse, "courses")

    if (response.name == newName) {
        alert("A kurzus sikeresen módosításra került.")
    }
    else {
        alert("A tanuló nem került módosításra, vagy valami hiba történt")
    }

    working.style.display = "none"
}

function deleteStudent() { }

function deleteCourse() { }
