
import {
  
  Route,
  
  Routes
} from "react-router-dom";


import Header from "./components/Header/Header";
import People from './pages/People/People';
import Home from './pages/Home/Home';


import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import styles from './App.module.css'
import Person from "./pages/Person/Person";

function App() {
  return (
      <div className={styles.wrapper}>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} exact></Route>
            <Route path="/people" element={<People/>} exact></Route>
            <Route path="/fail" element={<ErrorMessage/>} exact></Route>
            <Route path="/people/:id" element={<Person/>} exact></Route>
          </Routes>
      </div>
    
  );
}

export default App;
