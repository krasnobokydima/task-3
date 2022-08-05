import React, { useState } from "react";
import { TableRowContainer, Check, Link } from "./style";
import { TableCellBody } from "../tableCell/style";

const TableRow = ({ item, index, page }) => {
  const [handleCheck, setHandleCheck] = useState(item.value);
	const { name, domains, web_pages, alpha_two_code } = item;

  const checked = () => {
    if (!handleCheck) {
      setHandleCheck(true)
    } else {
      setHandleCheck(false)
    }

  }


	return (
		<TableRowContainer>
			<TableCellBody>{index + 1 + (page - 1) * 10}</TableCellBody>
			<TableCellBody>{name}</TableCellBody>
			<TableCellBody>{domains[0]}</TableCellBody>
			<TableCellBody>
				<Link href={web_pages[0]}>{web_pages[0]}</Link>
			</TableCellBody>
			<TableCellBody>{alpha_two_code}</TableCellBody>
			<TableCellBody>
				<Check
					type="checkbox"
					checked={handleCheck}
					onChange={() => checked()}
				></Check>
			</TableCellBody>
		</TableRowContainer>
	);
};

export default TableRow;
