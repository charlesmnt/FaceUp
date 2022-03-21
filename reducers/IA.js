export default function(IAlist = [], action) {
    if(action.type == 'IAdetection') {
        return [...IAlist, action.IAdata];
    } else {
        return IAlist;
    }
}