type sqlType = 'mysql' | 'mariadb';

export default {
  mysql: {
    type: 'mysql' as sqlType,
    logging: false,
    host: '10.190.5.115',
    port: 3306,
    database: 'nest_test',
    password: 'wQ,RWD*D)3h-@ac',
    username: 'root',
    timezone: '+08:00',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    retryAttempts: 10,
    retryDelay: 3000,
    autoLoadEntities: true,
  },
};
