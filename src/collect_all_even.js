function isExist(key, value) {
    for(var a=0;a<value.length;a++){
        if(key == value[a]){

            return key;
        }
    }

    return 0;
}
function collect_same_elements(collection_a, object_b) {
    var newArray =[];
    collection_a.forEach(function (element) {
        if(isExist(element.key,object_b.value)){
            newArray.push(element.key);
        }
    });
    return newArray;
}

module.exports = collect_same_elements;
