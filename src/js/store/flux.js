const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			favorites:["test1","test2"],
			detailsInfo:{},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]			
		},		
		actions: {
			getCharacters: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/character", { method: 'GET' });
				const data = await response.json();
				setStore({ characters: data.results })								
			},
			deleteFavorite : (fav) =>{
				const store = getStore();
				const newfavs = store.favorites.filter((e, i) => i !== fav)

				setStore({ favorites: newfavs });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
