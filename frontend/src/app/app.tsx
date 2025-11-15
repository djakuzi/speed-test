import { appStore, StoreProvider } from './store/store';
import { ProviderApp } from './router/router';

export default function App() {
	return (
		<StoreProvider value={appStore}>
			<ProviderApp />
		</StoreProvider>
	);
}
