import { render } from "@testing-library/react"
import ImageItem from "../../components/ImageItem"

describe('Pruebas en el componente ImageItem', () => {
    const id = 1
    const tags = 'rose'
    const url = 'https://example.com/image.jpg'
    test('debe de hacer match con el snatshop', () => {
        
        const {container} = render(<ImageItem tags={tags} id={id} url={url} />)
        expect(container).toMatchSnapshot()


    })

    test('debe de mostrar la imagen con la url y el alt', () => {
        const { getByAltText } = render(<ImageItem tags={tags} id={id} url={url} />)
        const image = getByAltText(tags)
        expect(image.src).toBe(url)
        expect(image.alt).toBe(tags)
    })

    test('debe de mostrar el titulo en el componente', () => {
        const { getByText } = render(<ImageItem tags={tags} id={id} url={url} />)
        const title = getByText(tags)
        expect(title).toBeTruthy()
    })
})