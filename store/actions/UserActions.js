export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";

const apiKey = "AIzaSyBWOZqita1CRS5gN9bFCaj_o3kaQd4vLWc";

export const signUp = (email, password) => {
	return async (dispatch) => {
		const response = await fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + apiKey,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true
				})
			}
		);
		const data = await response.json(); // json to javascript
		if (!response.ok) {
			//There was a problem..
			console.error(response);
		} else {
			dispatch({ type: SIGN_UP, payload: data });
		}
	};
};

export const logIn = (email, password) => {
	return async (dispatch) => {
		const response = await fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
				apiKey,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: email?.toLowerCase(),
					password: password,
					returnSecureToken: true
				})
			}
		);
		const data = await response.json();
		if (!response.ok) {
			//There was a problem..
			console.error(data);
		} else {
			dispatch({ type: LOG_IN, payload: data });
		}
	};
};
