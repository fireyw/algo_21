//선택정렬

function selectArrange(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]> arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
let array=[13,5,11,7,23,15]
console.log(selectArrange(array));
