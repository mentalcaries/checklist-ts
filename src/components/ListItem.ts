import { Task } from '../main';

export class ListItem {
  classList: any;
  parentElement: any;
  title: string;
  completed: boolean;
  date: Date;
  querySelector: any;

  constructor(public task: Task) {
    this.title = task.title;
    this.completed = task.completed;
    this.date = task.date;
  }

  createItem(): HTMLElement {
    const item = document.createElement('li');
    item.className =
      'item list-group-item d-flex justify-content-between w-75 mb-3';
    item.innerHTML = `
            <div class="item__elements">
              <button class="list__button list__button_check"></button>
              <p class="item__text">${this.title}</p>
            </div>
            <button class="list__button list__button_delete"></button>
      `;
    return item;
  }

  private _setIsCompleted = () => {
    this.completed = !this.completed;
  };

  private toggleChecked = (item: any) => {
    item.querySelector('.item__text')?.classList.toggle('item__text_disabled');
    item
      .querySelector('.list__button_check')
      .classList.toggle('list__button_clicked');
  };

  private _deleteItem() {
    this.parentElement.remove();
  }

  private _setEventListeners(item: HTMLElement) {
    const checkButton = item.querySelector('.list__button_check');
    const deleteButton = item.querySelector('.list__button_delete');
    checkButton?.addEventListener('click', () => {
      this._setIsCompleted();
      this.toggleChecked(item);
    });
    deleteButton?.addEventListener('click', this._deleteItem);
  }

  getListItem() {
    const listItem = this.createItem();
    this._setEventListeners(listItem);

    if (this.completed) {
      this.toggleChecked(listItem);
    }

    return listItem;
  }
}
