import {login, logout} from '../../actions/auth'; 


test('should return a login object',()=>{
    const uid = '1321442';
    const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    });
});

test('should return a logout object',()=>{
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
});