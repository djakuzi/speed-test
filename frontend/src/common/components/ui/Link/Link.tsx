import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import type { PropsLink } from "./Link.props";
import cn from "classnames";
import { StyleLink, StyleLinkActive } from "./type.style";

export default function UiLink({
	children,
	adaptive = "standart",
	className,
	type = "default",
	to,
}: PropsLink) {
	const _adaptive = {
		standart: "lg:text-2xl",
	};

	const baseCls = "font-montserrat w-fit cursor-pointer";

	const resClassName = ({ isActive }: NavLinkRenderProps) =>
		cn(
			baseCls,
			_adaptive[adaptive],
			StyleLink[type],
			isActive && StyleLinkActive[type],
			className,
		);

	return (
		<NavLink to={to} className={resClassName}>
			{children}
		</NavLink>
	);
}
