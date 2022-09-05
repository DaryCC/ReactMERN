
export const getImagen = async() => {

    try {

      const apiKey = 'kEgFCR8ISTIUvQwbdleBFhCjqOYLaYIW';
      const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
      const { data } = await resp.json();

      const { url } = data.images.original;

      return url;
    } catch (error) {
        // manejo del error
      // console.error(error);
      return 'no se encontró la imagen';
    }

}

 // getImagen();



