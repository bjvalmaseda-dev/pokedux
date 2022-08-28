import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/searchSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <Input.Search
      placeholder="buscar..."
      style={{ marginBottom: 10 }}
      onChange={handleOnChange}
    />
  );
};

export default Searcher;
