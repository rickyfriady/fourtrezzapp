import Layout from './components/layout/Layout';
import { Home } from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <div className="hidden">
        <Layout>
          <Home />
        </Layout>
      </div>
      <Login />
    </div>
  );
}

export default App;
