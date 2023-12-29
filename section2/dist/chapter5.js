//enum타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "haha",
    role: Role.ADMIN, //0 <-관리자 //원래 0번이었다
};
const user2 = {
    name: "haha1",
    role: Role.USER, //1 <-일반 유저 //원래 1번이었다
};
const user3 = {
    name: "haha3",
    role: Role.GUEST, //2 <-게스트 //원래 2번이었다
};
export {};
