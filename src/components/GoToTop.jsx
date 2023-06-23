import React, { useEffect,useState } from 'react'
import {BsArrowUp} from 'react-icons/bs'

const GoToTop = () => {
    
    const [isVisiable, setIsVisiable] = useState(false)
    const goToBtn = () => {
        window.scrollTo({top: 0,left: 0,behavior: 'smooth'});
    }

    const listenToScroll = () => {
        let heightToHidden=250;
        const winScroll=document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(winScroll);
        if(winScroll > heightToHidden){
            setIsVisiable(true);
        }else{
            setIsVisiable(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',listenToScroll);
        return ()=>{
            window.removeEventListener('scroll',listenToScroll);
        }
    },[])

  return (
    <>
      {isVisiable && (
        <div
          className="w-16 h-16 bg-gradient-to-b from-secondary to-primary flex justify-center items-center rounded-full fixed bottom-20 right-4 z-40 cursor-pointer"
          onClick={goToBtn}
        >
          <BsArrowUp className="text-white text-3xl topBtn" />
        </div>
      )}
    </>
  );
}

export default GoToTop