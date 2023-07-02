import { Button, Typography } from "@mui/material";
import "../Styles/styles.css";
import { useNavigate } from "react-router-dom";

const LeftSide = () => {
  const navegar = useNavigate();

  const navegarContact = () => {
    navegar("/contact");
  };
  return (
    <div className="left">
      <div className="cuadrito">
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Diego Henao{" "}
        </Typography>

        <Typography variant="h4">Front-end Developer </Typography>
        <Button variant="contained" color="primary" onClick={navegarContact}>
          Contact me
        </Button>
      </div>
    </div>
  );
};

export default LeftSide;
