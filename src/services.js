import axios from 'axios';

const makePostRequest = dataForSending => {
  const JSONdata = JSON.stringify(dataForSending);
  console.log('JSONdata: ', JSONdata);

  return new Promise((resolve, reject) => {
    axios.post('https://run.mocky.io/v3/950dc5bf-71bf-4134-bb6c-541e9fc68e8d', JSONdata).then(resolve).catch(reject);
  });
};

export default makePostRequest;
