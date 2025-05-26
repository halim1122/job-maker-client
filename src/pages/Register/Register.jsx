import Lottie from 'lottie-react';
import registerLogo from '../../assets/Animation - 1748276785447.json'
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Link } from 'react-router';
import SocialLogin from '../Social/SocialLogin';

const Register = () => {

  const { createUser, setUser } = use(AuthContext);

  const handelRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        console.log(error.mesage);
      })

  }

  // console.log(name)

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={registerLogo} loop={true} style={{ width: '200px', opacity: '0.5', marginLeft: '50px' }}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handelRegister} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
              <p className='font-medium mt-3 text-center'>Already hane an account. <Link className='text-blue-700' to='/signIn'>SignIn</Link></p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;