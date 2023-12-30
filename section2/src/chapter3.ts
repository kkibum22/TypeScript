//객체
//user:object는 user.id가 안됨 그냥 객체라고 하고 끝
let user: {
  id: number; //user:{객체} -> 객체 리터럴 타입
  name: string;
} = {
  id: 1,
  name: "hah",
};
//id를 받아도 되고 안받아도 되려면 위의 id?:number로 교체해줘야 하고 옵셔널 프로퍼티라고 함
// user = {
//   name: "홍길동",
// };

let config: {
  readonly apiKey: string; // readonly를 붙이면 맨아래처럼 값변경을 할수 없음
} = {
  apiKey: "qweqweq",
};

// config.apiKey = "213123";
