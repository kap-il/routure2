import React, {useEffect} from 'react'
import '../App.css'
import anime from 'animejs'
import { Link } from "react-router-dom"

export default function Open() {  

    useEffect (()=> {
        anime({
         targets: ['.title', '.subtitle'],
         opacity: [0,1],
         easing: 'easeInOutExpo',
         duration: 3000,
         delay: anime.stagger(100)   
        });
    }, []);

    function issuesHandler() {

    }

  return (
    <div className="open"> 
        <pre className="title">R  O  U  T  U  R  E</pre>
        <ul className="subtitle">
            <li>
                <Link to="/issues" className='link-item'>
                 I S S U E S
            </Link>
            </li>
            
            <li>
                <Link to="/merch" className='link-item'>
                M E R C H A N D I S E
            </Link>
            </li>
            
            <li>
                <Link to="/social" className='link-item'>
                S O C I A L S
                </Link>
            </li>
            
        </ul>
    </div>
  );
}
