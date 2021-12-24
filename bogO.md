 # big-O(6장 60쪽)

## big-O
    - 알고리즘의 효율성을 나타내는 지표 혹은 언어
    - 시간의 상한을 나타냄
      - 배열의 모든 값 출력: O(N) 이지만 그 외에 N보다 큰 big-O 시간으로 표현할 수 있다
      - O(N^2), O(N^3), O(2^2)도 옳은 표현
      - 즉 수행 시간은 적어도 이들 중 하나보다 빠르기만 하면 된다
      - 사람의 나이 max가 100 이라면 x<100, x<1000 모두 가능한 것과 같은 말
    - 비유하기: 파일전송
      - 파일 작은 경우 : 당연히 온라인이 빠름
      - 파일 1 테라바이트 이상 : 100메가 속도 기준 하루이상 소요되어 운전하거나 비행기 타는 경우가 빠를 수 있다
    - 시간복잡도 
      - big-O 시간에 대한 개념 즉 알고리즘의 실행 시간
      - 온라인 전송: O(s), s는 파일의 크기. 즉 파일의 크기가 증가함에 따라 전송시간이 선형적으로 증가
      - 비행기를 통한 전송: O(1), 파일의 크기와 상관없으며 파일의 크기가 증가한다고 해도 걸리는 시간은 증가하지 않는다.
### 퀵정렬 big-o 예시
![](https://user-images.githubusercontent.com/18549026/144182204-4422ad64-3f41-4237-9987-272956544b84.png)

    - 퀵정렬 최선, 최악, 평균의 경우
      - 최선: 모든 원소가 동일하다면 퀵 정렬은 단순히 한차례 순회하고 끝 -> O(N)
      - 최악: 피벗이 최소가 최대값이 선택된다면 N(N-1)즉 O(n^2)
      - 평균: 31개 요소를 퀵 정렬할때 피벗이 중간값으로 이상적으로 나온다면 31->15->7->3->1 4번 분할 16개의 영역
        - 분할횟수 k = log2*n (2^k=n) 
        - n개의 개수만큼 수행함으로 nlog2n
    - 공간복잡도
      - n 개의 배열을 만든다면 O(n) 공간 필요, n * n 크기의 2차원 배열의 경우 O(n*n) 필요
~~~javascript
function sum(let n){
    if(n<=0){
        return 0;
    }
    return n + sum(n-1);
}
~~~
    -O(n)의 시간과 O(n)의 공간이 필요
    -스택깊이 n개 만큼 필요
        -sum(4)
            -sum(3)
                -sum(2)
                    -sum(1)
~~~javascript
    function pairSumSeq(let n){
        int sum = 0;
        for(let i=0;i<n;i++){
            sum+=pairSum(i, i+1)
        }
        return sum;
    }   
    function pairSum(let a, let b){
        return a+ b;
    }
~~~
- pairSum 함수는 대략 O(n)번 호출했지만, 함수들의 호출스택은 존재하지 않음으로 O(1) 공간만 사용

### 상수항은 무시하라

- big-O는 단순히 증가되는 비율을 나타내는 개념
- 특수한 경우 O(N)코드가 O(1)코드보다 빠를 수 있고 O(N)이 언제나 O(2N)보다 나은것이 아니다
- O(N)과 O(2N)의 차이를 분석하려면 컴파일러, 어셈블리 단계 등 복잡함으로 신경쓰지말자
~~~javascript
//속도비교
//ex1 O(N)
let array = new Array(10000).fill(Math.random**()**);
let min=Number.MIN_SAFE_INTEGER;
let max=Number.MAX_SAFE_INTEGER;

let t0 = performance.now()
for(const x of array){
    if(x<min) min=x;
    if(x>max) max=x;
}
let t1 = performance.now()
console.log(t1 - t0, 'milliseconds')

//ex2 O(2N)
let array = new Array(10000).fill(Math.random());
let min=Number.MIN_SAFE_INTEGER;
let max=Number.MAX_SAFE_INTEGER;

let t0 = performance.now()
for(const x of array){
    if(x<min) min=x;
}
let t1 = performance.now()
console.log(t1 - t0, 'milliseconds')

for(const x of array){
    if(x>max) max=x;
}
~~~
### 지배적이지 않은 항은 무시

- O(N^2+N) => O(N^2)
- O(N+logN) => O(N)
- O(5*2^n + 1000N^100) => O(2^n)

### 여러 부분으로 이루어진 알고리즘: 덧셈 vs 곱셈

- 알고리즘 A를 마친 후 B를 수행할 경우 A+B
- 알고리즘 A를 할때마다 B일을 수행하라 A*B
~~~javascript
//덧셈 수행 시간 O(A+B)
for(let a of arrA){
    console.log(a)
}

for(let b of arrB){
    console.log(b)
}

//곱셈수행시간 O(A*B)
for(let a of arrA){
    for(let b of arrB){
        console.log(a,b)
    }
}


~~~

### log N 수행시간

#### 이진탐색
- 이진 탐색이란 데이터가 정렬돼 있는 배열에서 특정한 값을 찾아내는 알고리즘
- 중간 값을 찾아야 하여 반드시 정렬된 배열에서만 사용가능
- 동작방식(참고: https://yoongrammer.tistory.com/75)
  1. 배열의 중간 값을 가져온다
  2. 중간 값과 검색 값을 비교
     1. 중간 값이 검색 값과 같다면 종료 (mid=key)
     2. 중간 값보다 검색 값이 크면 중간값 기준으로 배열의 오른쪽 구간을 탐색(mid<key)
     3. 중간 값보다 검색 값이 작다면 중간값 기준으로 왼쪽 구간을 탐색(mid>key)
  3. 값을 찾거나 간격이 비어있을 때까지 반복
  
- 16개의 요소를 이진탐색 할 경우
  - 16->8->4->2->1 (나누기 2씩 실행)
  - 2^k = N(16) 을 만족하는 K는 log 이다
    - 2^4 = 16 -> log2 16 = 4
- 어떤 문제에서 원소의 개수가 절반씩 줄어든다면 수행시간 O(logN) 확률이 높다 (N:데이터수)
- 로그의 밑은 big-O에서 고려할 필요가 없다

### 재귀적으로 수행 시간 구하기

~~~javascript
function f(n){
    if(n<=1){
        return 1;
    }    
    return f(n-1) + f(n-1);1
}
~~~
- 함수 f가 두 번 호출된 것을 보고 O(N^2) 으로 생각하지만 틀렸다
- 한단계 깊어질때마다 두배 더 많이 호출하게된다(69쪽)
- 따라서 전체 노드의 개수는 2^0 + 2^1 + 2^2 + 2^3 ... 2^N = 2^(N+1)-1 
- 즉 O(2^N)이 된다

#### log와 다르게 지수의 밑은 무시되어는 안된다

- 상수항과는 다르게 아주 큰 차이가 있다
- 8^n = 2^n * 2^n * 2^n 
- 8^n 과  2^n은 2^2n만큼의 차이가 있다

<img src="https://user-images.githubusercontent.com/18549026/144162716-88717184-16f9-4898-9bd1-55ac0ffe9138.png" width="30%"  height="30%"/>

#### 실습문제

##### 실습1
```javascript
function printPairs1(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1; j<array.length; j++){
            console.log(i,j);
        }
    }
}
```


- N * N-1 으로 보이지만 코드 자체가 무슨 의미인지 생각하면 아래와 같다
~~~
(0,1) (0,2) (0,3) (0,4) (0,5) (0,6)
  　　 (1,2) (1,3) (1,4) (1,5) (1,6)
       　　  (2,3) (2,4) (2,5) (2,6)　　　　　　　　
    　  　　   　　 (3,4) (3,5) (3,6)　　　
 　　   　　   　　  　　  　  ...(5,6)
~~~
- 1~10 값의 평균은 10/2로 1,2...N의 평균은 N/2
- N^2/2 크기의 행렬 => O(N^2)

##### 실습2
```javascript
function printPairs2(array){
    for(let i=0;i<arrayA.length;i++){
        for(let j=i+1; j<arrayB.length; j++){
            console.log(i,j); //0(1) 시간이 걸리는 작업
        }
    }
}
```

##### 실습3
```javascript
function printPairs3(array){
    for(let i=0;i<arrayA.length;i++){
        for(let j=i+1; j<arrayB.length; j++){
            for(let k=0; k<10000; k++){
                console.log(i,j); //0(1) 시간이 걸리는 작업
            }
        }
    }
}
```

##### 실습4
- 다음 중 O(N)과 같은 것들은 무엇인가? 왜 그렇게 생각하는가?
  - O(N+P), P<N/2 일 때
  - O(2N)
  - O(N + logN)
  - O(N+M)
