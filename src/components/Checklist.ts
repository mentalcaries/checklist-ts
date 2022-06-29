export class Checklist {
  private container: HTMLElement | null

  constructor(cardContainer: string) {
    this.container = document.querySelector<HTMLLIElement>(cardContainer);
  }


  addItem(card:HTMLElement) {
    //takes DOM element and adds it to the container
    this.container?.prepend(card);
  }
}
