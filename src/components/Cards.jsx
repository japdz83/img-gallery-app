import React from "react";
import Card from "./Card";
import Loading from "./Loading";
import Form from "./Form";
import { useFetchImg } from "../hooks/useFetchImg";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImg();
  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <hr />
      {loading && <Loading />}
      <div className="row">
        {images.map((img) => {
          return (
            <div className="col-3" key={img.id}>
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
