import { render } from "@testing-library/react"
import CounterApp from "../../components/CounterApp"

describe('Pruebas en <CounterApp />', () => {
    /* test('debe de hacer match con el snapshot', () => {

        const title = 'Hola soy perseo'

        const { container} = render( <CounterApp title={title}/> )

         expect(container).toMatchSnapshot() //que el componente no vaya a cambiar de manera accidental
    }) */
    test('debe de mostrar el title en un h1', () => {
        const title = 'Hola soy perseo'
        const { container, getByText, getByTestId } = render( <CounterApp title={title}/> )
        expect(getByText(title)).toBeTruthy()

        expect(getByTestId('test-title').innerHTML).toContain(title)
    })

    test('debe de mostrar el subtitle enviado por props', () => {
        const title = 'Hola soy perseo'
        const subtitle = 'Soy un subtitle'
        const { getByText } = render( 
            <CounterApp title={title} subtitle={subtitle}/> 
        )
        expect(getByText(subtitle)).toBeTruthy()

    })
})