import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import MainFlashcard from "./components/flashcard/mainFlashcard";
import MyFlashcard from "./components/flashcard/myFlashcard";
import ViewCard from "./components/flashcard/viewCard";
import { useSelector } from "react-redux";

function App() {
  const flashCardNum = useSelector((state) => state.Reducer.showNum);

  return (
    <>
      <BrowserRouter>
        <div className="bg-black">
          <Navbar />
          <div className="px-0 lg:px-40 sm:px-8">
            <Header />
            <Routes>
              <Route index path="/" element={<MainFlashcard />} />
              <Route path="myflashcard" element={<MyFlashcard />} />
              <Route path={`flashcard${flashCardNum}`} element={<ViewCard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
