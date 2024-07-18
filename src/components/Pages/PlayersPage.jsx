import { useSelector } from "react-redux";
import Players from "./Players";
import { Link } from "react-router-dom";

function PlayersPage() {
  const puppy = useSelector((state) => state.puppy.data.players);
  return (
    <div className="render">
      {puppy.length < 1 ? (
        <h1 className="notavail">No available puppies...</h1>
      ) : (
        puppy.map((i) => (
          <Link to={"players/" + i.id} className="links2">
            <Players key={i.id} data={i} />
          </Link>
        ))
      )}
    </div>
  );
}
export default PlayersPage;