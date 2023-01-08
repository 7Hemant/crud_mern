import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import UpdatePostAPI from "../api/UpdateApi";
const EditForm = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length > 0 && desc.length > 0) {
      console.log(title, desc);
      props?.setClose(false);
      UpdatePostAPI({ title, desc, id: props?.id });
    }

    setTitle("");
    setDesc("");
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: 16,
        padding: 16,
        borderRadius: 16,
        boxShadow: "1px 4px #eee",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        align="right"
        onClick={() => props?.setClose(false)}
      >
        x
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        id:{props?.id}
      </Typography>

      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default EditForm;
