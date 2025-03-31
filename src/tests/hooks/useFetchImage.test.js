import { renderHook, waitFor } from "@testing-library/react"
import useFetchImage from "../../hooks/useFetchImage"

describe('Pruebas en el hook useFetchImage', () => {
    test('debe de regresar el estado inicial', () => {
    //que las imagenes sea un arreglo vacío y que el isLOading sea un bool
        //const { images, isLoading } = useFetchImage('rose')     
    
        const {result } = renderHook(() => useFetchImage('rose'))
        const {images, isLoading} = result.current
        
        expect(images.length).toBe(0) // debe retornar un arreglo
        expect(isLoading).toBeTruthy() //debe de retornar un boleano

    })
    
    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
    //que las imagenes sea un arreglo vacío y que el isLOading sea un bool
        //const { images, isLoading } = useFetchImage('rose')     
    
        const {result } = renderHook(() => useFetchImage('rose'))

        await  waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current // solo sirve para recolectar el valor actual
        
        expect(images.length).toBeGreaterThan(0) // debe retornar un arreglo
        expect(isLoading).toBeFalsy() //debe de retornar un boleano

    })
})