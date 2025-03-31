import { useState, useEffect } from "react";
import obtenerImagenes from "../service/api";



const useFetchImage = (cate) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    const getImages = async() => {
        const newImages = await obtenerImagenes(cate)
        setImages(newImages);
        setIsLoading(false)
    }
   
   useEffect(() => {  //evitar que se ejecute cada vez que se renderiza
      getImages()
   },[]) //arreglo de dependencias vacio, solo se ejecuta una vez 

    return {
        images,
        isLoading
    }
}

export default useFetchImage