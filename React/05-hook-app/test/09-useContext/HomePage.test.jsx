
import { screen,render } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';


describe('test en <HomePage/>', () => {

  const usuario={
    id:1,
    name:"Dary",
  };

  test('Esto debe mostrar el componente sin el usuario ', () => {

    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage/>
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");

    // console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toBe('null');

    // screen.debug();

  });

  test('Esto debe mostrar el componente CON el usuario ', () => {

    render(
      <UserContext.Provider value={{user:usuario}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");

    // console.log(preTag.innerHTML+'jajajajajajjajj');
    expect(preTag.innerHTML).toContain(usuario.name);
    expect(preTag.innerHTML).toContain(usuario.id.toString());
    screen.debug();

  });
});
