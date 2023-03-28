import { Footer } from './Footer';
import { Navbar } from './Navbar';

type LayoutProb = {
  children: any;
};

const Layout = ({ children }: LayoutProb) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
