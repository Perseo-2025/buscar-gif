import { render,fireEvent,screen } from "@testing-library/react"
import GifExpertApp from "../views/GifExpertApp"

describe('Pruebas en GifExpertApp.test.jsx', () => {
    test('debe incluir la categoria', () => {
        
        //Un input para ingresar la categoría.
        // Un formulario que, al enviarse, llama a agregarNuevaCategoria.
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: 'tulipanes'}})
        fireEvent.submit(form)



        expect(screen.getByText('tulipanes')).toBeTruthy()


    })
})