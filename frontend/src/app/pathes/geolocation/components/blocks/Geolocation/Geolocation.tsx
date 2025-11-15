import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";
import { observer } from "mobx-react-lite";
import MetricsGeolocation from "../../ui/Metrics/MetricsGeolocation";

const BlockGeolocation = observer(() => {
	return (
		<BlockStandart type={'col'}>
			<MetricsGeolocation/>
		</BlockStandart>
	);
})

export default BlockGeolocation;

