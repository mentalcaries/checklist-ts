export class Checklist {
  private renderer : (item:HTMLElement)=> void
  private container: HTMLElement | null

  constructor(renderer : (item:HTMLElement)=>void, cardContainer: string) {
    this.renderer = renderer;
    this.container = document.querySelector(cardContainer);
  }

  renderItems(items:[]) {
    items.forEach((item:HTMLElement) => {
      this.renderer(item);
    });
  }

  addItem(card:HTMLElement) {
    //takes DOM element and adds it to the container
    this.container?.prepend(card);
  }
}
