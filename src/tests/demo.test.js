
describe('Pruebas en CounterApp', () => {

    test('Esta prueba no deberia fallar', ()=>{
    
       //1. Inicializacion
        const message1 = 'Hola mundo';
    
       // 2. Estimulo
        const message2 = message1.trim();
    
       // 3. Observar el comportamiento
        expect(message1).toBe(message2);
    
        expect(message1).toEqual(message2);
    
    })
})


