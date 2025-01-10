import Authorization from "./components/Authorization";
import './styles/App.css'
import { BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Profile from "./components/Profile";
import NavigationBar from "./components/NavigationBar";
import Events from "./components/Events";
import Calendar from "./components/Calendar"

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route path='/' element={<Authorization/>}/> 
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/events' element={<Events/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Navbar = () => {
  const location = useLocation();
  return location.pathname !== '/' ?<NavigationBar/>:<></>;
};

export default App;
