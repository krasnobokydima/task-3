import React, { useState } from "react";
import { TableRowContainer, Check, Link } from "./style";
import { TableCellBody } from "../tableCell/style";
import { useLocalStorage } from "../../hooks/UseLocalStorage";

// const key = "saved-universities";


const TableRow = ({ item, index, page }) => {
	const { name, domains, web_pages, alpha_two_code, value } = item;
	const [saveItem, setSaveItem] = useLocalStorage()
	
	const [handleCheck, setHandleCheck] = useState(value);


	console.log(saveItem)

	const checked = () => {
		if (!handleCheck) {
			setHandleCheck(true);
			setSaveItem(prev => [...prev, item]);
		} else {
			setHandleCheck(false);
			const newSaved = saveItem.filter((elem) => elem.name !== name);

			setSaveItem([...newSaved]);
		}
	};

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
