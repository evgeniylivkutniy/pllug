const addBtn = document.getElementById('addBtn')
let todoList = [];
//оголосимо змінні для секундоміра
let startTimer = 0;
let sec = 0;
min = 0;
hrs = 0;
let t;
let isPaused = false;

//
addBtn.addEventListener('click', () => {

    let inputValue = document.getElementById('enterTodo').value;
    let todoObj = {};
    todoObj.todo = inputValue;
    let i = todoList.length;
    todoList[i] = todoObj;
    showList();

    timer();
})

//timer functions
function tick() {
    if (!isPaused) {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hrs++;
            }
        }
    }
}



function timer() {

    t = setTimeout(add, 1000);

}
function add() {

    tick();
    startTimer.innerText = (hrs > 9 ? hrs : "0" + hrs)
        + ":" + (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}


function showList() {

    let out = '';
    for (let key in todoList) {
        out = todoList[key].todo;

    }
    let newTask = document.createElement('div');
    newTask.classList.add('new-task')
    let taskList = document.querySelector('.task-list')
    newTask.innerHTML = out;
    taskList.appendChild(newTask);
    let newTimer = document.createElement('p')
    startTimer = newTimer;
    newTimer.classList.add('newTimer')

    newTask.appendChild(newTimer);

    let pausedBtn = document.createElement('p')
    pausedBtn.classList.add('paused');

    pausedBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>'
    let playedBtn = document.createElement('p')
    playedBtn.classList.add('played')
    playedBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>'
    let deleteBtn = document.createElement('p')
    deleteBtn.classList.add('deleteBtn');
    newTask.appendChild(playedBtn)
    newTask.appendChild(pausedBtn)

    newTask.appendChild(deleteBtn)
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>'
    pausedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isPaused = true;
    })
    playedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isPaused = false;
    })
}




