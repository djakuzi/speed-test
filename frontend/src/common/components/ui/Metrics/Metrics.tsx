import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";
import type { PropsMetrics } from "./Metrics.props";
import cn from 'classnames';

export function UiMetrics({ data, className, type = 'flex' }: PropsMetrics) {
	function createMetrics(obj: typeof data[0], i: number) {
		return (
			<div className="relative bg-kn-bg-surface shadow-kn-montserrat text-2xl p-[1em] rounded-[1em] overflow-hidden min-w-fit flex-1" key={i + obj.name}>
				<div className="text-[1em] uppercase tracking-wide text-kn-text-base mb-[.2em]">{obj.name}</div>
				<div className="text-[1.5em] font-semibold text-kn-text-secondary whitespace-nowrap">{obj.value} {obj.unitMeasurement || ''}</div>
				{/* {Number(obj.value) === 0 && <div className={`"text-[1em] uppercase tracking-wide text-kn-text-base z-1 ${StyleAbsolute.center}`}>Вычесляем</div>}
				{Number(obj.value) === 0 && <div className={`absolute w-full h-full top-0 left-0 backdrop-blur-[3px] backdrop-brightness-95`}></div>} */}
			</div>
		)
	}

	const baseCls = `
		gap-5
	`;

	const resClassName = cn(
		className ? className : baseCls,
	);

	return (
		<BlockStandart type={type} className={resClassName}>
			{...data.map((el, i) => {
				return createMetrics(el, i);
			})}
		</BlockStandart>
	)
}