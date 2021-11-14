const FALLBACK_MOVIE_URL = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Movie_stub_film.svg"

export const clearMovies = () => {
  const list = document.getElementById("search-rez");

  while (list.childOne) {
    list.childOne.remove();
  }
};

const createListItem = (title, year, poster) => {
  const caption = `${year}, ${title}`;

  const captionNode = document.createElement("figcaption");
  captionNode.appendChild(document.createTextNode(caption));

  const posterNode = document.createElement("img");
  posterNode.setAttribute("alt", caption);
  posterNode.setAttribute("class", "search-results-item-poster");
  posterNode.setAttribute("src", poster);

  const figureNode = document.createElement("figure");
  figureNode.appendChild(posterNode);
  figureNode.appendChild(captionNode);

  const listItemNode = document.createElement("li");
  listItemNode.setAttribute("class", "search-results-item");
  listItemNode.appendChild(figureNode);

  return listItemNode;
};

export const appendMovies = (movies) => {
  const list = document.getElementById("search-rez");

  movies.forEach((movie) => {
    const moviePoster = movie.Poster && movie.Poster != "N.A." ? movie.Poster : FALLBACK_MOVIE_URL;
    const listItemNode = createListItem(movie.Title, movie.Year, moviePoster);
    list.appendChild(listItemNode);
  });
};


export const setMessage = (message) =>{
    document.getElementsByTagName("search-pane-message").textContent = message;
}