//any
//특정 변수의 타입을 우리가 확실히 모를때
//타입스크립트의 장점 즉 타입확인을 안하기 때문에 왠만하면 최대한 지향하자
let anyVar = 10;
anyVar = "hello";
anyVar = true;
let num = 20;
num = anyVar; // 어떠한 값에 할당 가능
//unknown
//수학적 연산,타입관련 메소드 사용불가
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
//,어떠한 값에 할당 불가하지만 이런식으로는 가능
if (typeof unknownVar === "number") {
    num = unknownVar;
}
console.log(123123);
export {};
