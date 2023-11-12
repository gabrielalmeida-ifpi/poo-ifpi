var Perfil = /** @class */ (function () {
    function Perfil(id, user, email, postagens) {
        this._id = id;
        this._user = user;
        this._email = email;
        this._postagens = postagens;
    }
    Object.defineProperty(Perfil.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "postagens", {
        get: function () {
            return this._postagens;
        },
        enumerable: false,
        configurable: true
    });
    return Perfil;
}());
export { Perfil };
