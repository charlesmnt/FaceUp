export default function(pictureList = [], action) {
    if(action.type == 'addPicture') {
        return [...pictureList, action.url];
    } else {
        return pictureList;
    }
}