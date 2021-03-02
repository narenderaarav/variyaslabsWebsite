import React,{useState} from 'react'
import Navigation from '../component/navigation.component'
const Header = () =>{
  const [header, setHeader] = useState(false);
  const changeBackground = () =>{
   if(window.scrollY >= 300){
     setHeader(true)
   }else{
     setHeader(false)
   }
  };
  window.addEventListener('scroll', changeBackground)
  return(
    <header className={header ? 'header headActive': 'header'}>
    <Navigation/>
    </header>
  )
}

export default Header;