import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState("");
  useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => {
        return response.json();
      })
      .then(({ vans }) => {
        setVans(vans);
      });
  }, []);

  const vansList = vans ? (
    vans.map((van, index) => {
      return (
        <li key={index}>
          <Link to={van.id}>{van.name}</Link>
        </li>
      );
    })
  ) : (
    <div>loading</div>
  );

  return (
    <div>
      <h2>Your listed vans</h2>
      <ul>{vansList}</ul>
    </div>
  );
};

export default HostVans;
