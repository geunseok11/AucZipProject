require('./models/index');
const { User, Building, userBuilding } = require('./models');
const usersFixture = require('./fixtures/users.json');
const buildingFixture = require('./fixtures/building.json');
test();

async function test(){
    await User.destroy({ truncate: {cascade: true }, restartIdentity: true });
    await Building.destroy({ where: {}, truncate: {cascade: true }});
    await userBuilding.destroy({ where: {}, truncate: {cascade: true }});

    let d = await User.create(usersFixture[0]);
    await User.create(usersFixture[1]);
    console.log(d.id, 'User id??')
    let b = await Building.create(buildingFixture[0]);
    let c = await userBuilding.create({userId: d.id, buildingId: b.id, 
            userInvest: 1000000})
    // await userBuilding.findAll({})
    console.log(d.dataValues);
    userBuilding.findAll({
        // attribute: ["roomname", "text", "id"],
        include: [{
          model: User,
          required: false,
          attribute: ["name"],
        //   where: { name: { [Op.like]: '%ooth%' } }
        //result : "name": "Toothpick",
        }],
        // order: [['id', 'desc']]
      }).then((data, err) => {
        if (err) {
          return console.log(err);
        }
        console.log(JSON.stringify(data), 'data');
      });

    // await users.destroy({ where: {}, truncate: true });
    // await users.create(usersFixture[0]);
}
//npx sequelize-cli model:generate --name User --attributes ㅜame:string,email:string
//npx sequelize-cli db:migrate