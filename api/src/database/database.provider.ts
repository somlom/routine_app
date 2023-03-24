import { Mongoose } from 'mongoose';

const db = new Mongoose();

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof db> =>
            db.connect(
                'mongodb+srv://admin:111QQQ@cluster0.gqqujgz.mongodb.net/test'
            ),
    },
];
