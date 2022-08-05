import React, { useEffect, useState } from "react";
import { getInfoFromServer } from "./api/api";
import Layout from "./components/layout/Layout";
import Loader from "./components/loader/Loader";
import SearchInput from "./components/searchInput/SearchInput";
import { Body, Container } from "./style";

const paginationConfig = {
	currentPage: 1,
	amountRowsOnPage: 10,
	pages: 0,
};

const dataConfig = {
	data: [],
	status: null,
};

function App() {
	const [dataFromServer, setDataFromServer] = useState(dataConfig);
	const [paginationInfo, setPaginationInfo] = useState(paginationConfig);
	const [textSearch, setTextSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [preparingData, setPreparingData] = useState([]);

	const handleSearch = ({ target }) => {
		if (error) {
			setError(false);
		}

		setTextSearch(target.value);
	};

	const resetSearch = () => {
		setTextSearch("");
		setPreparingData([]);
		setDataFromServer(dataConfig);
	};

	const searchInfo = async (e) => {
		e.preventDefault();

		if (textSearch.trim().length === 0) {
			setError(true);
			return;
		}

		setLoading(true);

		try {
			const data = await getInfoFromServer(textSearch);
			setDataFromServer({ ...data });
			setPaginationInfo((prev) => ({
				...prev,
				pages: Math.ceil(data.data.length / prev.amountRowsOnPage),
			}));
		} catch (e) {
			setError(true);
		}

		setLoading(false);
	};

	useEffect(() => {
		let { data } = dataFromServer;
		let preparedData = data.map((item) => ({ ...item, value: false }));

		const { currentPage, amountRowsOnPage } = paginationInfo;
		const start = (currentPage - 1) * amountRowsOnPage;
		const end = start + amountRowsOnPage;

		const slicing = preparedData.slice(start, end);

		setPreparingData(slicing);
	}, [dataFromServer, paginationInfo]);

	return (
		<Body>
			<Container>
				<SearchInput
					value={textSearch}
					handleValue={handleSearch}
					searchInfo={searchInfo}
					resetSearch={resetSearch}
				/>

				{loading ? (
					<Loader />
				) : (
					<Layout
						data={preparingData}
						paginationInfo={paginationInfo}
						setPaginationInfo={setPaginationInfo}
						error={error}
						status={dataFromServer.status}
					/>
				)}
			</Container>
		</Body>
	);
}

export default App;
