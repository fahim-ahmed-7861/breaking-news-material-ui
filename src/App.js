import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import News from './Components/News/News';
function App() {

  const [articles,setArticle]=useState([]);

  
  useEffect(()=>{

     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=95f25ffea51643e892bb1b1c700166e7')
     .then(res =>res.json())
     .then(data =>setArticle(data.articles))

  },[])
  return (
    <div>

 <ul>

{articles.map(article => <News article={article}></News>)}

        </ul>
    </div>
  );
}

export default App;
