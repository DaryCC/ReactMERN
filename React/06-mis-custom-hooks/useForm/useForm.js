import {useState} from 'react'

export const useForm = ( initialForm={} ) => {

  const [formState, setFormState] = useState(initialForm);


  const onInputChange = ({ target }) => {

    const { name, value } = target;
    // console.log({ name,value});
    // console.log(target);
    // console.log(formState);

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm =()=>{
    setFormState(initialForm);
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }

}
