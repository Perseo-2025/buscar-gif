import { getSaludo } from "../base-pruebas/02-template-string";

describe('Pruebas en 02.template.string',() => {

    test('Debe de retornar el nombre', () => {

        const name = 'Rey';
        const message = getSaludo(name);

        expect(message).toBe('Hola' + name) // loque se espera
    })

})