import SignupForm from "../SignupForm";
import LoginForm from "../LoginForm";
import './Home.css'

const Home = () => {
  return (
    <div className='HomeFormsCont'>
      <LoginForm />
      <SignupForm />
    </div>
  );
};

export default Home;
