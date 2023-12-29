//number
let num1: number = 123;
let num2: number = 0.123;
let num3: number = -0.123;
let num4: number = Infinity;
let num5: number = -Infinity;
let num6: number = NaN;
//num1.toUpperCase(); -> 문자열전용 메소드 사용불가

//string
let srt1: string = "hello";
let srt2: string = "hello";
let srt3: string = `hello`;
let srt4: string = `hello ${num1}`;
//str1.toFixed() -> 숫자형전용 메소드 사용불가

//boolean
let bool1: boolean = true;
let bool2: boolean = false;

//null
let null1: null = null;

// let numA: number = null;
//Null값을 임시로 사용해야할때 "strictNullChecks": false 사용

//undifined
let unde1: undefined = undefined;

//리터럴 타입
//리터럴 -> 값
//모든 타입을 리터럴에 넣을 수 있음
let numB: 10 = 10;

// numB = 12; -> 값은 10만 들어갈수 있음
