export const initialState = {
    basket: [],
    favourites: []
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount,0) // search for reduce function


const reducer = (state,action) => {

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket]

            if (index >= 0){
                newBasket.splice(index,1);
            }else {
                console.warn(
                    `Can't remove product (id : ${action.id}) as its not in basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                favourites: [...state.favourites, action.item],
            };

        case 'REMOVE_FROM_FAVOURITES':
            const index_ = state.favourites.findIndex(
                (favouriteItem) => favouriteItem.id === action.id
            );
            let newFavourites = [...state.favourites]

            if (index_ >= 0){
                newFavourites.splice(index_,1);
            }else {
                console.warn(
                    `Can't remove product (id : ${action.id}) as its not in favourites!`
                )
            }

            return {
                ...state,
                favourites: newFavourites
            }

        default:
            return state;
    }
}

export default reducer;