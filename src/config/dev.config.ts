type sqlType = 'mysql' | 'mariadb';

export default {
  mysql: {
    type: 'mysql' as sqlType,
    logging: false,
    host: '121.4.36.38',
    port: 3306,
    database: 'basic_service',
    password: 'root123456',
    username: 'dev',
    timezone: '+08:00',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    retryAttempts: 10,
    retryDelay: 3000,
    autoLoadEntities: true,
  },
};
