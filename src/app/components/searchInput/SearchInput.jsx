import React from "react";
import { Input, SearchContainer, SearchIcon, ResetIcon } from "./style";

const SearchInput = ({ value, handleValue, searchInfo, resetSearch }) => {
	return (
		<SearchContainer>
			<Input
				type="text"
				placeholder="Search..."
				value={value}
				onChange={(e) => handleValue(e)}
			/>
			<SearchIcon onClick={(e) => searchInfo(e)} />
			<ResetIcon onClick={resetSearch} />
		</SearchContainer>
	);
};

export default SearchInput;
