function printPairs(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1; j<array.length; j++){
            console.log(array[i],array[j]);
        }
    }
}

let array = [1,2,3,4,5,6,7,8,9,10]
printPairs(array)
