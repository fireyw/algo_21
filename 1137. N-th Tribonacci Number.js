var tribonacciP = function (n) {
    if (mem[n] !== undefined) return mem[n];
    return mem[n] = tribonacciP(n - 1) + tribonacciP(n - 2) + tribonacciP(n - 3);
}; //Performance Optimisation

const mem = {
    0: 0,
    1: 1,
    2: 1
};


//Space Optimisation
var tribonacciS = (n) => {
    if (n < 3)
        return n== 0 ? 0 : 1

    let tmp, x=0, y=1, z=1;
    for(let i=3; i<=n ; i++){
        tmp=x+y+z;
        x=y;
        y=z;
        z=tmp;
    }

    return z;
}
console.log(tribonacciS(25));
