import { useState, useEffect } from "react";

type JsonFetchResult<T> = [T | null, boolean, string | null];

export const useJsonFetch = <T>(
	url: string,
	opts?: RequestInit
): JsonFetchResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch(url, opts);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const json = await response.json();
				setData(json);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, opts]);

	return [data, loading, error];
};
