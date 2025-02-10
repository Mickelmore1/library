const myLibrary = [];
const dialog = document.getElementById('dialog');
const form = document.getElementById('submit-book');
const bookInfo = ['title', 'author', 'pages', 'read'];

function Book(title, author, pages, read){ //Creates a book object.
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleBookRead = function(){ 
    this.read = !this.read;
};

function createTable() {
    const table = document.getElementById('library-table');

    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');
          bookInfo.forEach((property, index) => {
            if (index < bookInfo.length - 1){
                const cell = document.createElement('td');
                cell.textContent = book[property];
                row.appendChild(cell);
            }
        });
        
        createCheckboxCell(book, row);
        createDeleteButtonCell(index, row);

        table.appendChild(row);
        row.setAttribute('data-num', index);
    });
}

function createCheckboxCell(book, row) {
    const checkbox = document.createElement('input')
    const cellCheck = document.createElement('td');

    checkbox.type = "checkbox"
    checkbox.checked = book.read;
    checkbox.addEventListener('click', () => { //Adding an event listener with the created checkbox to toggle book read status
        book.toggleBookRead(); 
    });

    cellCheck.appendChild(checkbox);
    row.appendChild(cellCheck);
}

function createDeleteButtonCell(index, row) {
    const deleteButton = document.createElement('button');
    const cellDeleteButton = document.createElement('td');
    deleteButton.innerText = 'X';
    deleteButton.setAttribute('data-index', index);
    deleteButton.addEventListener('click', () => { //Adding an event listener with the created X to delete a book.
        deleteBookFromLibrary(index);
    })
    cellDeleteButton.appendChild(deleteButton);
    row.appendChild(cellDeleteButton);
}

function submitBook() { //When a user submits a book, it updates myLibrary array, deletes the old table and creates a new one based on the updated myLibrary array.
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        bookInfo.forEach(property => {
            return property = document.getElementById(property);
        });

        addBookToLibrary(title.value, author.value, pages.value, read.checked);

        deleteTable();
        createTable();

        dialog.close(); //Force closing and resetting the form dialog window.
        form.reset();
    });
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));    
}

function deleteBookFromLibrary(index){
    myLibrary.splice(index, 1);
    deleteTable();
    createTable();
}

function deleteTable(){ //Removes all HTML tr elements, providing a clean slate to create the table.
    document.querySelectorAll('tr[data-num]').forEach(tr => tr.remove());
}

function displayPopupForm(){
    document.getElementById('add-book').addEventListener('click', () => 
        dialog.showModal()
    );
}

//Dummy books added to display a table.
addBookToLibrary('Harry Potter', 'JK Rowling', '350', true);
addBookToLibrary('Kensuke\'s Kingdom', 'Michael Morpurgo', '161', false);

createTable();
displayPopupForm();
submitBook();

