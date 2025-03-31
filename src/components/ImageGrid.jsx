
import ImageItem from "./ImageItem";
import useFetchImage from "../hooks/useFetchImage";
import PropTypes from "prop-types";


export default function ImageGrid({cate}) {
    
  const {images, isLoading} = useFetchImage(cate); //custom hooks

  console.log({images, isLoading});
  
  if(isLoading) return <h1 className="text-white">Cargando...</h1>
  

  return (
    <>
      <div >
      <h3 className="text-2xl uppercase">{cate}</h3>
       {/* <h5>{counter}</h5> */}
       <ol>
        <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">{
          images.map((image) => (
            <ImageItem key={image.id} {...image} />
          ))
        }
        </li>
       </ol>
      </div>
    </>
  );
}

//siempre para hacer pruebas de test con jest utilizar los proptypes
//para poder validar los props que se le pasan a la componente
ImageGrid.propType = {
  category: PropTypes.string.isRequired,
}