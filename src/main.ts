import { Checklist } from './components/Checklist';
import { ListItem } from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';
import './style.css';



export type Task = {
  id: string
  title: string;
  completed: boolean;
  date: Date;
};

const checkList = new Checklist('.items-list');
const todoForm = document.querySelector('.todo__form');
const input = todoForm?.querySelector(
  '.todo__input'
) as HTMLInputElement | null;

let tasks: Task[] = [];

loadTasks().forEach((task) => {
  tasks.push(task);
  addItem(task);
});

todoForm?.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (input?.value === '' || input?.value === null) return;
  if (input) {
    const newTask = {
      id: uuidv4(),
      title: input.value,
      completed: false,
      date: new Date(),
    };
    tasks.push(newTask);
    addItem(newTask);
    saveTasks(tasks);
    input.value = '';
  }
});

function addItem(task: Task) {
  const taskItem = new ListItem(task, {
    taskDeleter: deleteTask,
  }).getListItem();
  checkList.addItem(taskItem);
}

function saveTasks(taskArray: Task[]) {
  localStorage.setItem('TASKS', JSON.stringify(taskArray));
}

function loadTasks(): Task[] {
  const tasksJSON = localStorage.getItem('TASKS');
  if (tasksJSON) return JSON.parse(tasksJSON);
  else return [];
}

function deleteTask(taskId: string) {
  const updatedTasks = tasks.filter((task) => taskId !== task.id);
  saveTasks(updatedTasks);
}
