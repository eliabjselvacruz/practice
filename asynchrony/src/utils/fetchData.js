let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',url_api, true);
    xmlhttp.onreadystatechange = (() => {
      if(xmlhttp.readyState === 4){
        if(xmlhttp.status === 200){
          resolve(JSON.parse(xmlhttp.responseText));
        } else {
          reject(new Error('Error '+ url_api));
        }
      }
    });
    xmlhttp.send();
  });
}

module.exports = fetchData;