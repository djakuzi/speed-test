import { ServiceGeolocation } from "@common/api/services/Geolocation/geolocation.service";
import { useStateStore } from "../../../hooks/useStateStore.hooks"
import { useEffect } from "react";

export function useResultGeolocation() {
	const { error, isLoading, geo, actions, parseGeo } = useStateStore('geolocation');

	async function updateGeo() {
		try {
			actions.updateState({ isLoading: true, error: null });
			const geo = await ServiceGeolocation.getFullGeo();

			actions.updateState({ geo: geo.geo });
		} catch (error) {
			actions.updateState({ error: 'Ошибка при получении геолокации' });

			console.error('Error updating geolocation:', error);
		}
	}

	useEffect(() => {
		if (geo === null || error !== null) {
			updateGeo();
		}
	}, []);

	return {
		updateGeo,
		error,
		isLoading,
		geo,
		actions,
		parseGeo
	}
}