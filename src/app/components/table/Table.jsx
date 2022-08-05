import React from "react";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";
import { TableContainer } from "./style";

const Table = ({data, page, handleCheck}) => {
	return (
		<TableContainer>
      <TableHead/>
      <TableBody data={data} page={page} />
		</TableContainer>
	);
};

export default Table;
