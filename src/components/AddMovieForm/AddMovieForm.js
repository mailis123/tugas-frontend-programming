import { nanoid } from "nanoid";
import { React, useState } from "react";
import styles from "./AddMovieForm.module.css";



// Membuat Component AddMovieForm
function AddMovieForm(props) {
    const { movies, setMovies } = props;

    const [data, setData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "",
    });

    const [error, setError] = useState({
        isTitleError: false,
        isDateError: false,
        isPosterError: false,
        isTypeError: false,
    });

    function handleChange(e) {

        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        });
    }

    function validateForm() {
        if (title === '') {
            setError({
                ...error,
                isTitleError: true,
            });
            return false;
        } else if (date === '') {
            setError({
                ...error,
                isDateError: true,
                isTitleError: false,
            });
            return false;
        } else if (poster === '') {
            setError({
                ...error,
                isPosterError: true,
                isDateError: false,
            });
            return false;
        } else if (type === '') {
            setError({
                ...error,
                isTypeError: true,
                isPosterError: false,
            });
            return false;
        } else {
            setError({
                ...error,
                isTitleError: false,
                isDateError: false,
                isPosterError: false,
                isTypeError: false,
            });
            return true;
        }
    }

    function addForm() {
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: type,
            poster: poster,
        };

        setMovies([...movies, movie]);
    }

    function handleSubmit(e) {

        e.preventDefault();

        validateForm() && addForm();

    }

    const { title, date, poster, type } = data ;
    const {isTitleError, isDateError, isPosterError, isTypeError } = error;

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
                            onChange={handleChange}
                        />
                        {isTitleError && (
                            <p>Title Wajib Diisi</p>
                        )}
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
                            onChange={handleChange}
                        />
                        {isDateError && (
                            <p>Date Wajib Diisi</p>
                        )}
                        <br />
                        <label className={styles.AddMovieForm__isi} htmlFor="poster">
                            poster
                        </label>
                        <br />
                        <input
                            onChange={handleChange}
                            id="poster"
                            className={styles.form__input}
                            name="poster"
                            type="text"
                            value={poster}
                        />
                        {isPosterError && (
                            <p>Poster Wajib Diisi</p>
                        )}
                        <br />
                        <label className={styles.AddMovieForm__isi} htmlFor="type">
                            genre
                        </label>
                        <br />
                        <input
                            onChange={handleChange}
                            id="type"
                            className={styles.form__input}
                            name="type"
                            type="text"
                            value={type}
                        />
                        {isTypeError && (
                            <p>Genre Wajib Diisi</p>
                        )}
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