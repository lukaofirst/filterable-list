// DOM Element
let filterInput = document.getElementById('filterInput');

// Adding Event Listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Get names ul
    let ul = document.getElementById('names');

    // Get li's from ul
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through collection-item li's
    for(let i = 0; i < li.length; i++) {
        let a = li[i].firstElementChild;

        // If matched
        if(a.innerHTML.toUpperCase().startsWith(filterValue)) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
