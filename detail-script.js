function displayTodo(todo) {
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;

    const descriptionSpan = document.getElementById('todo-description');
    descriptionSpan.innerHTML = todo.description;

    const creationDateSpan = document.getElementById('todo-creation-date');
    creationDateSpan.innerHTML = todo.creationDate;

    const endDateSpan = document.getElementById('todo-end-date');
    endDateSpan.innerHTML = todo.endDate;

    const colorDiv = document.getElementById('todo-color');
    colorDiv.style.backgroundColor = todo.color;

    const doneSpan = document.getElementById('todo-done');
    if (todo.done) {
        doneSpan.innerHTML = 'completato';
    } else {
        doneSpan.innerHTML = 'da completare'
    }

}

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('todoId');

getTodo(id).then(result => displayTodo(result));