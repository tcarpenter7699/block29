import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PlayersPage from "./components/Pages/PlayersPage";
import { useGetPlayersQuery } from "./api";
import SinglePlayerPage from "./components/Pages/SinglePlayerPage";
import AddPlayer from "./components/Pages/AddPlayer";

function App() {
  const { isLoading } = useGetPlayersQuery();
  return (
    <>
      <Nav />
      {isLoading ? (
        <h1 className="load">Loading...</h1>
      ) : (
        <Routes>
          <Route index element={<PlayersPage />} />
          <Route path="/players/:id" element={<SinglePlayerPage />} />
          <Route path="/add-player" element={<AddPlayer />} />
        </Routes>
      )}
    </>
  );
}

export default App;