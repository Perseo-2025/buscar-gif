import { getImagen } from "../base-pruebas/11-async-await";


describe('Pruebas en 11-async-await.test.js', () => {
    test('getImagen debe de retornar un error si no tenemos en api key', async() => {
        const rsp = await getImagen();
        
        expect(rsp).toBe('No se encontro la imagen')
    })
})