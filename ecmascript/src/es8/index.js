const data ={
  frontend:'Eliab',
  backend: 'Ana',
  ux: 'Camilo'
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


const data ={
  frontend:'Eliab',
  backend: 'Ana',
  ux: 'Camilo'
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string ='hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'*'));