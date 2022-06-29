import { Checklist } from './components/Checklist';
import { ListItem } from './components/ListItem';
import './style.css';


const checkList = new Checklist('.items-list');

const todoForm = document.querySelector('.todo__form');

todoForm?.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const input = <HTMLInputElement>todoForm.querySelector('.todo__input');
  checkList.addItem(new ListItem(input.value).getListItem());
  input.value = ''
});
