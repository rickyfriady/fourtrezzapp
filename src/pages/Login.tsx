import { FaQuoteLeft } from 'react-icons/fa';
import avatarDum from '../assets/avatar-dum.png';

const Login = () => {
  return (
    <div className="h-screen flex">
      <div className=" w-[60%] bg-slate-400">section 1</div>
      <div className="w-[40%] bg-[#F8F8FF] flex items-center justify-center px-14">
        <div className="flex flex-col gap-3 justify-center ">
          <span>
            <FaQuoteLeft className="w-12 h-12 text-blue-400" />
          </span>
          <p className="font-sanspro font-normal text-lg text-[#857878]">Discover new experience with sharing anything your knowledge and achieve your goals with strong mind with us !</p>
          <h1 className="font-sanspro font-bold text-4xl text-[#333333] leading-[51px] tracking-tighter">Join many other users to share knowledge</h1>
          <div className="avatar-group -space-x-6 justify-center">
            <div className="avatar border-[#93A2F1]">
              <div className="w-20">
                <img src={avatarDum} />
              </div>
            </div>
            <div className="avatar border-[#93A2F1]">
              <div className="w-20">
                <img src={avatarDum} />
              </div>
            </div>
            <div className="avatar border-[#93A2F1]">
              <div className="w-20">
                <img src={avatarDum} />
              </div>
            </div>
            <div className="avatar border-[#93A2F1]">
              <div className="w-20">
                <img src={avatarDum} />
              </div>
            </div>
            <div className="avatar border-[#93A2F1]">
              <div className="w-20">
                <img src={avatarDum} />
              </div>
            </div>
            <div className="avatar border-[#93A2F1]">
              <div className="w-20">
                <img src={avatarDum} />
              </div>
            </div>
            <div className="avatar border-[#93A2F1]">
              <div className="w-20">
                <img src={avatarDum} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
