import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {

    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        const name = `${form.f_name.value} ${form.l_name.value}`;
        const photoUrl = form.d_image.value;

        createUser(email, pass)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                navigate('/login');
                handleUpdateUserProfile(name, photoUrl)
            })
            .catch(err => console.error(err))
        
        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL,
            };

            profileUpdate(profile)
                .then(() => {})
                .catch((error) => console.error(error));
            };
    }

    return (
        <div className="hero mb-20">
            <div className="hero-content grid grid-cols md:grid-cols-2 gap-20">

                <div className="text-center lg:text-left">
                    <img src='' alt="" className="w-3/4"/>
                </div>

                <div className="card flex-shrink-0 w-full mx-auto py-5 max-w-sm shadow-2xl bg-base-100">

                    <h1 className="text-5xl font-bold text-center">Register</h1>

                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input
                                type="text"
                                name="f_name"
                                placeholder="Given Name"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input
                                type="text"
                                name="l_name"
                                placeholder="Family Name"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Link</span>
                            </label>
                            <input
                                type="text"
                                name="d_image"
                                placeholder="enter the image link"
                                className="input input-bordered"
                            />
                        </div>

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
                            <input type="submit" value="Register" className="btn btn-primary"/>
                        </div>
                    </form>

                    <p className="text-center text-sm">Have an account? <Link to='/login' className="font-bold">Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;