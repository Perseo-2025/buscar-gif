import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman', // Asegúrate de que el nombre sea el correcto
                    owner: 'DC'
                });

                done(); // Llamar a done() al finalizar
            })
            .catch(err => done(err)); // Si hay error, lo capturamos
    });

    test('getHeroeByIdAsync debe de obtener un error si el héroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done()
            })
            .catch(e => {
                expect(e).toBe('No se pudo encontrar el héroe con el id ' + id);
                done(); // Llamar a done() al finalizar
            });
    });
});
