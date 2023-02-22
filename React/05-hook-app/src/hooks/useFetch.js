import { useEffect,useState } from 'react';


export const useFetch = (url) => {

  let seed = Math.floor((Math.random() * 100));

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    seed:0,
  });



  const getFetch = async ()=>{


    // setState({
    //   ...state,
    //   isLoading:true,
    // });

    const resp = await fetch(url);
    const data = await resp.json();

    // console.log(data);
    setState({
      data,
      isLoading:false,
      hasError:null,
      seed:seed,
    });
  }

  useEffect(()=>{
    getFetch();
  },[url]);


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    seed:state.seed,
  };

}
