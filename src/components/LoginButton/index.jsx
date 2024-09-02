import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { Button, Box, Menu, MenuItem } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function LoginButton() {
    // Acessa o contexto diretamente para pegar `isAuth`, `handleLogout` e `user` (nome do usuário)
    const { isAuth, handleLogout, user } = useContext(AuthContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = async () => {
        handleMenuClose();
        await handleLogout(); // Executa o logout quando o botão é clicado
    };

    if (isAuth) {
        // Se o usuário estiver autenticado, mostra o nome e o menu suspenso
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button
                    color="inherit"
                    onClick={handleMenuOpen}
                    endIcon={<ArrowDropDown />}
                    sx={{ textTransform: 'none', color: 'white' }}
                >
                    {user?.name || 'Usuário'}
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    disableScrollLock // Desativa o comportamento de bloqueio de rolagem
                >
                    <MenuItem component={RouterLink} to="/perfil" onClick={handleMenuClose}>
                        Perfil
                    </MenuItem>
                    <MenuItem onClick={handleLogoutClick}>
                        Sair
                    </MenuItem>
                </Menu>
            </Box>
        );
    }

    // Se o usuário não estiver autenticado, mostra os links para criar conta e login
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
                component={RouterLink}
                to="/criar-conta"
                variant="outlined"
                color="inherit"
                sx={{ borderColor: 'white', color: 'white' }}
            >
                Criar Conta
            </Button>
            <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                color="secondary"
                sx={{ color: 'white' }}
            >
                Entrar
            </Button>
        </Box>
    );
}

export default LoginButton;
