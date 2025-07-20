import React from "react";
import { useJsonFetch } from "../../hooks/useJsonFetch";

interface ErrorResponse {
	status: string;
}

const ErrorComponent: React.FC = () => {
	const [data, loading, error] = useJsonFetch<ErrorResponse>(
		"http://localhost:7070/error"
	);

	return (
		<div className='component'>
			<h2>Error Component</h2>
			{loading && <p>Loading...</p>}
			{error && <p className='error'>Error: {error}</p>}
			{data && <p>Data: {data.status}</p>}
		</div>
	);
};

export default ErrorComponent;
