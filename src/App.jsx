import {Routes, Route} from "react-router-dom";
import Main from "./components/main/Main";
import Search from "./components/search/Search";
import Channel from "./components/channel/Channel";
import NavbarHeader from "./components/navbar/NavbarHeader";
import VideoInfo from "./components/videos-info/VideoInfo";

const App = () => {
  return (
    <div className="App">
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/channel/:id" element={<Channel />}></Route>
        <Route path="/video/:id" element={<VideoInfo />}></Route>
        <Route path="/search/:id" element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;