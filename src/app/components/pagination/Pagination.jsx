import React from "react";
import { range } from "../../helpers/range.js";
import { Nav, Ul, Li, Button } from "./style.js";

const Pagination = ({ paginationInfo, setPaginationInfo }) => {
	const pageCount = paginationInfo.pages;
	// if (pageCount < 2) return null;
	const pages = range(1, pageCount + 1);


	return (
		<Nav>
			<Ul className="pagination">
				{pages.map((page) => (
					<Li key={"page_" + page}>
						<Button
							$active={page === paginationInfo.currentPage}
							onClick={() =>
								setPaginationInfo((prev) => ({ ...prev, currentPage: page }))
							}
						>
							{page}
						</Button>
					</Li>
				))}
			</Ul>
		</Nav>
	);
};

export default Pagination;
