import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetPlayerQuery } from "../../api";
import { useDeletePlayerMutation } from "../../api";
import SinglePlayer from "./SinglePlayer";
import { Link } from "react-router-dom";

function SinglePlayerPage() {
  const puppyGet = useSelector((state) => state.puppy.data.players);
  const params = useParams();
  const id = params.id;
  const { isLoading, data } = useGetPlayerQuery(id);
  const [deletePlayer] = useDeletePlayerMutation();

  return (
    <div className="block-ext" key={puppyGet.id}>
      {isLoading ? (
        <h1 className="load">Loading...</h1>
      ) : (
        <>
          <SinglePlayer data={data.data.player} />
          <Link to="/" className="links2">
            <button className="delButton" onClick={() => deletePlayer(id)}>
              Delete Player
            </button>
          </Link>

          <Link to="/" className="links2">
            <button className="returnButton">Return to Puppies</button>
          </Link>
        </>
      )}
    </div>
  );
}
export default SinglePlayerPage;