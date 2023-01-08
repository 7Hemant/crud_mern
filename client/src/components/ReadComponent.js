import React, { useEffect, useState } from "react";
import ReadApi from "../api/ReadApi";
import DeleteApiFunction from "../api/Delete";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const ReadComponent = () => {
  const [list, setList] = useState([]);
  const { status, data } = ReadApi();

  useEffect(() => {
    if (status === "success") {
      setList(data?.posts);
    }
  }, [status, data]);

  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      {list?.map((item, index) => (
        <Card sx={{ maxWidth: 345, margin: 2 }} key={index}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item?.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small" onClick={() => DeleteApiFunction(item?._id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ReadComponent;
