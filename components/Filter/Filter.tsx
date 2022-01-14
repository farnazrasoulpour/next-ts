import { useState } from "react";
import { Input, Button } from "antd";
import React from "react";
import style from "./Filter.module.scss";

interface IProps {
  search: () => void;
  movieTitle: string;
  setMovieTitle: (val: any) => any;
}

const Filter = ({ movieTitle, setMovieTitle, search }: IProps) => {
  return (
    <div className={style.root}>
      <Input
        placeholder="Title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <Button type="primary" onClick={search}>
        Search
      </Button>
    </div>
  );
};

export default Filter;
