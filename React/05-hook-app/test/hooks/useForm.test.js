import { renderHook,act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm',()=>{

  const initialForm={
    name:'Dary',
    email:'dary.cc@gmail.com',
  };

  test('Esto debe de  retornar la información por defecto ',()=>{

    const {result}=renderHook( ()=>useForm(initialForm) );
    console.log(result);

    // const {formState,onInputChange,onResetForm}=result.current;

    expect(result.current).toEqual({
      name: 'Dary',
      email: 'dary.cc@gmail.com',
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });

  });

  test('Esto debe cambiar el nombre del formulario.', () => {

    const newValue= 'Juan';
    const { result } = renderHook(() => useForm( initialForm ));

    const { onInputChange } = result.current;

    act(()=>{
      onInputChange({target:{name:'name', value:newValue}})
    }
    );

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);


  });

  test('Esto debe resetear el formulario.', () => {

    const { result } = renderHook(() => useForm(initialForm));

    const { onResetForm, onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: 'Nadia' } });
      onResetForm();
    }
    );

    expect(result.current.formState).toBe(initialForm);
    expect(result.current.formState.name).toBe(initialForm.name);


  });
});
