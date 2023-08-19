import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import{Route, Routes, useNavigate} from "react-router-dom";
import About from "./components/About.jsx"; 
import Detail from "./components/Detail.jsx"; 
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites";



function App() {
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([])
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPassword';
   const [access, setAccess] = useState(false);

   async function login(userData) {
      try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const response = await axios.get(URL, { params: { email, password } });
        const { access } = response.data;
        setAccess(access);
        if (access) {
          navigate('/home');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }


   async function onSearch(id) {
      try {
        if (id < 826) {
          const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
          const data = response.data;
          if (data.name) {
            setCharacters((characters) => [...characters, data]);
          }
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      } catch (error) {
        console.error('Error searching character:', error);
      }
    }

   const onClose = (id) => {
      const filtchar = characters.filter((characters) => parseInt(characters.id) !== parseInt(id))
      setCharacters(filtchar)
    }
    useEffect(() => {
      !access && navigate('/');
    }, [access]);
   
   return (
      <div className='App'>
        
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/" element={<Form login={login}/>} />
            <Route path="/favorites" element={<Favorites characters={characters}/>} />
         </Routes>
         
      </div>
   );
}


export default App;