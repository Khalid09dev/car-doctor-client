import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then((result) => {
            console.log(result.user)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-slate-100 py-10 flex gap-16 justify-center">
            <img src="https://i.postimg.cc/kG2CGq4Q/login.png" alt="userLogin" />
            <div className="bg-white rounded-lg">
            <form onSubmit={handleLogin} className="px-16 pt-16 pb-0">
                <h3 className="text-[#444] pb-5 text-center text-[40px] font-semibold">Login</h3>
                <label htmlFor="" className="text-[#444] text-[16px] font-semibold">Email</label> <br />
                <input type="email" name="email" id="" className="bg-white py-2.5 placeholder:text-[14px] font-normal pr-[110px] mb-4 border-[1px] rounded-lg pl-6" placeholder="Your Email"/> <br />
                <label htmlFor="" className="text-[#444] text-[16px] font-semibold">Confirm Password</label> <br />
                <input type="password" name="password" id="" className="bg-white py-2.5 placeholder:text-[14px] font-normal pr-[110px] mb-4 border-[1px] rounded-lg pl-6" placeholder="Your Password"/> <br />
                <button className="text-center text-white py-3 rounded-lg w-full bg-[#FF3811] font-semibold">Sign In</button>
            </form>
            <p className="text-[#444] text-center py-4 text-base font-medium">Or Sign In with</p>
                <div className="flex justify-center gap-3 items-center"> 
                    <img src="https://i.postimg.cc/8cBpfWrh/bx-bxl-facebook.png" alt="facebook" className="bg-[#F5F5F8] p-1 rounded-full"/>
                    <img src="https://i.postimg.cc/KYMygL6R/bx-bxl-linkedin.png" alt="linkedin" className="bg-[#F5F5F8] p-2 rounded-full"/>
                    <img src="https://i.postimg.cc/HW3FnBr6/google-1.png" alt="google" className="bg-[#F5F5F8] p-2.5 rounded-full"/>
                </div>
                <p className="text-base font-normal text-center pb-16 pt-7 text-[#737373]">New to Car Doctor? <Link to="/signup" className="text-[#FF3811]">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;