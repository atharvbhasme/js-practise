//what is debouncing? Wait until a certain time has passed without the event happening again, then run the function.
//example: You’re typing in a search box. You don't want to send a search request every time a letter is typed. 

// Instead, you wait until the user stops typing for, say, 500ms, then send the request.

window.onload = function() {

console.log(names);
const showDataDiv = document.getElementById("dataContainer");

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredNames = names.filter(name => name.toLowerCase().includes(query));
    
    showDataDiv.innerHTML = '';
    filteredNames.forEach(name => {
        const div = document.createElement('div');
        div.textContent = name;
        showDataDiv.appendChild(div);
    });
};

const debouncedSearch = debounce(handleSearch, 500);

document.getElementById("searchInput").addEventListener("input", debouncedSearch);

// Initial display of all names
names.forEach(name => {
    const div = document.createElement('div');
    div.textContent = name;
    showDataDiv.appendChild(div);
});
}