import obtenerImagenes from "../../service/api";

describe('Prueba en la api de pixaby', () => {
    
    test('debe de retornar un arreglo de images', async() => {

        const img = await obtenerImagenes('flowers');
        expect(img.length).toBeGreaterThan(0)
        expect(img[0]).toEqual({
            id: expect.any(String),
            tags: expect.any(String),
            url: expect.any(String)
        })
    
    })

})