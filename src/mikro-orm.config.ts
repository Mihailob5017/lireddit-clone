import { Post } from './entities/Post';
import { __prod__ } from './cosnstants';
import { MikroORM } from '@mikro-orm/postgresql';
import path from 'path';
import { User } from './entities/User';

export default {
	migrations: {
		path: path.join(__dirname, './migrations'),
		glob: '!(*.d).{js,ts}',
	},
	dbName: 'lireddit',
	debug: !__prod__,
	type: 'postgresql',
	allowGlobalContext: true,
	user: 'postgres',
	password: 'jsmv4183',
	entities: [Post, User],
} as Parameters<typeof MikroORM.init>[0];
