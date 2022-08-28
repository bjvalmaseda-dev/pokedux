import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from "../components/StartButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const typeString = types.map((item) => item.type.name).join(", ");
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={
        <StarButton isFavorite={favorite} onClickFunction={handleOnFavorite} />
      }
    >
      <Meta description={typeString} />
    </Card>
  );
};

export default PokemonCard;
