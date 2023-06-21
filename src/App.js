// Import Halaman Home
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import theme from "./utils/constans/theme";
import Detail from "./pages/movie/Detail";

import { useState } from "react";
import data from "./utils/constans/data";

function App() {

const [movies, setMovies] = useState(data);

  return (
    <>

      {/* Bungkus App dengan Theme Styled Component */}

      <ThemeProvider theme={theme}>
        {/*
          * Setiap halaman dibungkus olah Layout.
          * Layout digunakan oleh setiap halaman yang dirender.
          */}
        <Layout>
          {/* Menggunakan Global Style Component */}
          <GlobalStyle />
          
          <Routes>
            <Route path="/" element={<Home movies={movies} setMovies={setMovies} />}></Route>
            <Route path="/movie/create" element={<CreateMovie movies={movies} setMovies={setMovies} />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlaying />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
            <Route path="movie/:.id" element={<Detail/>} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
