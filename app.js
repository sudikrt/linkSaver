
var linkCategory  = document.querySelector ('#linkCategory');
var linkTitle  = document.querySelector ('#linkTitle');
var linkUrl  = document.querySelector ('#linkUrl');
const submitButton = document.querySelector ('#submitButton');
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