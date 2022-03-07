let XMLHttpRequest = required('xmlhttprequest').XMLHttpRequest;

let fetchData = (url_api, callback) => {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url_api, true);
  xmlhttp.onreadystatechang = (event) => {
    if(xmlhttp.readyState === 4){
      if(xmlhttp.status === 200){
        callback(null, JSON.parse(xmlhttp.responseText));
      } else {
        const error = new Error('Error '+ url_api);
        return callback(error, null);
      }
    }
  };
  xmlhttp.send();
}