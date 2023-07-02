import diego from "../assets/diegoAvatar.png";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

export const RightSide = () => {
  const navegar = useNavigate();

  const navegando = () => {
    navegar("/contact");
  };

  return (
    <div className="right">
      <div>
        <img src={diego} alt="avatar" />
      </div>

      <ArrowForwardIosIcon onClick={navegando} />
    </div>
  );
};
