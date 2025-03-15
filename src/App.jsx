import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Cal from "./components/Cal";
import ReactMemo from "./components/ReactMemo";
import Memo from "./components/Memo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipePage from "./components/RecipePage";
import MovieViewsRealtime from "./components/MovieViewsRealtime";

function App() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setViews((prevViews) => {
        if (prevViews === 0) return 10;
        if (prevViews === 10) return 25;
        return prevViews;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        {/* <Cal /> */}
        {/* <ReactMemo /> */}
        {/* <Memo /> */}

        {/* <div>
          <MovieViewsRealtime
            views={views}
            title="Forrest Gump"
            releaseDate="June 23, 1994"
          />
        </div> */}

        {/* Chỉnh sửa lại theo tailwind */}
        <Header />
        <RecipePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
