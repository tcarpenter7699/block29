export default function SinglePlayer({ data }) {
    return (
      <>
        <h3>
          ID:
          {data.id}
        </h3>
        <div className="image-container">
          <img src={data.imageUrl} alt={data.name} />
        </div>
        <h3 className="name">{data.name}</h3>
        <h3>Breed: {data.breed}</h3>
        <h3>Status: {data.status}</h3>
        <h3>Team ID: {data.teamId}</h3>
      </>
    );
  }