import { login } from "./login"

describe('Cliente irá fazer o login utilizando o email e senha', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas ao usuário', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Olá! Seja muito bem vindo :)')
    })
})