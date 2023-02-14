import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser}= useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;
        createUser(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(err=> console.log(err))
    }
    return (
        <div className="hero w-full py-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row py-12">
                <div className="text-center lg:text-left pt-32">
                    <img className='w-3/4' src={login} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-12">
                    <h1 className="text-5xl text-center font-bold">Sign Up </h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an accont? <Link className='text-orange-600 font-bold ' to="/login ">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;