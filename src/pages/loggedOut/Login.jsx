import { Link } from "react-router-dom";
import LoginForm from "../../components/loggedOut/LoginForm";
import logo from "../../assets/icons/logo.png";
import hero from "../../assets/images/hero.jpeg";
import classes from "../../styles/loggedOut/Login.module.css";

export default function Login() {
  return (
    <div className={classes.login}>
      <img
        className={classes.hero}
        src={hero}
        alt="a dashboard with 44 thumbnails"
      />
      <img className={classes.logo} src={logo} alt="netflix whitten in red" />
      <div className={classes.overlayer}>
        <LoginForm />
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <Link to="/LoginHelp">Need help?</Link>
        <span>
          New to Netflix? <Link to="/SignUp">Sign Up now</Link>
        </span>
      </div>
    </div>
  );
}
