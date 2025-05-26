import Lottie from 'lottie-react';
import SignInLogo from '../../assets/Animation - 1748286893732.json'
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Link } from 'react-router';

const SignIn = () => {

     const { setUser, signInUser} = use(AuthContext);

     const handelSignIn = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email, password);
          signInUser(email, password)
               .then(result => {
                    setUser(result.user);
                    console.log(result.user)
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
                         <Lottie animationData={SignInLogo} loop={true} style={{ width: '300px', opacity: '0.5', marginLeft:'50px' }}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <div className="card-body">
                              <h1 className="text-5xl font-bold">Sign-In now!</h1>
                              <form onSubmit={handelSignIn} className="fieldset">
                                   <label className="label">Email</label>
                                   <input type="email" name='email' className="input" placeholder="Email" />
                                   <label className="label">Password</label>
                                   <input type="password" name='password' className="input" placeholder="Password" />
                                   <div><a className="link link-hover">Forgot password?</a></div>
                                   <button className="btn btn-neutral mt-4">Sign-In</button>
                                   <p className='font-medium mt-3 text-center'>You don't hane an account. <Link className='text-blue-700' to='/register'>Register</Link></p>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SignIn;