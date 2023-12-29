//void -> 아무것도 없다

function func(): string {
  return "Hello";
}
//아래 같은 경우처럼 반환하는게 없을 때
function func2(): void {
  console.log("Hello");
}
//void는 undefined를 제외한 어떠한 타입도 받을 수 없다
// let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = undefined;
// tsconfig.json의 strictNullChecks를 false로 하면 null값도 받을수 있음
// a = null;

//never ->존재 하지않는,불가능한 타입
//void와 다르게  any,null 등 아무값도 담을수가 없다
//-> let a: never;

function func3(): never {
  while (true) {}
}
