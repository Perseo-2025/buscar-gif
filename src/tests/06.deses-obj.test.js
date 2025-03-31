import { usContext } from "../base-pruebas/06-deses-obj"

describe('06.deses-obj.test.js', () => {
    

    
    test('deve retornar un objeto', () => {
        const clave = 'El Rey'
        const edad = 21

        const testValidate = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const useContext = usContext({clave,edad})

        expect(useContext).toEqual(testValidate)
    })
})