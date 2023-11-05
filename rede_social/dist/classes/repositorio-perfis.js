var RepositorioDePerfis = /** @class */ (function () {
    function RepositorioDePerfis(perfis) {
        this._perfis = perfis;
    }
    RepositorioDePerfis.prototype.incluir = function (perfil) {
        this._perfis.push(perfil);
    };
    RepositorioDePerfis.prototype.consultar = function (id, user, email) {
        if (id === void 0) { id = 0; }
        if (user === void 0) { user = ""; }
        if (email === void 0) { email = ""; }
        var perfilEncontrado = this._perfis.find(function (perfil) {
            return (id != 0 && perfil.id == id) ||
                (user != "" && perfil.user == user) ||
                (email != "" && perfil.email == email);
        });
        return perfilEncontrado || null;
    };
    Object.defineProperty(RepositorioDePerfis.prototype, "perfis", {
        get: function () {
            return this._perfis;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorioDePerfis;
}());
export { RepositorioDePerfis };
