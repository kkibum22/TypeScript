//타입 별칭 ->같은 이름의 타입을 만들수 없음(let선언은 한번 하는 것처럼)

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

//{
//     id: number;
//     name: string;
//     nickname: string;
//     birth: string;
//     bio: string;
//     location: string;
// }
//위의 주석을 맨위의 타입의 형태로 만들어서 아래 user:User처럼 타입 값을 넣음

let user: User = {
  id: 1,
  name: "asd",
  nickname: "sadsad",
  birth: "1995.06.10",
  bio: "HI",
  location: "jeju",
};

//인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
// 이렇게 가능

let contryCodes: CountryCodes = {
  Korea: "ko",
  US: "us",
  UK: "uk",
};

// type CountryNumberCodes = {
//   [key: string]: number;      //아래 객체안에 아무것도 없어도 위반되는사항이 없어서 오류가 안남
//   Korea:string      // 위에서 밸류 값이 넘버이므로 아래 Korea의 타입도 넘버로 맞춰야함
// };

// let countryNumberAndStringCodes:CountryNumberCodes{
//     Korea:"ko"
// }
