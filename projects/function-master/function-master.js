function objectValues(input) {
    return Object.values(input);
};

function keysToString(input) {
    var myKeys = Object.keys(input);
    return myKeys.join(' ');
};

function valuesToString(input) {
    var myValues = [];
    for(var key in input) {
        if(typeof (input[key]) === 'string') {
            myValues.push(input[key]);
        }
    }
    return myValues.join(' ');
};

function arrayOrObject(input) {
    if(Array.isArray(input)) {
        return 'array';
    } else if(typeof input === 'object') {
        return 'object';
    }
};

function capitalizeWord(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
};

function capitalizeAllWords(input) {
   var splitStr = input.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);     
   }
   return splitStr.join(' '); 
};

function welcomeMessage(input) {
    return 'Welcome' + ' ' + input['name'].charAt(0).toUpperCase() + input['name'].slice(1) + '!';
};

function profileInfo(input) {
    return input['name'].charAt(0).toUpperCase() + input['name'].slice(1) + ' is a ' + input['species'].charAt(0).toUpperCase() + input['species'].slice(1);
};

function maybeNoises(input) {
    if(input.hasOwnProperty('noises') && input['noises'][0] && Array.isArray(input['noises'])) {
        return input['noises'].join(' ');
    } else {
        return 'there are no noises';
    }
};

function hasWord(string, word) {
    return string.includes(word);
};

function addFriend(name, obj) {
    obj['friends'].push(name);
    return obj;
};

function isFriend(name, obj) {
    return obj.hasOwnProperty('friends') && obj['friends'][0] && obj['friends'].includes(name);
};

function nonFriends(name, list) {
    var newList = [];
    for(var i = 0; i < list.length; i++) {
        if(list[i]['name'] !== name && list[i]['friends'] && (!(list[i]['friends'].includes(name)))) {
        newList.push(list[i]['name']);
    } 
   } 
   return newList;    
};

function updateObject(obj, prop, val) {
    obj[prop] = val;
  return obj;
};

function removeProperties(obj, arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var key in obj) {
      if(key === arr[i]) {
        delete obj[key];
      }
    }
  } return obj;
};

function dedup(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(!(newArr.includes(arr[i]))) {
      newArr.push(arr[i]);
    }
  } return newArr;
};
