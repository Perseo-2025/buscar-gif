import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";
import  heroes  from "../data/heroes";

describe('Tests in file 08.imp-exp.test.js', () => {
    test('should return a string', () => {
        const id = 1;
        const hero = getHeroeById(id)

        expect(hero).toEqual({id:1, name: 'Batman', owner: 'DC'});
    })

    test('should return a string', () => {
        const id = 100;
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()

    })

    // Tarea;
    // Debe de retornar un arreglo con los heroes de DC
    // length === 3
    // toEqual al arreglo filtrado

    test('getHeroesByOwner debe de regresar heroes de DC', () => {
        //test de filtrado
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(3)
        expect(heroes).toEqual([
            {id:1, name: 'Batman', owner: 'DC'},
            {id:3, name: 'Superman', owner: 'DC'},
            {id:4, name: 'Flash', owner: 'DC'},
        ])
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))

    })

})