import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

interface Props {
    
}

const Home = (props: Props) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/msviewer'>Manuscript Viewer</Link>
    </div>
    )
}

export default Home

