const input = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

function renderTodos(todos) {
    const li = document.createElement('li');


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todos.completed == true;
    
    const Title= document.createElement('span');
    Title.textContent = todos.title;
    Title.classList.toggle('completed', checkbox.checked);
   

    checkbox.addEventListener('change', function() {
        Title.classList.toggle('completed', checkbox.checked);

          });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';


    li.textContent = todos.title;
    
    todoList.appendChild(li);

    deleteButton.addEventListener('click', function() {
        fetch(`http://localhost:3000/todos/${todos.id}`, {
            method: 'DELETE'
        })

        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao excluir tarefa');
            }
             li.remove();
        })

        .catch(error => {
            console.error( error);
            alert('Erro ao excluir a tarefa. Por favor, tente novamente.');
        });
       
              
    });

     li.appendChild(title);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
}

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



       