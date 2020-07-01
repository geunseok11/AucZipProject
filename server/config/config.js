module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'auction',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: 'root',
    password: process.env.RDS_PASSWORD,
    database: 'auction',
    host: 'cho-database.ci952z5doahd.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
    logging: false,
    port: 3333,
  }
};
