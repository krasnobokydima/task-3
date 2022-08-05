import React from "react";
import { Oval } from "react-loader-spinner";
import { Container } from "./style";

const Loader = () => {
	return (
		<Container>
			<Oval
				height="80"
				width="80"
				radius="9"
				ariaLabel="three-dots-loading"
			/>
		</Container>
	);
};

export default Loader;
