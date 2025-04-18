import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 54321,
        username: 'root',
        password: 'toor',
        database: 'leadmove',
        entities: [__dirname + '/./**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      try {
        if (!dataSource.isInitialized) {
          await dataSource.initialize();
        }
      } catch (error) {
        console.error(error);
      }
      return dataSource;
    },
  },
];
