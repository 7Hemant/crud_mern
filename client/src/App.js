import ReadComponent from "./components/ReadComponent";
import FormComponent from "./components/FormComponent";
import { Typography } from "@mui/material";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Typography align="center" variant="h5">
        Mern curd Application
      </Typography>
      <FormComponent />
      <ReadComponent />
    </div>
  );
}

export default App;
