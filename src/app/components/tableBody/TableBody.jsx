import React from "react";
import TableRow from "../tableRow/TableRow";

const TableBody = ({ data, page }) => {
	return (
		<tbody>
			{data.map((item, index) => (
				<TableRow
					key={item.name}
					item={item}
					index={index}
					page={page}
				/>
			))}
		</tbody>
	);
};

export default TableBody;
