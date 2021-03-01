
var linkCategory  = document.querySelector ('#linkCategory');
var linkTitle  = document.querySelector ('#linkTitle');
var linkUrl  = document.querySelector ('#linkUrl');
const submitButton = document.querySelector ('#submitButton');

const addBtn = document.querySelector ('#addBtn')
const cancelButton = document.querySelector ('#cancelButton');
const addLinkPanel = document.querySelector ('#addLinkPanel');

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
}

let linkCategories = [];
let links = [];
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
    links.push (newLink);

    linkTitle.value = '';
    linkCategory.value = '';
    linkUrl.value = '';

    linkCategories = [];

    displayLinkCategories ();

    hideFormPanel ();
});

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

}