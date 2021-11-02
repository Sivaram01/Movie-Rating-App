import './App.css';

export default function Movie() {
  const movies = [
    {
     name: "Avengers",
     poster : "https://wallpapercave.com/dwp1x/6lvp4zT.jpg"  ,
     ratings : "8/10 IBMD",
     summary : "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
  },
    {
     name: "Avatar",
     poster : "https://wallpapercave.com/wp/2FoBvF7.jpg"  ,
     ratings : "7.8/10 IBMD",
     summary : "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
  },
    {
     name: "Harry Potter",
     poster : "https://wallpapercave.com/wp/wp4180794.jpg"  ,
     ratings : "7.6/10 IBMD",
     summary : "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry",
  },
    {
     name: "Titanic",
     poster : "https://wallpapercave.com/wp/KCEjohB.jpg"  ,
     ratings : "7.6/10 IBMD",
     summary : "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
  },
    {
     name: "Jurassic World ",
     poster : "https://wallpapercave.com/wp/wp3153552.jpg"  ,
     ratings : "7/10 IBMD",
     summary : "A theme park showcasing genetically-engineered dinosaurs turns into a nightmare for its tourists when one of the dinosaurs escapes its enclosure. An ex-military animal expert steps up to save the day..",
  },
];
return (
  <div className="App">
       <h1 className = "movies">Movies Of Highest Box Office Collection</h1>
      {movies.map(mr => <MovieFun name = {mr.name} poster = {mr.poster} ratings = {mr.ratings} summary = {mr.summary} />)}
  </div>
);
}

function MovieFun({name , poster , ratings , summary}){
  // console.log(props)
  return (
  <div>
     <img className = "movie-profile" src = {poster} alt = {name} />
     <h1 className="user-name">  {name} 😍</h1>
     <p className = "ratings"> Rating : {ratings} 🌟🌟🌟🌟🌟</p>
     <p className = "summary">{summary}</p>
 
  </div>
  );
}
