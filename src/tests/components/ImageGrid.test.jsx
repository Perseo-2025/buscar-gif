import { render,jest } from "@testing-library/react"
import ImageGrid from "../../components/ImageGrid"
import useFetchImage from "../../hooks/useFetchImage"

jest.mock('../../hooks/useFetchImage', () => ({
    __esModule: true,
    useFetchImage: jest.fn()
  }));
  

describe('Pruebas en el componente <ImageGrid />', () =>{
    
    const category = 'rose'

    test('debe de mostrar el loadnig inicialmente', () => {
        
        useFetchImage.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<ImageGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('deben de mostrar items cuando se carga las imagenes mediante useFetchImage', () => {
        //render(<ImageGrid category={category} />)
        const gifs = [
            { // inventamos una estructura
                id: '1',
                tags: 'rose - ros',
                url: 'https://example.com/image.jpg'
            },
            { // inventamos una estructura
                id: '1',
                tags: 'rose - ros',
                url: 'https://example.com/image.jpg'
            }
        ]

        useFetchImage.mockReturnValue({
            images: [],
            isLoading: false
        })

        render(<ImageGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(2)


    })
})