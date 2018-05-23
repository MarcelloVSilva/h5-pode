export var Pode = function (usuario: any, roles: Array<string>) {
    if (usuario && roles.indexOf('qualquerUsuarioLogado') != -1) {
      return true;
    }
    if (usuario && usuario.roles) {
      let usuarioRoles = JSON.parse(usuario.roles);
      return roles.some((r: any) => {
        return usuarioRoles.some((ur: any) => ur == r);
      });
    }
    return false;
  }