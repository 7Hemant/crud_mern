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
import Overlay from "../overlay/Overlay";
import EditForm from "./EditForm";

const ReadComponent = () => {
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const [id, setId] = useState();
  const { status, data } = ReadApi();

  const updatehandler = (id) => {
    setShow(true);
    setId(id);
  };
  const DeleteHandler = (id) => {
    DeleteApiFunction(id);
  };

  useEffect(() => {
    if (status === "success") {
      setList(data?.posts);
      console.log("render");
    }
  }, [status, data]);

  return (
    <>
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
              <Button
                size="small"
                onClick={() => {
                  updatehandler(item?._id);
                }}
              >
                Edit
              </Button>
              <Button size="small" onClick={() => DeleteHandler(item?._id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {show && (
        <Overlay>
          <EditForm id={id} setClose={(value) => setShow(value)} />
        </Overlay>
      )}
    </>
  );
};

export default ReadComponent;
