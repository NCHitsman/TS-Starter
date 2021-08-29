import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { RootState } from "../../store";
import { User } from "../../CustomTypings";

interface Props {
  isLoaded: boolean;
  user: User | null;
}

const Navigation = ({ isLoaded, user }: Props) => {
  return (
    <div className="NavCont">
      <NavLink exact to="/">
        Home
      </NavLink>
      {isLoaded && user && <ProfileButton user={user} />}
    </div>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  Navigation
);
