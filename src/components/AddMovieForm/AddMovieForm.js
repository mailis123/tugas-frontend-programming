import { React  } from "react";
import styles from "./AddMovieForm.module.css";

// Membuat Component AddMovieForm
function AddMovieForm() {
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
            <form action="#">
              <label className={styles.AddMovieForm__isi} htmlFor="title">
                Title
              </label>
              <br />
              <input
                className={styles.AddMovieForm__input}
                type="text"
                name="title"
              />
              <br />
              <label className={styles.AddMovieForm__isi} htmlFor="year">
                Year
              </label>
              <br />
              <input
                className={styles.AddMovieForm__input}
                type="text"
                name="year"
              />
              <br />
              <br />
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