export const Login = 'Login';
export const Logout = 'Logout';

export const login = () => {
    return{type: Login}
}

export const logout = ()=>{ 
    return {type : Logout}
}