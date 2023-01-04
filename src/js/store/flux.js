const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			favorites:[],					
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
			addFavorite : (fav) =>{
				const store = getStore();
				setStore({favorites: [...store.favorites,fav]});
			}
		}
	};
};

export default getState;
