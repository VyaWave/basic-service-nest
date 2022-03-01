type sqlType = 'mysql' | 'mariadb';

export default {
  mysql: {
    type: 'mysql' as sqlType,
    logging: false,
    host: '127.0.0.1',
    port: 3306,
    database: 'basic_service_mysql',
    password: '123456',
    username: 'developer',
    timezone: '+08:00',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    retryAttempts: 10,
    retryDelay: 3000,
    autoLoadEntities: true,
  },
};
