const { authReducer } = require("../../reducers/authReducer");
const { types } = require("../../types/types");

describe('Pruebas en authReducer', () => {
    test('debe realizar el login', () => {
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Rolando'
            }
        }

        const state = authReducer(initState, action);

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Rolando'
        })
    });

    test('debe realizar el logout', () => {
        const initState = {};

        const action = {
            type: types.logout
        }

        const state = authReducer(initState, action);

        expect( state ).toEqual({ })
    });

    test('no debe de hacer cambios en el state', () => {
        const initState = {};

        const action = {
            type: 'ojkfbgnhhm'
        }

        const state = authReducer(initState, action);

        expect( state ).toEqual(initState)
    });    
    
})
