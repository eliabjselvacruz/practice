const somethingWillHappen = () => {
  return new Promise((response, reject) => {
    if(true){
      response('Done!')
    } else {
      reject('Ups!');
    }
  });
};

somethingWillHappen()
  .then((response) => {console.log(response)})
  .catch((err) => {console.error(err)});

const somethingWillHappen2 = () => {
  return new Promise((response, reject) => {
    if(true){
      setTimeout(() => {
        response('Hi...');
      }, 3000);
    } else {
      reject(new Error(':-('));
    }
  });
}

somethingWillHappen2()
  .then((response) => {console.log(response)})
  .catch((err) => {console.error(err)});

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log('Array of results ', response)
  })
  .catch((err) => {
    console.error(err);
  });