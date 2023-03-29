import {useFetch,useCounter,useForm} from '../hooks';
import { LoadingQuote } from './LoadingQuote';
import {Quote} from './Quote';
// import { useFetch } from '../hooks/useFetch';
// import {useCounter} from '../hooks/useCounter';

export const MultipleCustomHooks = () => {
  const init=0;
  const { increment,reset, counter } = useCounter(init);


  if (counter===29)
    reset(0);


  const { data, isLoading, hasError } = useFetch('https://dummyjson.com/quotes');

  // const {quote,author} = false;
  // console.log(data[0].quote+' '+isLoading+' '+hasError);
  // console.log(data.quotes[0]+'hahhahh');
  // console.log(JSON.stringify(data));

  const {quote,author}= !!data && data[counter];



  // if(!isLoading){
  //   console.log(data);
  //   const { quote, author} = data.quotes[0];
  //   console.log(quote, author);
  // }


  // if (isLoading){

  //   return(
  //     <h1>Cargando...</h1>
  //   )
  // }


  return (
    <>
      <h1>Quotes</h1>
      <hr/>
    { isLoading ?
      <LoadingQuote isLoading={isLoading}/>
        :
      <Quote quote={quote} author={author}/>
   }
      <button
        className="btn btn-primary"
        onClick={()=>increment(1)}
        disabled={isLoading}>
        Siguiente frase
      </button>
    </>
  )
}

