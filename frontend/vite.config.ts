import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const router = {
	'@router': '/src/router',
}

const app = {
	'@app': '/src/app',
}

const common = {
	'@common': '/src/common',
}

const core = {
	'@core': '/src/core',

}

const assets = {
	'@assets': '/src/assets',
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			...router,
			...app,
			...common,
			...core,
			...assets,
		},
	},
	server: {
		port: 3000,
	},
	build: {
		outDir: 'dist',
		sourcemap: true, // для отладки
	},
})
