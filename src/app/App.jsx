import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./hooks/UseLocalStorage";
import { getInfoFromServer } from "./api/api";
import Layout from "./components/layout/Layout";
import Loader from "./components/loader/Loader";
import SearchInput from "./components/searchInput/SearchInput";
import { config } from "./config";
import { Body, Container } from "./style";

function App() {
	const [dataFromServer, setDataFromServer] = useState(config.dataConfig);
	const [paginationInfo, setPaginationInfo] = useState(config.paginationConfig);
	const [textSearch, setTextSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [preparingData, setPreparingData] = useState([]);
	const [saveItem] = useLocalStorage();

	const handleSearch = ({ target }) => {
		if (error) {
			setError(false);
		}

		setTextSearch(target.value);
	};

	const resetSearch = () => {
		setTextSearch("");
		setPreparingData([]);
		setDataFromServer(config.dataConfig);
	};

	const searchInfo = async (e) => {
		e.preventDefault();

		if (textSearch.trim().length === 0) {
			setError(true);
			return;
		}

		setLoading(true);

		const data = await getInfoFromServer(textSearch);

		if (!data) {
			setError("Network error");
			setLoading(false);

			return;
		}

		setDataFromServer({ ...data });
		setPaginationInfo((prev) => ({
			...prev,
			pages: Math.ceil(data.data.length / prev.amountRowsOnPage),
		}));

		setLoading(false);
	};

	useEffect(() => {
		let { data } = dataFromServer;

		let preparedData = data.map((el) => {
			return { ...el, value: saveItem.find((item) => item.name === el.name) };
		});

		const { currentPage, amountRowsOnPage } = paginationInfo;
		const start = (currentPage - 1) * amountRowsOnPage;
		const end = start + amountRowsOnPage;

		const slicing = preparedData.slice(start, end);

		setPreparingData(slicing);
	}, [dataFromServer, paginationInfo, saveItem]);

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
