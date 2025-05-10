const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const bookList = document.getElementById('book-list');
const bookform = document.querySelector('#book-form form'); // fix

bookform.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) {
    alert("Please fill in all the fields");
    return;
  }

  // Create row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class='delete'>Clear</button></td>
  `;

  bookList.appendChild(row);

  // Clear inputs
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
});

// Delete row on Clear button click
bookList.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }
});
