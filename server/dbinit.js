const { User } = require('./models');
const usersFixture = require('./fixtures/users.json');

test();

async function test(){

    await User.destroy({ where: {}, truncate: true });

    await User.create(usersFixture[0]);
    let a = await User.findAll({})
    console.log(a)
    console.log('aa');
    // await users.destroy({ where: {}, truncate: true });
    // await users.create(usersFixture[0]);
}
