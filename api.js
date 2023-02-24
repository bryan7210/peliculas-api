


let buscarpelicula = () => {
 
  let pelicula = `http://www.omdbapi.com/?t=detective+pikachu&apikey=deced15d`;
  
  if (pelicula.length <= 0) {
    resultado.innerHTML = `<h3 class="msg">ingresa el nombre de la palicula</h3>`;
  }
  else {
    fetch(pelicula)
      .then((resp) => resp.json())
      .then((data) => {
       
        if (data.Response == "True") {
          resultado.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star.png">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genero">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Descripccion:</h3>
            <p>${data.Plot}</p>
            <h3>elenco:</h3>
            <p>${data.Actors}</p>
            
        `;
        }
        
        else {
          resultado.innerHTML = `<h3 class='msg'>${"no encontramos  "+nombredepelicula+" intenta con otra ves "}</h3>`;
        }
      })
      
      .catch(() => {
        resultado.innerHTML = `<h3 class="msg"></h3>`;
      });
  }
  
};


window.addEventListener("load", buscarpelicula);