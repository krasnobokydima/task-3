import React from "react";
import Pagination from "../pagination/Pagination";
import Table from "../table/Table";
import { ErrorMessage, Message, Container } from "./style";

const Layout = ({ data, paginationInfo, setPaginationInfo, error, status, handleCheck }) => {
	if (error) {
		return (
			<ErrorMessage>
				Enter the name of the country whose universities you want to find
			</ErrorMessage>
		);
	}

	if (!status) {
		return (
			<Message>
				Enter the name of the country whose universities you want to find
			</Message>
		);
	}

	if (status > 299) {
		return <ErrorMessage>Ooops, some error</ErrorMessage>;
	}

	if (!data.length) {
		return <Message>No universities found in this country</Message>;
	}

	return (
		<>
      <Container>
			  <Table data={data} page={paginationInfo.currentPage}/>
      </Container>
			<Pagination
				paginationInfo={paginationInfo}
				setPaginationInfo={setPaginationInfo}
			/>
		</>
	);
};

export default Layout;
