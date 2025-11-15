export enum EThemeApp {
	DARK = 'dark',
	LIGHT = 'light',
}

export enum EModeApp {
	DEV = 'DEV',
	PROD = 'PROD',
}


export interface IntrCofigApp {
	baseName: string,
	mode: EModeApp,
	theme: EThemeApp
}