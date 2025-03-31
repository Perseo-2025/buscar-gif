import { retornaArreglo } from "../base-pruebas/07-deses-arr"



describe('Test Pruebas 07 desestructuracion de arreglo',() => {
    test('Debesria traer un arreglo', () => {

        const [letters, numbers] = retornaArreglo()


        expect(letters).toBe('ABC') //lettrer = 'ABC'
        expect(numbers).toBe(123) //numbers = 123

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        expect(letters).toEqual(expect.any(String))

    })
})