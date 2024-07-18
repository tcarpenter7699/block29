import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddPlayerMutation } from "../../api";

function AddPlayer() {
  const [form, setForm] = useState({
    name: "",
    breed: "",
    status: "bench",
    imageUrl: "",
    teamId: "43",
  });
  const navig = useNavigate();
  const [AddPlayer] = useAddPlayerMutation();

  const submit = async (event) => {
    event.preventDefault();
    await AddPlayer(form);
    navig("/");
  };

  const setChange = (event) => {
    const newData = { ...form };
    newData[event.target.name] = event.target.value;
    setForm(newData);
  };

  return (
    <div className="form-box">
      <h1>Enter a new puppy into the puppy bowl!</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name={"name"}
          value={form.name}
          onChange={setChange}
          placeholder="Enter name"
        />
        <input
          type="text"
          name={"breed"}
          value={form.breed}
          onChange={setChange}
          placeholder="Enter dog breed"
        />
        <input
          type="text"
          name={"imageUrl"}
          value={form.imageUrl}
          onChange={setChange}
          placeholder="Enter image url"
        />
        <input id={"submit-button"} type="submit" value={"Submit"} />
      </form>
    </div>
  );
}
export default AddPlayer;