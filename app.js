
var linkCategory  = document.querySelector ('#linkCategory');
var linkTitle  = document.querySelector ('#linkTitle');
var linkUrl  = document.querySelector ('#linkUrl');
const submitButton = document.querySelector ('#submitButton');
const addedCategories = document.querySelector ('#addedCategories');
const addBtn = document.querySelector ('#addBtn')
const cancelButton = document.querySelector ('#cancelButton');
const addLinkPanel = document.querySelector ('#addLinkPanel');

const linkList = document.querySelector ('#linkList');
addBtn.addEventListener ('click', (event) => {
    showFormPanel ();
}); 
cancelButton.addEventListener ('click', (event) => {
    event.preventDefault ();
    hideFormPanel ();
});

function showFormPanel () {
    addLinkPanel.classList.remove ('hidden');
}
function hideFormPanel () {
    addLinkPanel.classList.add ('hidden');
    clearForm ();
}

let linkCategories = [];
let links = [{
    title : 'T1',
    url : 'https://google.com',
    categories : []
}];
console.log (this); // referring to window object basically global object

//traditional call back fun binds it to the item event 
submitButton.addEventListener ('click', (event) => {

    event.preventDefault ();

    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories

    const newLink  = {
        title,
        url,
        linkCategories
    }
    links.unshift (newLink);

    clearForm ();

    displayLinkCategories ();

    hideFormPanel ();

    displayLinks ();
});

function clearForm () {
    linkTitle.value = '';
    linkCategory.value = '';
    linkUrl.value = '';

    linkCategories = [];
    addedCategories.innerHTML  = '';
}
linkCategory.addEventListener ('keydown', (event) => {
    if (event.keyCode === 188) {
        event.preventDefault ();
        linkCategories.push (linkCategory.value); 
        linkCategory.value = '';

        //display updated categories
        displayLinkCategories ();
    }
});
function displayLinkCategories () {
    addedCategories.innerHTML = '';
    
    for (let category of linkCategories) {
        let categoryHTMLString =  `<span class="category">${category}</span>`;
        addedCategories.innerHTML  += categoryHTMLString;
    }
}
displayLinks ();
function displayLinks () {
    linkList.innerHTML = '';

    for (let link of links) {
        let linkHTMLString = `
            <div class="link panel">
                <div class="link-options">
                    <button class="btn-sm">Delete</button>
                    <button class="btn-sm">Edit</button>
                </div>
            
                <a href="${link.url}"><h1 class="header">${link.title}</h1></a>
                <p class="link-date">${Date.now()}</p>
                <div class="categories">
                    Categories:
                `;
                for (let category of link.categories) {
                    linkHTMLString += `<span class="category">${category}</span>` 
                }                    
                linkHTMLString +=`</div>
            </div>  
        `;
        linkList.innerHTML =  linkHTMLString;
    }
}