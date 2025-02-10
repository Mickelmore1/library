const myLibrary = [];
const dialog = document.getElementById('dialog');
const form = document.getElementById('submit-book');
const bookInfo = ['title', 'author', 'pages', 'read'];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == true){
        this.read = 'Yes'
    } else {
        this.read = 'No'
    };
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));    
}

function createTable() {
    const table = document.getElementById('library-table');

    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');

        bookInfo.forEach(property => {
            const cell = document.createElement('td');
            cell.textContent = book[property];
            row.appendChild(cell);
        });
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.classList.add('delete');
        row.appendChild(deleteButton);


        table.appendChild(row);
        row.setAttribute('data-num', index)
    });
}

function deleteTable(){
    document.querySelectorAll('tr[data-num]').forEach(tr => tr.remove());
}

function submitBook() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        bookInfo.forEach(property => {
            return property = document.getElementById(property);
        });

        addBookToLibrary(title.value, author.value, pages.value, read.checked);

        deleteTable();
        createTable();

        dialog.close();
        form.reset();
    });
}

function popupForm(){
    document.getElementById('add-book').addEventListener('click', () => 
        dialog.showModal()
    );
}





addBookToLibrary('Harry Potter', 'JK Rowling', '350', true);
addBookToLibrary('Kensuke\'s Kingdom', 'Michael Morpurgo', '161', false);

createTable();
popupForm();
submitBook();

