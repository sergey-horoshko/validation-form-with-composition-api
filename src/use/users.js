import { ref } from "vue";
import { useFetch } from "./fetch";

export async function useUsers() {
	const loaded = ref(false);
	const url = "https://jsonplaceholder.typicode.com/users";
	const { response: users, request } = useFetch(url);

	if (!loaded.value) {
		await request();
		loaded.value = true;
	}

	return { users };
}
