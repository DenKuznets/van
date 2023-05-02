import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [vans, setVans] = useState("");

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then(({ vans }) => {
        console.log(vans);
        setVans(vans);
      });
  }, [id]);

  const vansList = vans ? (
    vans.map((van, index) => {
      return (
        <div key={index} to={van.id}>
          {van.name}
        </div>
      );
    })
  ) : (
    <div>loading</div>
  );

  return (< div >
    <Link to="/host/vans"> {`<--`} Back to all vans</Link>
    {vansList}
  </div >);
};

export default HostVanDetail;
