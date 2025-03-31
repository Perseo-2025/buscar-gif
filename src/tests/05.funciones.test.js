import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";

describe("Pruebas en 05.funciones.test.js", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user); //Cuando son objetos usr toEqual
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
      const nombre = "Rey"

      const testValidate = {
        uid: 'ABC567', 
        username: nombre
      }
      const user = getUsuarioActivo(nombre);

      expect(user).toEqual(testValidate);

  })
});
