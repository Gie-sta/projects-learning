const itemForm = document.querySelector('#new-item-form');
const itemList = document.querySelector('#items-list');
//form input values
const description = document.querySelector('#description');
const deadline = document.querySelector('#deadline');

//all todos array
let allToDos = [];


// kiekvienas todoItem turi = {
//   id = Date.now(),
//   description,
//   deadline,
//   completed
// }

//submit new todo
itemForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log(description.value, deadline.value);
  addTodo(description.value, deadline.value);
});


//Add todo
function addTodo(todoDescription, todoDeadline) {
  if (todoDescription) {
    const todoObject = {
      id: Date.now(),
      description: todoDescription,
      deadline: todoDeadline,
      timeLeft: todoDeadline ? timeRemaining(todoDeadline).t : '',
      completed: false
    }
    //add todo object to allToDos array
    allToDos.push(todoObject);
    // console.log(allToDos);
    //add to sesionStorage
    addToSessionStorage(allToDos);
    //clear values
    description.value = '';
    deadline.value = '';
  }
}

//show todos in the list
function renderTodos(allToDos) {

  itemList.innerHTML = '';
  //make li for each todo item
  allToDos.forEach(item => {
    console.log(item.description, item.deadline);
    const checked = item.completed ? 'checked' : null;
    const li = document.createElement('li');
    li.setAttribute('class', 'todo-item');
    li.setAttribute('data-key', item.id);



    if (item.completed === true) {
      li.classList.add('checked');
    }

    //sorting by timeLeft and without deadline last
    function compare(a, b) {
      if (a.timeLeft === '') {
        return 1;
      } else if (b.timeLeft === '') {
        return -1
      } else {
        return a.timeLeft < b.timeLeft ? -1 : a.timeLeft > b.timeLeft ? 1 : 0;
      };
    }
    allToDos.sort(compare);
    console.log(allToDos)

    li.innerHTML = `<input type="checkbox" name="checkbox" class="checkbox" ${ checked }>${ item.description } - <button>Delete</button> <br> <span> ${ timeRemaining(item.deadline).timeLeft }</span>`;

    itemList.append(li);


  });
}



//calculate time remaining to dedline
function timeRemaining(deadline) {
  if (deadline) {
    const t = Date.parse(deadline) - Date.parse(new Date());
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    console.log(t, days, hours, minutes);
    return {
      t,
      minutes,
      hours,
      days,
      timeLeft: `Time left till deadline - ${ days } days ${ hours } hours ${ minutes } minutes`
    }

  } else {
    return {
      timeLeft: ''
    }
  }
}
// function timeRemaining(deadline) {
//   if (deadline) {
//     const t = Date.parse(deadline) - Date.parse(new Date());
//     const minutes = Math.floor((t / 1000 / 60) % 60);
//     const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(t / (1000 * 60 * 60 * 24));
//     console.log(t, days, hours, minutes);
//     return `Time left till deadline - ${ days } days ${ hours } hours ${ minutes } minutes`
//   } else {
//     return ''
//   }
// }

//add to sessionStorage
function addToSessionStorage(allToDos) {
  sessionStorage.setItem('allToDos', JSON.stringify(allToDos));
  renderTodos(allToDos)
};

//get from Storage
function getFromSessionStorage() {
  const data = sessionStorage.getItem('allToDos')
  if (data) {
    allToDos = JSON.parse(data);
    renderTodos(allToDos);
  }
}

//toggle completed or not completed 
function toggleCompleted(id) {
  allToDos.forEach(function (item) {
    //!! dubble == not === because types are different
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });
  addToSessionStorage(allToDos)
  console.log(allToDos)
}

//delete todo
function deleteItem(id) {
  //filter out todo li with id wich delete
  allToDos = allToDos.filter(function (item) {
    return item.id != id;
  })
  addToSessionStorage(allToDos)
}


// initially get everything from localStorage
getFromSessionStorage();

//click on 
itemList.addEventListener('click', function (event) {
  //check if clicked on the checkbox
  console.log(event.target.parentElement)
  if (event.target.type === 'checkbox') {
    console.log(event.target.parentElement.getAttribute('data-key'));
    toggleCompleted(event.target.parentElement.getAttribute('data-key'));

  }
  //check if delete button
  if (event.target.type === 'submit') {
    console.log(event.target.parentElement.getAttribute('data-key'))
    deleteItem(event.target.parentElement.getAttribute('data-key'))
  }
})

//neisejo completed padaryti apacioje!!!!!!!!!!!!!