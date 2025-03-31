import { useState } from "react"
import AddCategory from "../components/AddCategory"
import ImageGrid from "../components/ImageGrid"



export default function GifExpertApp() {

  const flowers = ['tulipanes']

  const [categories , setCategories] = useState(flowers)

  const agregarNuevaCategoria = (newCategori) => {

    if(categories.includes(newCategori)) return //si la categoria existe no haga nada

    setCategories([newCategori,...categories]) 
  }
  
  return (
    <div className=" bg-black  items-center text-center text-white ">

      <h1 className="text-center text-2xl font-bold md:text-6xl text-white">
        ImageExpertApp
      </h1>

      <AddCategory 
      agregarNuevaCategoria={e => agregarNuevaCategoria(e)} //<- {addCategory} es lo mismo
      /> {/* componente 1. buscar, luego filtrar */}

      <span className="text-gray-200" >presionar enter</span>
      <div>
          <li>
            {
              categories.map( (cate) => (
                  <ImageGrid key={cate} cate = {cate}/> //<-componente
              ))
            }
          </li>
        </div>

    </div>
  )
}
