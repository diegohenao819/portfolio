import { Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

import { useNavigate } from "react-router-dom";
import "../Styles/contact.css";

const ContactMe = () => {
  const navegar = useNavigate();
  // const [message, setMessage] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const navegarHome = () => {
    navegar("/");
  };

  const navegarProject = () => {
    navegar("/project");
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // setMessage({
  //   name: e.target.name.value,
  //   email: e.target.email.value,
  //   message: e.target.message.value,
  // });
  //   console.log(message);
  //   e.target.name.value = "";
  //   e.target.email.value = "";
  //   e.target.message.value = "";
  // };

  // const handleChange = (e) => {
  //   setMessage({
  //     ...message,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(e.target.value);
  // };

  return (
    <div className="contact">
      <ArrowBackIosIcon onClick={navegarHome} className="arrow" />

      <div container className="container">
        <Typography
          variant="h2"
          color="initial"
          className="title"
          sx={{ fontWeight: "bold", fontFamily: "roboto" }}
        >
          Contact me!
        </Typography>

        <Typography color="initial" className="subtitle">
          Feel free to contact me at any time! I will get back to you as soon as
          I can!
        </Typography>

        <form
          action="https://formsubmit.co/diegohenao819@gmail.com"
          method="POST"
          className="formulario"
        >
          <TextField name="name" label="Name" variant="standard" required />
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="standard"
            required
          />
          <TextField
            name="message"
            label="Message"
            variant="standard"
            required
          />
          <Button type="submit" variant="contained" className="button">
            Send
          </Button>
        </form>
      </div>

      <div container className="contact2">
        <Typography variant="h3">Info</Typography>
        <ul>
          <li>
            <EmailIcon />
            diegohenao819@gmail.com
          </li>
          <li>
            <LinkedInIcon />
            <a href="https://www.linkedin.com/in/diegohenao1/" target="blank">
            https://www.linkedin.com/in/diegohenao1/
            </a>
          </li>
          <li>
            <LanguageIcon />
            Colombia
          </li>
        </ul>
      </div>
      <ArrowForwardIosIcon onClick={navegarProject} className="arrow" />
    </div>
  );
};

export default ContactMe;
