//배열
let numArr = [1, 2, 3];
let strArr = ["hi", "bye", "happy"];
//제네릭 문법 추후에 배움 let booArr: Array<boolean> = [true, false, true];
//배열의 들어가는 요쇼의 타입이 다양할 경우
let multiArr = [1, "Hello"];
//다차원 배열의 타입을 정의하는 방법
let doubleArr = [
  [1, 2, 3],
  [4, 5],
];
//튜플 ->길이,타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1, 2, 3]; //길이
// tup1 = ["1", "2"]; //타입
let tup2 = [1, "2", true];
//순서에 맞게 맞는 타입이 들어가야됨
//튜플을 사용하는 예
const users = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  //   [5, "dd"],
];
export {};
