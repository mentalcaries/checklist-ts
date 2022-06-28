export class ListItem {
  public listItem!: HTMLElement;
  constructor(public todo: string) {
    this.todo = todo;
  }

  createItem() {
    const item = document.createElement('li');
    item.className =
      'item list-group-item d-flex justify-content-between w-75 mb-3';
    item.innerHTML = `
            <div class="item__elements">
              <button class="list__button"></button>
              <p class="item__text">${this.todo}</p>
            </div>
            <button class="list__button_delete"></button>
      `;
      return item
  }

  checkItem() {}

  deleteItem() {}

  setEventListeners() {
    const checkButton = this.listItem?.querySelector('.list__button_check');
  }

  getListItem() {
    this.listItem = this.createItem();
  }
}
