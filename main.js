
const form =document.querySelector("#film-form");
const titleInput = document.querySelector("#title")
const directorInput =document.querySelector("#director");
const urlInput = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

eventListeners();




function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",loadFilmsToInterface);
    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
};

function clearAllFilms(){

    if(confirm("Arw you sure to clear all films ?")){  
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    
};

};
function deleteFilm(e){
    if(e.target.id === "delete-film" ){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.showAlert("success","Film was deleted successfully!");
    };
};
function addFilm(e){

    const title = titleInput.value;
    const director = directorInput.value;
    const url = urlInput.value;

    if(title === "" || director === "" || url === ""){
        UI.showAlert("warning","Please fill all blanks!");
    }
    else{

    const newFilm = new Film(title,director,url);
    UI.addFilmToUI(newFilm);
    Storage.addFilmToStorage(newFilm);
    UI.showAlert("success","FILM WAS ADDED SUCCESSFULLY !!");
}
    UI.clearInputs(titleInput,directorInput,urlInput);


    e.preventDefault();
};

function loadFilmsToInterface(){
    let films = Storage.getFilmsFromStorage();
    UI.loadFilms(films);
};