export default function(pictureList = [], action) {
    if(action.type == 'addPicture') {
        return [...pictureList, {url: action.url, IAresult: action.IAdata}];
    } else {
        return pictureList;
    }
}