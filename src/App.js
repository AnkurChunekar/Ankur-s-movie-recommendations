import React, { useState } from "react";
import "./styles.css";

const database = {
  Chill: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/hi/b/b4/%E0%A4%9C%E0%A4%BC%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A4%97%E0%A5%80_%E0%A4%A8_%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%87%E0%A4%97%E0%A5%80_%E0%A4%A6%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A4%BE.jpg",
      name: "Zindagi Na Milegi Doobara",
      rating: "IMDb : 8.2/10"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/hi/9/9e/Dear_Zindagi_poster.jpg",
      name: "Dear Zindagi",
      rating: "IMDb : 7.5/10"
    }
  ],

  Thriller: [
    {
      image: "https://upload.wikimedia.org/wikipedia/uk/b/b8/Searching.png",
      name: "Searching",
      rating: "IMDb: 7.6/10"
    },
    {
      image: "https://www.imago-images.de/bild/st/0097824078/w.jpg",
      name: "Badla",
      rating: "IMDb: 7.8/10"
    }
  ],

  Sports: [
    {
      image:
        "https://c8.alamy.com/comp/REWD6J/kevin-de-paula-poster-pele-birth-of-a-legend-2016-REWD6J.jpg",
      name: "Pele: Birth of a Legend",
      rating: "7.2/10"
    },

    {
      image:
        "https://media.gettyimages.com/photos/general-atmosphere-at-the-screening-and-press-conference-for-bhaag-picture-id173161692?s=612x612",
      name: "Bhaag Milkha Bhaag",
      rating: "8.2/10"
    }
  ],

  Action: [
    {
      image:
        "https://c8.alamy.com/comp/PM4KAC/batman-the-dark-knight-poster-2008-warner-brothers-PM4KAC.jpg",
      name: "The Dark Knight",
      rating: "IMDb: 9/10"
    },
    {
      image:
        "https://c8.alamy.com/comp/PMC0T7/avengers-infinity-war-2018-marvel-studios-poster-PMC0T7.jpg",
      name: "Avengers: Infinity War",
      rating: "IMDb: 8.4/10"
    }
  ],

  Animated: [
    {
      image:
        "https://c8.alamy.com/comp/2CGWM52/movie-poster-spider-man-into-the-spider-verse-2018-2CGWM52.jpg",
      name: "Spider-Man: Into the Spider-Verse",
      rating: "IMDb: 8.4/10"
    },
    {
      image:
        "https://c8.alamy.com/comp/2AC1GA2/klaus-2019-directed-by-sergio-pablos-credit-atresmedia-cine-album-2AC1GA2.jpg",
      name: "Klaus",
      rating: "IMDb: 8.2/10"
    }
  ]
};

export default function App() {
  const titles = Object.keys(database);

  function onClickHandler(item) {
    setSelected(item);
  }

  var [selected, setSelected] = useState("Action");

  return (
    <div className="App">
      <h1>Ankur's movie recommendations.</h1>
      <p>
        Checkout my favorite movies. Select a genre to get started. <br />{" "}
        *posters load slowly*{" "}
      </p>

      <div>
        {titles.map(function (item) {
          return <button onClick={() => onClickHandler(item)}> {item} </button>;
        })}
      </div>
      <hr />
      <div>
        <ul>
          {database[selected].map(function (item) {
            return (
              <li>
                {" "}
                <img src={item.image} />{" "}
                <div className="imageTitle">
                  {" "}
                  <h2> {item.name} </h2> {item.rating}{" "}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="footer">
        <h2 className="footer-header">CONNECT</h2>
        <a href="https://www.linkedin.com/in/ankur-chunekar-8071bb211/">
          Linkedin
        </a>
        <a href="https://github.com/AnkurChunekar">Github</a>
        <a href="https://twitter.com/ankur_chunekar">Twitter</a>
      </div>
    </div>
  );
}
