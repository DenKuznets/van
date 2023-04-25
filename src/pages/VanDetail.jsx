import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    fetch(`/api/vans/:id`, params.id)
      .then((response) => {
        // console.log(response);
        return response.json;
      })
      .then((data) => {
        console.log("getss", data);
      });

    return () => {
      // second
    };
  }, []);

  return <h1>Van detail page goes here</h1>;
}
