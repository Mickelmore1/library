const myLibrary = [];
const dialog = document.getElementById('dialog');
const form = document.getElementById('submit-book');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == 'On'){
        this.read = 'Yes'
    } else {
        this.read = "No"
    };
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));    
}

function displayTable() {
    const table = document.getElementById('library-table');

    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');

        ['title', 'author', 'pages', 'read'].forEach(property => {
            const cell = document.createElement('td');
            cell.textContent = book[property];
            row.appendChild(cell);
        });

        table.appendChild(row);
        row.setAttribute('data-num', index)
    });
}

function submitBook() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        ['bookTitle', 'bookAuthor','bookPages', 'bookRead'].forEach(property => {
            return property = document.getElementById(property);
        });


        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);

        document.querySelectorAll('tr[data-num]').forEach(tr => tr.remove());
        displayTable();

        dialog.close();
        form.reset();
    });
}

function popupForm(){
    document.getElementById('add-book').addEventListener('click', () => 
        dialog.showModal()
    );
}






addBookToLibrary('Harry Potter', 'JK Rowling', '350', 'On');
addBookToLibrary('Kensuke\'s Kingdom', 'Michael Morpurgo', '161', 'Off');

displayTable();
popupForm();
submitBook();

