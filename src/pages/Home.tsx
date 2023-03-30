import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { CardArticle } from '../components/CardArticle';
import { HeroSection } from '../components/HeroSection';

export const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="w-[1104px] mx-auto">
        <h1 className="w-fit mx-auto font-sanspro font-bold text-[36px] text-blue-400">Global Feed</h1>
        <hr className="border-4 mb-10 w-[134px] mx-auto border-blue-400" />
        <div className="grid grid-cols-2 gap-4">
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
        </div>
        <div className=" flex justify-end mt-10 gap-8">
          <button className="btn bg-transparent text-black border-0 hover:bg-blue-400">
            <FaAngleLeft />
          </button>
          <button className="btn  font-sanspro font-semibold text-lg text-white bg-blue-400 border-0 ">1</button>
          <button className="btn bg-transparent text-black border-0 hover:bg-blue-400">2</button>
          <button className="btn btn-disabled">...</button>
          <button className="btn bg-transparent text-black border-0 hover:bg-blue-400">99</button>
          <button className="btn bg-transparent text-black border-0 hover:bg-blue-400">100</button>
          <button className="btn bg-transparent text-black border-0 hover:bg-blue-400">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};
