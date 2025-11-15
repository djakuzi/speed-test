import SpeedometerRenderer from "@core/lib/SpeedometerRenderer/SpeedometerRenderer";
import type { EThemeApp } from "@core/config/types/app.interface";
import { useEffect, useRef, useState } from "react";

export function useRenderSpeedometer<P extends HTMLElement>(
	value: number,
	max: number = 150,
	theme: EThemeApp,
	nameValue: string,
) {
	const [size, setSize] = useState<number>(300);
	const [error, setError] = useState<string>('');
	const parentRef = useRef<P | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const rendererRef = useRef<SpeedometerRenderer | null>(null);

	function renderer() {
		if (rendererRef.current) return;
		if (!canvasRef.current) return;
		const ctx = canvasRef.current.getContext("2d");
		if (!ctx) return;

		rendererRef.current = new SpeedometerRenderer(ctx, size, max, theme, nameValue);
		rendererRef.current.animateTo(value);
	}

	function resize() {
		if (!rendererRef.current || !parentRef.current) return;
		const { offsetWidth } = parentRef.current;

		if (offsetWidth <= 0) return;

		setSize(offsetWidth);
	}

	useEffect(() => {
		renderer();
		resize();
		window.addEventListener('resize', resize);

		return () => {
			rendererRef.current?.stop();
			window.removeEventListener('resize', resize);
		};
	}, []);

	useEffect(() => {
		rendererRef.current?.update(value, max, size, theme);
	}, [max, size, theme]);

	useEffect(() => {
		rendererRef.current?.animateTo(value);
		console.log(value)
	}, [value]);

	return {
		parentRef,
		canvasRef,
		size,
		error,
		resize,
		setSize,
	};
}