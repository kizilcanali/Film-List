class Storage {

    static getFilmsFromStorage(){
        let filmArray;
        if(localStorage.getItem("filmArray") === null){
            filmArray = [];
        }
        else{
            filmArray = JSON.parse(localStorage.getItem("filmArray"));
        }
        return filmArray;
    };

    static addFilmToStorage(newFilm){
        
        let filmArray = this.getFilmsFromStorage();
        filmArray.push(newFilm);
        /*We send object to storage
        [
        {title:"asdasd",director:"asdad",url:"asdasd"},
        {title:"asdasd",director:"asdad",url:"asdasd"}
        ]
        */
        localStorage.setItem("filmArray",JSON.stringify(filmArray));
    };

    static deleteFilmFromStorage(delFilm){
        let filmArray = this.getFilmsFromStorage();

        filmArray.forEach(function(film,index){     
            if(film.title === delFilm){
                filmArray.splice(index,1);
            };
        });

        localStorage.setItem("filmArray",JSON.stringify(filmArray));
    };


    static clearAllFilmsFromStorage(){
        localStorage.removeItem("filmArray");
    };

};