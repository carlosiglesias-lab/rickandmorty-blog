const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			favorites:[],
			users:[],
			todos:{}
		},		
		actions: {
			getUsers: async () => {
				const responseU = await fetch("https://assets.breatheco.de/apis/fake/todos/user", { method: 'GET' });
				const dataU = await responseU.json();
				setStore({users: dataU});				
			},
			userChange: event => {
				setCurrentUser(event.target.value);
			},
			getTodos: async (currentUser) => {			
				const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/"+currentUser, { method: 'GET' });
				const data = await response.json();
				setStore({favorites: data.map(fav=> fav.label)});	
	
			},
			updateTodos:async (currentUser) => {
				const store = getStore();
				setStore({todos: store.favorites.map(fav => `{label: ${fav}, done: false }`)});
				await fetch("https://assets.breatheco.de/apis/fake/todos/user/"+currentUser,
					{
						method: 'PUT',
						body: JSON.stringify(store.todos),
						headers: {
							'Content-Type': 'application/json'
						}
					});
			},
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
