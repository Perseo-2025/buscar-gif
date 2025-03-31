import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../../components/CounterApp"

describe('Pruebas en <CounterApp />', () => {
    
    const title = 'Rey Perseo';
    const subtitle = 'Cardenas Sanchez'

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<CounterApp title={title} />)
        expect(container).toMatchSnapshot()
    })
    test('debe de mostrar el mensaje Rey perseo', () => {
        render(<CounterApp title={title}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })
    test('debe de mostar el título en un h1', () => {
        render(<CounterApp title={title}/>)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
    })
    test('debe de mostrar el subtitulo enviado por props', () => {
        render(<CounterApp title={title} subtitle={subtitle}/>)
        expect(screen.getAllByText(subtitle).length).toBe(1)
    })

    test('debe de incrementar con el botón +1', () => {
        const initialValue = 100
        render(<CounterApp value={initialValue}/>)
        fireEvent.click( screen.getByText('+1') )
        expect(screen.getByText('101')).toBeTruthy()
    })
    test('debe de decrementar con el botón -1', () => {
        const initialValue = 100
        render(<CounterApp value={initialValue}/>)
        fireEvent.click( screen.getByText('-1') )
        expect(screen.getByText('99')).toBeTruthy()
    })
    
    test('debe de funcionar el botón de reset', () => {
        const initialValue = 100
        render(<CounterApp value={initialValue}/>)
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+Reset') )

        fireEvent.click(('button', {name: 'btn-reset'} ))
        
        expect(screen.getByText(initialValue)).toBeTruthy()

    })
})