import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
// import HostVanDetailLayout from "../../components/HostVanDetailLayout";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);
  // console.log(currentVan);
  if (!currentVan) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        {/*Your changes will go here*/}
        {/* <HostVanDetailLayout/> */}
        <nav className="host-nav">
          <NavLink
            end
            style={({ isActive }) => (isActive ? activeLink : null)}
            to="."
          >
            Details
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeLink : null)}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeLink : null)}
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={currentVan} />
      </div>
    </section>
  );
}
