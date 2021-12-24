//고차함수(매개변수로 함수를 받는다)
//foreach: for 대체
function forEachF(predicate, thisArg) {
    for (let i = 0; i < a.length; i++) {
        predicate(a[i], i);
    }
}

//map: 새로운 형태의 배열 생성, 원본과 동일할 길이의 배열을 만들어 if 조건걸면 안됨
function mapF(predicate, thisArg) {
    let list = [];
    for (let i = 0; i < a.length; i++) {
        list.push(predicate(a[i], i));
    }
}

//filter: 조건에 맞는 리스트만 추출(return이 true), 새로운값 생성은 아님
function filterF(predicate, thisArg) {
    let list = [];
    for (let i = 0; i < a.length; i++) {
        if (predicate(a[i], i)) list.push(a[i]);
    }
}

//reduce 누산기: 값을 생성해서 리턴
function reduceF(predicate, val) {  //val 초기값
    let result = val;
    for (let i = 0; i < a.length; i++) {
        result = predicate(result, a[i]); //이부분이 엄청 중요
    }
    return result;
}

let sum = 0
a = [10, 11, 12, 13, 14, 15];
a.forEach(function (v, i) {
    console.log(v, i, this)
}, [1, 2]);

let answer = a.map((v, i) => v * v);
console.log('map:', answer);

answer = a.filter((v, i) => v % 2 == 0);
console.log('filter:', answer);

answer = a.reduce(function (acc, v) {
    return acc + v;
}, 0);
console.log('reduce:', answer);
