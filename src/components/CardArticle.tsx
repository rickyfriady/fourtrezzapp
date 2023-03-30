import { FaHeart } from 'react-icons/fa';
import avatarDum from '../assets/avatar-dum.png';

export const CardArticle = () => {
  return (
    <div className="card w-[541px] border-2 border-[#E8E8E8] px-7 py-[18px] ">
      <div className="flex justify-start items-center gap-[11px] ">
        <div className="avatar">
          <div className="w-[61px] rounded-full">
            <img src={avatarDum} alt="avatar-dummy" />
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <span className="font-sanspro font-semibold text-[16px]  text-blue-400">Name of User</span>
          <span className="font-sanspro font-normal text-[16px] text-[#9c9c9c]">October 9, 2022</span>
        </div>
      </div>
      <div className="card-body w-full px-0 py-4">
        <p className="font-sanspro font-semibold text-[16px] text-[#333333]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus facere commodi harum cum temporibus.</p>
        <p className="font-sanspro font-normal text-[15px] text-[#C2C2C2C2]">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <span className="font-sanspro font-semibold text-sm text-blue-400">read more ...</span>

        <hr></hr>
        <div className="card-actions justify-between items-center mt-2">
          <div className="flex  gap-[6px] justify-center items-center w-fit">
            <button className="btn btn-outline  rounded-[1000px] border-[#818181] px-[14px] py-2">
              <span className="font-sanspro font-normal text-[14px] text-[#828282] lowercase">Est</span>
            </button>
            <button className="btn btn-outline  rounded-[1000px] border-[#818181] px-[14px] py-2">
              <span className="font-sanspro font-normal text-[14px] text-[#828282] lowercase">beatae</span>
            </button>
            <button className="btn btn-outline  rounded-[1000px] border-[#818181] px-[14px] py-2">
              <span className="font-sanspro font-normal text-[14px] text-[#828282] lowercase">fugiat</span>
            </button>
            <button className="btn btn-outline  rounded-3xl border-[#818181] px-[14px] py-2">
              <span className="font-sanspro font-normal text-[14px] text-[#828282] lowercase">sunt</span>
            </button>
          </div>

          <button className="btn btn-outline btn-info flex gap-2 justify-center items-center rounded-3xl border-2 border-blue-400 px-[14px] py-2">
            <i className='text-blue-400'>{<FaHeart />}</i>
            <span className="font-sanspro font-semibold text-[16px] text-blue-400 lowercase">42</span>
          </button>
        </div>
      </div>
    </div>
  );
};
