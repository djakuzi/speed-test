import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";
import UiButton from "@common/components/ui/Button/Button.ui";
import UiDescText from "@common/components/ui/DescText/DescText";
import UiLogo from "@common/components/ui/Logo/Logo.ui";
import UiTitle from "@common/components/ui/Title/Title";
import { useNavigate } from "react-router-dom";

export default function PatPageNotFound() {
	const navigate = useNavigate();

	return (
		<BlockStandart type={"col-center"} className={'h-screen р-full w-full'}>
			<BlockStandart type={"col-center"} className={'min-h-full gap-[50px]'}>
				<UiLogo />

				<BlockStandart type={"col-center"} className={'gap-[20px]'}>
					<UiTitle>404</UiTitle>
					<UiDescText type="big">К сожалению страница не найдена🥺</UiDescText>
				</BlockStandart>

				<UiButton attr={{ onClick: () => navigate('/') }}>
					НА ГЛАВНУЮ
				</UiButton>
			</BlockStandart>
		</BlockStandart>
	)
}