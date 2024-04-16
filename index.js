function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  const url = "https://anapioficeandfire.com/api/books";
  return fetch(url)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Failed to fetch books");
      }
      return resp.json();
    })
    .then((books) => {
      renderBooks(books); 
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
}
