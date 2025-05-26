import Lottie from 'lottie-react';
import registerLogo from '../../assets/Animation - 1748276785447.json'

const Register = () => {
     return (
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie animationData={registerLogo} loop={true} style={{width:'200px', marginLeft:'50px'}}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Register now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
     );
};

export default Register;