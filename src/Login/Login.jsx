import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit =e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        // log in user
        signInUser(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset()
            navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                        </form>
                        <p>Do not have an account? Please <span className="text-blue-500 underline"><Link to='/register'>Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;