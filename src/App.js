import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products';
import Nav from './Components/Nav'
import { Data } from './Data';


function App() {
  return (
    <div>
     <Nav/>
<Products Data={Data}/>
    </div>
  );
}

export default App;
