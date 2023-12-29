// npm i @types/node ->노드가 제공하는 내장기능들에 대한 타입 정보를 갖고있는 패키지
//위의 패키지를 설치하지 않으면 노드의 기본기능,콜솔로그 같은거의 타입을 알아들을 수 없기때문에 설치가 필수

//타입스크립트 컴파일러 ->sudo npm install typescript -명령어 : tsc
//tsc src/index.ts ->index.js파일 생성 -> node src/index.js -> js파일 실행
//위의 과정을 한번에 실행시키는 ts-node라는 도구가 있는데 업데이트로 인해 tsx src/index.ts를 하면 컴파일,실행까지 가능

console.log("Hello");
const a: number = 1;
