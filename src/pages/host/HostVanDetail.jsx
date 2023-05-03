import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState("");

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then(({ vans }) => {
        console.log(vans);
        setVan(vans);
      });
  }, [id]);

  return (
    <div>
      <Link to="/host/vans"> {`<--`} Back to all vans</Link>
      {van ? (
        <div to={van.id}>
          <h1>{van.name}</h1>
          <img src={van.imgUrl} alt="" />
          <h2>{van.type}</h2>
          <p>{van.price}$</p>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default HostVanDetail;
