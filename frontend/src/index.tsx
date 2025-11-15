import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './style';
import App from '@app/app';

try {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>,
	)
} catch (error) {
	console.error(error);
}

