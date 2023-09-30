import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    // console.log(createUser)
    const handleRegister =e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)

        // create user in firebase
        createUser(email,password)
        .then((result)=> console.log(result.user))
        .catch(error=> console.log(error))
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Register</button>
                            </div>
                        </form>
                        <p>Already an account? Please <span className="text-blue-500 underline">
                                <Link to="/login">Log In</Link>
                            </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;