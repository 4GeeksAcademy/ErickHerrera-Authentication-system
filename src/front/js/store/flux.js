const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: localStorage.getItem("accessToken") || null,
		},
		actions: {
			signup: async (email, password, first_name, last_name) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/signup", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: email,
							password: password,
							first_name: first_name,
							last_name: last_name
						})
					});

					if (!response.ok) {
						const data = await response.json();
						throw new Error(data.msg || "Error during signup");
					}

					return true;
				} catch (error) {
					console.error("Error during signup", error);
					alert(error.message); 
					return false;
				}
			},	
			login: async (email, password) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: email,
							password: password
						})
					});

					if (!response.ok) {
						throw new Error("Failed to login");
					}

					const data = await response.json();
					localStorage.setItem("accessToken", data.access_token);
					setStore({ token: data.access_token });

					return true; 
				} catch (error) {
					console.error("Error during login", error);
					return false;
				}
			},
			logout: () => {
				localStorage.removeItem("accessToken");
				setStore({ token: null });
			}
		},
		
	};
};

export default getState;
