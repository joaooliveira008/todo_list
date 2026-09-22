const input = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', function() {

    if (input.value.trim() === '') {
        return;
    }

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: input.value
        })
    })
    .then(response => response.json())
    .then(todo => {
        const li = document.createElement('li');

        li.textContent = todo.title;

        document.getElementById('todoList').appendChild(li);

        input.value = '';
    });
});

fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(todos => {

        todos.forEach(todo => {
            const li = document.createElement('li');

            li.textContent = todo.title;

            document.getElementById('todoList').appendChild(li);
        });
    });
   
       