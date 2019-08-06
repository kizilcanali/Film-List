class UI {

    static addFilmToUI(newFilm){
       
        const filmList = document.getElementById("films");

        filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    `
    };
    static showAlert(type,message){
        const div = document.createElement("div");
        const firstCardBody = document.querySelectorAll(".card-body")[0];

        div.className = `alert alert-${type}`;
        div.textContent=message;
        div.role = alert;  

        firstCardBody.appendChild(div);

        setTimeout(() => {
           div.remove(); 
        }, 4000);

    };
    static loadFilms(films){
        const filmList = document.getElementById("films");

        films.forEach(function(e){
            
            filmList.innerHTML += 
            `
            <tr>
                <td><img src="${e.url}" class="img-fluid img-thumbnail"></td>
                <td>${e.title}</td>
                <td>${e.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
            `
        });
    };

    static deleteFilmFromUI(delFilm){
        delFilm.parentElement.parentElement.remove();
    };

    static clearInputs(e1,e2,e3){

        e1.value="";
        e2.value="";
        e3.value="";
    };

  static clearAllFilmsFromUI(){

    const filmList = document.getElementById("films");

    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
        
    };



}
}