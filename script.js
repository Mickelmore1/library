const myLibrary = [];
const dialog = document.getElementById('dialog');
const form = document.getElementById('submit-book');
const bookInfo = ['title', 'author', 'pages', 'read'];

function Book(title, author, pages, read){ //Creates a book object.
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == true){
        this.read = 'Yes'
    } else {
        this.read = 'No'
    };
}


function createTable() {
    const table = document.getElementById('library-table');

    console.log(myLibrary);

    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');

        bookInfo.forEach((property, index) => {
            if (index < bookInfo.length - 1){
                const cell = document.createElement('td');
                cell.textContent = book[property];
                row.appendChild(cell);
            }
        });
    



        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.setAttribute('data-index', index);
        row.appendChild(deleteButton);

        table.appendChild(row);
        row.setAttribute('data-num', index);
    });
}


function deleteTable(){ //Removes all HTML tr elements, providing a clean slate to create the table.
    document.querySelectorAll('tr[data-num]').forEach(tr => tr.remove());
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


function userPressDelete(){
    document.querySelector('tbody').addEventListener('click', (event) => {
        if (event.target.matches('[data-index]')) {
            deleteBookFromLibrary(event.target.dataset.index);
        }
    }); 
}


function deleteBookFromLibrary(index){
    myLibrary.splice(index, 1);
    deleteTable();
    createTable();
}


function displayPopupForm(){
    document.getElementById('add-book').addEventListener('click', () => 
        dialog.showModal()
    );
}

function toggleBookRead() {

}


//Dummy books added to display a table.
addBookToLibrary('Harry Potter', 'JK Rowling', '350', true);
addBookToLibrary('Kensuke\'s Kingdom', 'Michael Morpurgo', '161', false);

createTable();
displayPopupForm();
submitBook();
userPressDelete();

