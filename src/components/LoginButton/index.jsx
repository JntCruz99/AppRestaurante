import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext'; 

function LoginButton() {
    // Acessa o contexto diretamente para pegar `isAuth` e `handleLogout`
    const { isAuth, handleLogout } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleLogout(); // Executa o logout quando o botão é clicado
    };

    if (isAuth) {
        // Se o usuário estiver autenticado, mostra o botão de sair
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Sair</button>
                </form>
            </div>
        );
    }
    
    // Se o usuário não estiver autenticado, mostra os links para criar conta e login
    return (
        <div>
            <a href="/criar-conta">Criar Conta</a> 
            <a href="/login">Entrar</a> 
        </div>
    );
}

export default LoginButton;
