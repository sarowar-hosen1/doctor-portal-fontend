import React, { useContext, useRef, useState } from 'react';
import login from '../../../images/login.png';
import './Login.css';
import { useForm } from 'react-hook-form';
import { Auth } from './Auth';
import { UserContext } from '../../../App';

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const auth = Auth();
    const [returnUser, setReturnUser] = useState(true);

    const { register, handleSubmit,watch, errors } = useForm();
    const password = useRef({})
    password.current = watch("password", "");
    const onSubmit = data => {
        if (!returnUser) {
            if (data.email && data.password && data.name) {
                auth.signUp(data.email, data.password, data.name)
            }
        }else {
            if (data.email && data.password) {
                auth.signIn(data.email, data.password)
            }
        }
    };

    return (
        <div className='login'>
            <div className="row m-0">
                <div className="col-md-5 col-sm-12 d-flex flex-column align-items-center justify-content-center">
                    <div className="login-form">
                        <h5 className='text-center text-brand mb-4'>{returnUser ? "LOGIN" : "SIGN UP"}</h5>

                        {
                            returnUser ?
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <input name="email" type='email' className="form-control" placeholder="Email *" ref={register({ required: true})} />
                                        {errors.email && <span>Email is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input name="password" type="password" className="form-control" placeholder="Password *" ref={register({ required: true, patern: /^[a-zA-Z]$/ })} />
                                        {errors.password && <span>Password one number and one special character must</span>}
                                    </div>
                                    <input type="submit" className="btn btn-brand text-white w-100" value="SIGN IN" />
                                </form>

                                :

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <input name="name" className="form-control" placeholder="Name *" ref={register({ required: true})} />
                                        {errors.name && <span>Name is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input name="email" type="email" className="form-control" placeholder="Email *" ref={register({ required: true, patern: /\S+@\S+\.\S+/ })} />
                                        {errors.email && <span>Email is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input name="password"  type="password" className="form-control" placeholder="Password *" 
                                        ref={register({ 
                                            required: true, 
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 number & special characters"
                                              }
                                            })} 
                                        />
                                        {errors.password && <span>{errors.password.message}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input name="confirm_password" type="password" className="form-control" placeholder="Confirm Password *" 
                                        ref={register({ 
                                            required: true, 
                                            patern: /^[a-zA-Z]$/,
                                            validate: value => value === password.current || "The Password do not match"
                                            })} 
                                        />
                                        {errors.confirm_password && <span>{errors.confirm_password.message}</span>}
                                        <label id ='passwordMessage'></label>
                                    </div>
                                    <input type="submit" className="btn btn-brand text-white w-100" value="SIGN IN" />
                                </form>
                        }

                        
                        <p onClick={() => setReturnUser(!returnUser)} style={{ cursor: 'pointer' }} className='text-primary mt-3 text-center'>
                            {returnUser ? "You haven't an account?" : "Already have an account?"}
                        </p>
                    </div>
                    <p className='text-danger'>{loggedInUser.error}</p>
                </div>

                <div className="col-md-7 col-sm-none">
                    <div className="login-img">
                        <img className='ml-auto mr-4' src={login} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;