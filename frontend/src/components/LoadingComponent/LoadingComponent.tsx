import React from "react";
import { useJsonFetch } from "../../hooks/useJsonFetch";

interface LoadingResponse {
	status: string;
}

const LoadingComponent: React.FC = () => {
	const [data, loading, error] = useJsonFetch<LoadingResponse>(
		"http://localhost:7070/loading"
	);

	return (
		<div className='component'>
			<h2>Loading Component</h2>
			{loading && <p>Loading... (5 second delay)</p>}
			{error && <p className='error'>Error: {error}</p>}
			{data && <p>Data: {data.status}</p>}
		</div>
	);
};

export default LoadingComponent;
