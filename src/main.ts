
let draggedCard: HTMLElement | null;
const body = document.body;

body.ondragstart = (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('card-body')) {
    draggedCard = target;
  }
};

body.ondragover = (e) => {
  e.preventDefault();
};

body.ondrop = (e) => {
  e.preventDefault();
  const target = e.target as HTMLElement;

  if (draggedCard) {
    const targetColumn = target.closest('.column') as HTMLElement;
    if (targetColumn) {
      const addCardButton = targetColumn.querySelector('.add-card-btn') as HTMLElement;
      if (addCardButton) {
        targetColumn.insertBefore(draggedCard, addCardButton.parentElement);
      } else {
        targetColumn.append(draggedCard);
      }
    }
    draggedCard = null;
  }
};
