


const getImagen = async()=>{

  const apiKey = 'kEgFCR8ISTIUvQwbdleBFhCjqOYLaYIW';
  const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const {data}= await resp.json();
  console.log(data);

  const {url,}= data.images.orginal;
  console.log(url);
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
};
getImagen();

// peticion
//   .then((resp) => {
//     return resp.json();})
//   .then(({ data , meta})=>{
//     console.log(meta);
//     console.log(data);
//     // console.log(data.images.original.url);
//     const {url}= data.images.original;
//     // const url=data.images.original.url;
//     const img=document.createElement('img');
//     img.src=url;

//     document.body.append(img);
//   }).catch(console.warn);
