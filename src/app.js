import { useState } from 'react';
import { useReducer } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  // const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});

  const initialState = {
    loading: false,
    results: {},
    history: [
      {
        method: '',
        url: '',
        results: {},
      }
    ],
  };

  function reducer( state, action ) {

    switch( action.type ) {
      case '':
        return {};
      case '':
        return {};
      default: 
         throw new Error(); 
    }
  }


  const callApi = async (formParams) => {
    let API_URL = formParams.url;
    const response = await axios.get(API_URL);
    // mock output
    const data = {
      Headers: response.headers,
      count: response.data.count,
      Response: response.data.results
    };
    setData(data);
    setRequestParams({...requestParams, ...formParams});
  }

  
    return (
      <>
        <Header />
        <Form 
          setRequestParams={setRequestParams} 
          requestParams={requestParams}
          handleApiCall={callApi} />
        <section>
          <div>Request Method: {requestParams.method}</div>
          <div>URL: {requestParams.url}</div>
          </section>  
        {data ? <Results data={data} /> : <p>loading...</p>}
        <Footer />
      </>
    );
}

export default App;
