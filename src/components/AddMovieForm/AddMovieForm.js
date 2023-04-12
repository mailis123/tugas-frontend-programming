import { nanoid } from "nanoid";
import Movie from "../Movie/Movie";
import { React, useState  } from "react";
import styles from "./AddMovieForm.module.css";



// Membuat Component AddMovieForm
function AddMovieForm(props) {

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  function handleClick(){
    const movie ={
      id: nanoid(),
      title: "jigsaw SSpiral",
      year: 2021,
      type: "movie",
      poster:"https://picsum.photos/300/400"
    };
  
    setMovies([...movies, movie]);

    setIsTitleError(false);
    setIsDateError(false);
    setIsPosterError(false);
  }
;

const [title, setTitle] =  useState("");
  
const [date, setDate] = useState("");
  
    function handleDate(e) {
      setDate(e.target.value);
      }
  
    function handleTitle(e) {
      setTitle(e.target.value);
      }

function handleSubmit(e){

  e.preventDefault();

  const movie ={
    id: nanoid(), title: title,
    year: date, type:"Movie",
    poster : "https://picsum.photos/300/400"
  };
}



    return (

      
      <div className={styles.container}>
        <section className={styles.AddMovieForm}>
          <div className={styles.AddMovieForm__left}>
            <img
              className={styles.AddMovieForm__image}
              src="https://picsum.photos/536/354"
              alt="placeholder"
            />
          </div>
          <div className={styles.AddMovieForm__right}>
            <h2 className={styles.AddMovieForm__title}>Add Movie</h2>
            <form onSubmit={handleSubmit}>
              <label className={styles.AddMovieForm__isi} htmlFor="title">
                Title
              </label>
              <br />
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleTitle}
              />
              <p>Title Wajib Diisi</p>
              <br />
              
              <label className={styles.AddMovieForm__isi} htmlFor="year">
                Year
              </label>
              <br />
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleDate}
              />
              <p>Date Wajib Diisi</p>
              <br />
              <label className={styles.AddMovieForm__isi} htmlFor="poster">
                poster
              </label>
              <input
                onChange={handleChange}
                id="poster"
                className={styles.form__input}
                name="poster"
                type="text"
                value={poster}
              />
              <input
                className={styles.AddMovieForm__submit}
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </section>
      </div>
    );
  }

  
  

  

export default AddMovieForm;