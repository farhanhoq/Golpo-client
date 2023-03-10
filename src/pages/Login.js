import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;

        signIn(email, pass)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero mb-20">
            <Helmet>
                <title>Golpo | Login</title>
            </Helmet>
            <div className="hero-content grid grid-cols md:grid-cols-2 gap-20">

                <div className="text-center lg:text-left">
                    <img src='' alt="" className="w-3/4"/>
                </div>

                <div className="card flex-shrink-0 w-full mx-auto py-5 max-w-sm shadow-2xl bg-base-100">

                    <h1 className="text-5xl font-bold text-center">Login</h1>

                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">
                                Forgot password?
                                </Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary"/>
                        </div>
                    </form>

                    <p className="text-center text-sm">New to CAR DOCTOR? <Link to='/register' className="font-bold">Sign Up</Link></p>

                    <div>
                        <p className='text-center'><small>Social Login</small></p>
                        <p className='text-center'>
                            <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
