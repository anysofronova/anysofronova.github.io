const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");
const container = document.getElementById("container");

const promotion = ['У тебя всё получится!','Верь в себя!','Ты сможешь!',
    'Главное — верить в свои силы.','Почему бы и нет?',
    'Ты этого хочешь. Значит, это будет.','Мы – хозяева своей судьбы.',
    'Наши достижения всегда соответствуют нашим амбициям.']

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    addToDo();
    createNotification();
});

function addToDo(){
    const todoText = input.value;

    if (todoText){
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', ()=>{
            todoEl.classList.toggle('completed')
        })

        todoEl.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
            todoEl.remove();
        })
        todos.appendChild(todoEl);
        input.value = ''
    }
}

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = promotion[Math.floor(Math.random() * promotion.length)];
    container.appendChild(notif);
    setTimeout(() =>{
        notif.remove();
    }, 3000);
}