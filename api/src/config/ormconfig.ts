module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'posstgres',
  password: 'posstgres',
  database: 'posstgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};