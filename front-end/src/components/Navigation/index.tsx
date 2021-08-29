import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginForm from '../LoginForm';
import './Navigation.css';

interface Props {
    isLoaded: boolean;
  }

function Navigation({ isLoaded }: Props){
  const sessionUser: any = useSelector((state: any) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginForm />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='nav__cont'>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
