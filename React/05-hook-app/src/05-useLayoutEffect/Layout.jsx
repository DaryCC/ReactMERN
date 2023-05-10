
import {useFetch,useCounter,useForm} from '../hooks';
import { LoadingQuote , Quote} from '../03-examples';


export const Layout = () => {
  const init=0;
  const { increment,reset, counter } = useCounter(init);


  if (counter===29)
    reset(0);


  const { data, isLoading, hasError } = useFetch('https://dummyjson.com/quotes');

  // const {quote,author} = false;
  const {quote,author}= !!data && data.quotes[counter];





  if (isLoading){

    return(
      <h1>Cargando...</h1>
    )
  }


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
