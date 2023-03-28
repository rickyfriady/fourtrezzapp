import Logo from '../../assets/logoipsum.svg';

export function Navbar() {
  return (
    <div className="bg-white shadow flex justify-center w-full h-[69px]">
      <div className="bg-red-400 mx-[168px] my-[5px] w-full">
        <nav className="font-sanspro flex flex-col text-center sm:flex-row sm:text-left sm:justify-between h-full items-center bg-white w-full">
          <div className="mb-2 sm:mb-0">
            <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="/one" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
              <span className="font-sanspro text-left font-semibold text-base text-[#696969]">Home</span>
            </a>
            <a href="/two" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
              <button className=" rounded-[28px] px-6 py-[10px] bg-gradient-to-b from-blue-500 to-purple-300 font-semibold text-sm text-white overflow-hidden">Sign In</button>
            </a>
            <a href="/three" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
              <button className=" rounded-[28px] px-6 py-[10px] border-2 border-blue-300 font-semibold text-sm text-blue-300 overflow-hidden">Sign Up</button>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
