export var Pode = function (usuario, roles) {
    if (usuario && roles.indexOf('qualquerUsuarioLogado') != -1) {
        return true;
    }
    if (usuario && usuario.roles) {
        var usuarioRoles_1 = JSON.parse(usuario.roles);
        return roles.some(function (r) {
            return usuarioRoles_1.some(function (ur) { return ur == r; });
        });
    }
    return false;
};
//# sourceMappingURL=pode.function.js.map