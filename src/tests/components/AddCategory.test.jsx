import { render, fireEvent, screen, jest } from "@testing-library/react"
import AddCategory from "../../components/AddCategory"


describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        
        // se crea el sujeto de pruebas
        render( <AddCategory agregarNuevaCategoria={() => {} } /> )
        
        // ontenemos el valor
        const input = screen.getByRole('textbox')
        
        // disparamos el envento
        fireEvent.input( input, {target: {value: 'rose'}} )

        screen.debug() 

    })

    test('debe de llamar agregarCategoria si el input tiene un valor', () => {
        const inputValue = 'Flowerss'
        const agregarCategoria   = jest.fn() // simulacion de la funcion

        //TODO
        render( <AddCategory agregarNuevaCategoria={agregarCategoria } /> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, {target: {value: inputValue}} )
        fireEvent.submit( form )

        expect( input.value ).toBe('')

        expect( agregarCategoria ).toHaveBeenCalled()
        expect( agregarCategoria ).toHaveBeenCalledTimes(1)
        expect( agregarCategoria ).toHaveBeenCalledWith(inputValue )

    })

    test('no debe de llamar el agregarCategoria si el input está vacio', () => {
        
        const agregarCategoria   = jest.fn() //fn no lo lee como una funcion 
        render( <AddCategory agregarNuevaCategoria={agregarCategoria } /> )

        const form = screen.getByRole('form')
        fireEvent.submit( form )

        expect( agregarCategoria ).toHaveBeenCalledTimes(0)

    })


})