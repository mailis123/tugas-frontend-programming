import { createSlice } from '@reduxjs/toolkit';
import data from '../../../utils/constans/data';

const moviesSlice = createSlice({
    //nama slice
  name: "Movies Slice",
  // nilai awal state movies
  initialState: {
    movies: data,
  },

  //membuat reduce : uuntuk mengupdate
  reducers: {
    /**
     * action addMovie menerima 2 param: state dan action.
     * state berisi state movies saat ini.
     * action berisi payload atau data yang dikirim.
     */
    addMovie(state, action) {
      /**
       * Redux membolehkan untuk mengubah data array (mutate).
       * Cukup push untuk menambahkan data movie.
       */
      state.movies.push(action.payload);
    },
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});


/**
 * Slice menghasilkan action dan reducers
 * Nama action diambil dari nama reducer
 */
const { addMovie, updateMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export { addMovie, updateMovies };