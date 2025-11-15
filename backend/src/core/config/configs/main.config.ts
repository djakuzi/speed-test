type PropetryEnv = string | undefined;

interface ConfigStandart {
	host: PropetryEnv;
	port: PropetryEnv;
}

export interface ConfigBackend extends ConfigStandart {
	cors: ConfigCors;
}

export interface ConfigFrontend extends ConfigStandart {}

export interface ConfigProject {
	mode: PropetryEnv;
	backend: ConfigBackend;
	frontend: ConfigFrontend;
}

export interface ConfigCors {
	enabled: boolean;
	origin: string[];
	methods: string[];
	allowedHeaders: string[];
	credentials: boolean;
	preflightContinue: boolean;
	optionsSuccessStatus: number;
}

const createMainConfig = (): ConfigProject => ({

	mode: process.env.NODE_MODE || 'DEV',
	backend: {
		host: process.env.BACKEND_HOST,
		port: process.env.BACKEND_PORT,
		cors: {
			enabled: process.env.CORS_ENABLED === 'true',
			origin: process.env.FRONTEND_HOST
				? [`http://${process.env.FRONTEND_HOST}:${process.env.FRONTEND_PORT}`]
				: ['http://localhost:3000'],
			methods: process.env.CORS_METHODS?.split(',') as [],
			allowedHeaders: process.env.CORS_ALLOWED_HEADERS?.split(',') as [],
			credentials: process.env.CORS_CREDENTIALS !== 'false',
			preflightContinue: false,
			optionsSuccessStatus: 204,
		},
	},
	frontend: {
		port: process.env.FRONTEND_PORT,
		host: process.env.FRONTEND_HOST,
	},
});

export default createMainConfig;
