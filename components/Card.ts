// export function createTodosContainer(headerText: string, cardBodyText: string): HTMLElement {
//     const todosContainer = document.createElement('div');
//     const column = document.createElement('div');
//     const header = document.createElement('header');
//     const body = document.createElement('div');
//     const footer = document.createElement('footer');
//     const button = document.createElement('button');
//     body.draggable = true;
    
//     todosContainer.className = 'todos';
//     column.className = 'column';
//     header.className = 'card-header';
//     body.className = 'card-body';
//     footer.className = 'card-footer';
//     button.className = 'add-card-btn';

//     header.textContent = headerText;
//     body.textContent = cardBodyText;
//     button.textContent = '+ Добавить карточку';

//     footer.append(button);
//     column.append(header, body, footer);

    
    
//     todosContainer.append(createTodosContainer('Todo', 'Вступительное собрание'));
//     todosContainer.append(createTodosContainer('В процессе', 'Go home'));
//     todosContainer.append(createTodosContainer('Готово', ''));
//     document.body.append(todosContainer);
    
//     return column;
// }


