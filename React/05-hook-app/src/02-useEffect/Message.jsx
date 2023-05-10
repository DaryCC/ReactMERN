import React,{useEffect,useState} from 'react'

export const Message = (props) => {

  const [coord, setCoord] = useState({x:0,y:0});



  useEffect(() => {

    const onMouseMove = ({x,y}) => {

      const position ={x,y};
      // console.log(position);
      setCoord(position);

    };

    window.addEventListener('mousemove', onMouseMove);

    return()=>{

      window.removeEventListener('mousemove',onMouseMove);
    }

  },[]);



  return (
    <>

    <h3>
      Usuario ya existe
    </h3>
    {JSON.stringify(coord)}

    </>
  )
}

