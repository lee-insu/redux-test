import {createStore} from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const add = "add";
const del = "delete";




const reducer = (state = [], action) => {
    switch(action.type){
      case add :
        return  [...state, {text: action.text, id:action.id}];
      case del : 
        return state.filter(todo => todo.id !== action.id);
        default : 
        return state
    }
}
 
const store = createStore(reducer);



store.subscribe(()=>console.log(store.getState()));

const todos = () => {
    const todos = store.getState();
    ul.innerHTML= "";
    todos.forEach(todo => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.innerText ='del';
      btn.addEventListener('click',deleteTodo);
      li.id = todo.id;
      li.innerText = todo.text;
      li.appendChild(btn);
      ul.appendChild(li);
    })
}

const deleteTodo = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch({type:del , id})
}



store.subscribe(todos)


const addTodo = e => {
  store.dispatch({type: add, text: e, id:Date.now()});
}



const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  addTodo(todo)
};

form.addEventListener('submit',onSubmit);