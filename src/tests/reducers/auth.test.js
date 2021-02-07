import authReducer from '../../reducers/auth';


test('should create a default auth useReducer', ()=>{
    const state = authReducer(undefined,{ type: '@@INIT'});
    expect(state).toEqual({});
});

test('should create a default auth useReducer', ()=>{
    const uid = 43242;
    const action = {
        type:'LOGIN',
        uid
    };
    const state = authReducer(undefined,action);
    expect(state.uid).toBe(uid);
});

test('should set a logout object', ()=>{
    const action = {
        type:'LOGOUT'
    };
    const state = authReducer(undefined,action);
    expect(state).toEqual({});
});