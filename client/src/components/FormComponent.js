import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import CreatePostAPI from "../api/CreateApi";
const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length > 0 && desc.length > 0) {
      console.log(title, desc);
      const result = CreatePostAPI({ title, desc });
    }

    setTitle("");
    setDesc("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: 16,
        padding: 16,
        borderRadius: 16,
        boxShadow: "1px 4px #eee",
      }}
    >
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item sx={{ m: 2 }}>
          <TextField
            id="title-input"
            name="title"
            label="Tile"
            type="text"
            value={title}
            onChange={(e) => setTitle(e?.target?.value)}
          />
        </Grid>
        <Grid item sx={{ m: 2 }}>
          <TextField
            id="Description-input"
            name="description"
            label="Description"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e?.target?.value)}
          />
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default FormComponent;
