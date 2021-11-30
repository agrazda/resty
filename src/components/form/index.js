import { useState, useEffect } from 'react';
import './form.scss';

function Form(props) {

  const[requestData, setRequestData] = useState({})
  const[requestUrl, setRequestUrl] = useState('')
  const [activeMethod, setActiveMethod] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: requestData,
      url: requestUrl,
      text: requestUrl
    };
    props.handleApiCall(formData);
  }

  const handleActive = (target) => {
    if (activeMethod) {
      activeMethod.classList.remove('active');
    }
    setActiveMethod(target);
    target.classList.add('active');
  };

  const handleClick = (e) => {
    let method = e.target.id.toUpperCase();
    setRequestsData(method);
    props.setRequestParams({...props.requestParams, method: value})

    handleActive(e.target);
  }

  useEffect(() => {
    console.log('Updated.');
  }, [requestUrl]);

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input 
              onChange= {(e) => setRequestUrl(e.target.value)}
              name='url' 
              type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <button type= 'button' onClick={handleClick} id="get" value="GET">GET</button>
            <button type= 'button' onClick={handleClick} id="post" value="POST">POST</button>
            <button type= 'button' onClick={handleClick} id="put" value="PUT">PUT</button>
            <button type= 'button' onClick={handleClick} id="delete" value="DELETE">DELETE</button>
          </label>
          <textarea onChange={(e) => setRequestData(e.target.value)} name='json'/>
        </form>
      </>
    );
}

export default Form;
