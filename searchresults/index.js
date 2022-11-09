const data = require('./google-ui/searchresults/data');
let searchedData= document.getElementById("s-input");

function matchResults(data,searchedData){
const regex = "^(.*?(\b" + data + "\b)[^$]*)$";

searchedData.match(regex)
}

matchResults()
