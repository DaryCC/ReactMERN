import {screen,render, fireEvent} from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {

  const user={
    id:1,
    name:"Dary",
  }



  test('should de mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag=screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
    // screen.debug();
  })




  test('should de mostrar el componente sin el usuario', () => {

    const setUserMock=jest.fn();

    render(
      <UserContext.Provider value={{user:null,setUser:setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button=screen.getByRole('button');
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({ "email": "juan@google.com", "id": 123, "name": "Dary" });
    // const preTag = screen.getByLabelText('pre');
    // expect(preTag.innerHTML).toBe('null');
    screen.debug();

  })


})




