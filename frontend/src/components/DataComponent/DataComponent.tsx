import React from "react";
import { useJsonFetch } from "../../hooks/useJsonFetch";

interface DataResponse {
	status: string;
}

const DataComponent: React.FC = () => {
	const [data, loading, error] = useJsonFetch<DataResponse>(
		"http://localhost:7070/data"
	);

	return (
		<div className='component'>
			<h2>Data Component</h2>
			{loading && <p>Loading...</p>}
			{error && <p className='error'>Error: {error}</p>}
			{data && <p>Data: {data.status}</p>}
		</div>
	);
};

export default DataComponent;
