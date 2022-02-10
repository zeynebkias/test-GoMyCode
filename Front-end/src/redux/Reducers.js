import { Add } from './Actions';

const initialState = {
    AlbumArtisteName: []
};

function reducer(state = initialState, action) {

switch(action.type) {

case Add:
return {
   
    AlbumArtisteName: state.AlbumArtisteName};

console.log('-+++++++++++++++++++++++++++++++');
console.log(AlbumArtisteName);
console.log('=+++++++++++++++++++++++++++++++=');

default:
return state;
}
}
export default reducer;