function getFunction(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(JSON.stringify(json));
        });
}

function postFunction() {
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
            title: "Problem",
            body: "Solving",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
}

function putFunction() {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            title: "SAjtos",
            body: "Teszta",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));
}

function patchFunction() {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "PATCH",
        body: JSON.stringify({
            title: "SAjtos",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));
}

function deleteFunction() {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(json => console.log(json))
}

getFunction(5)
postFunction()
putFunction()
patchFunction()
deleteFunction()