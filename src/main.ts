import { Checklist } from './components/Checklist';
import { ListItem } from './components/ListItem';
import './style.css';

export type Task ={
  title : string,
  completed: boolean,
  date: Date
}

const checkList = new Checklist('.items-list');

const todoForm = document.querySelector('.todo__form');
const input = todoForm?.querySelector('.todo__input') as HTMLInputElement | null;

const tasks: Task[] = []

 
todoForm?.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (input?.value === '' || input?.value === null) return;
  if (input){

    const newTask = {
      title: input.value,
      completed: false,
      date: new Date()
    }
    tasks.push(newTask)
    addItem(newTask)

    input.value = '';

  }
});


function addItem(task: Task){
  const taskItem = new ListItem(task).getListItem()
  checkList.addItem(taskItem)
}