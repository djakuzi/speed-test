export const StyleFlex = {
	'flex': 'flex',
	'col': 'flex flex-col',
	'col-wrap': 'flex flex-col flex-wrap',
	'col-center': 'flex flex-col items-center justify-center',
	'raw': 'flex flex-raw',
	'raw-wrap': 'flex flex-raw flex-wrap',
	'raw-center': 'flex flex-raw items-center justify-center',
	'around': 'flex justify-around',
	'around-center': 'flex items-center justify-around',
	'between': 'flex justify-between',
	'between-center': 'flex items-center justify-between',
	'default': '',
}

export type TStyleFlex = keyof typeof StyleFlex;