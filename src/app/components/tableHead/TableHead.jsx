import React from "react";
import { TableCellHead } from "../tableCell/style";
import { TableRowContainer } from "../tableRow/style";
import { THead } from "./style";

const TableHead = () => {
	return (
			<THead>
				<TableRowContainer>
					<TableCellHead>#</TableCellHead>
					<TableCellHead>Name</TableCellHead>
					<TableCellHead>Domain</TableCellHead>
					<TableCellHead>Web page</TableCellHead>
					<TableCellHead>Handle</TableCellHead>
					<TableCellHead>Save</TableCellHead>
				</TableRowContainer>
			</THead>
	);
};

export default TableHead;
