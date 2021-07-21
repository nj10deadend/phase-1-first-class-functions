function receivesAFunction(callback) {
    // return function () {
    //     console.log(`This is a ${callback} function`)
    callback();
    return 0;
}
function returnsANamedFunction() {
    const fn = () => {};
    return fn;
}
// function returnsAnAnonymousFunction() {
//     return () => {};
// }
function returnsAnAnonymousFunction() {
    return function(){
        
    };
}