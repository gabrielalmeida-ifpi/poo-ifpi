function main() {
    testar_unreachable_code(2);
    testar_no_implicit_any(42);
    testar_strict_null_checks(null);
}
function testar_unreachable_code(num) {
    if (num > 5) {
        return true;
    }
    else {
        return false;
    }
    return true;
}
function testar_no_implicit_any(parametro) {
    console.log(parametro);
}
function testar_strict_null_checks(valor) {
    console.log(valor.length);
}
main();
