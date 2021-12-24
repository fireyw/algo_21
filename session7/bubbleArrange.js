//버블정렬
//한바퀴돌때마다 가장 큰 값이 끝으로 위치하게 해줌

function bubbleArrange(arr){
    for(let i=0; i<arr.length-1;i++){
        for(let j=0; j<arr.length-i-1; j++){ //j조건이 정렬의 포인트
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
            }
        }
    }

    return arr
}
let array=[13,5,11,7,23,15]
console.log(bubbleArrange(array));
