function getAllTodos() {
    const apiUrl = "https://6942665069b12460f310f9c1.mockapi.io/api/v1/todos"

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error));
}

function getTodo(id) {
    const apiUrl = "https://6942665069b12460f310f9c1.mockapi.io/api/v1/todos/" + id;

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error));
}