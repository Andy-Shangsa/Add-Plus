import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    call: Mock.Random.string( 'number', 11, 11 ),
    carNo: Mock.Random.string( 'number', 16, 18 ),
    transTime: Mock.Random.date(),
    warnTime: Mock.Random.date(),
    info: Mock.mock('@county(true)'),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };