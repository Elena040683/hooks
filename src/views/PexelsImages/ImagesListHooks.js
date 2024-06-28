import { useState, useEffect } from "react";
import {PixelsFetchObject} from '../../services/pexels'

const base_url = 'https://api.pexels.com/v1/';
const api_key = 'C0c8jsEIkIzHhJ34LClN7vk5fJStc0qpj2n2MRQ5zthwSKBkRibKG5uF';
const newPexelsFetchObject = new PixelsFetchObject(base_url, api_key);
console.log(newPexelsFetchObject);

export function ImagesList({searchValue, perPage}) {
  const [searchResults, setSearchResult] = useState([]);
  const [status, setStatus] = useState('init');

  useEffect(() => {
    setStatus('pending');
    newPexelsFetchObject.resetPage();
    newPexelsFetchObject.searchQuery = searchValue; 
    newPexelsFetchObject.perPage = perPage;

    newPexelsFetchObject.searchPhotos()
      .then(res => {
        console.log(res);
        //this.setState({ searchResults: res, status: 'success' })
        setStatus('success');
        setSearchResult(res);
      })
      .catch(err => {
        console.log(err);
        //this.setState({status: 'error'})
        setStatus('error');
        // setStatus(() => (err ? 'error' : 'Opps'));
      });
      // return () => alert('UNMOUNT');
  }, [searchValue, perPage]);


  const handleClick = () => {
    newPexelsFetchObject.page = 1;
    console.log(newPexelsFetchObject.page);
    newPexelsFetchObject.searchPhotos()
      .then((res) => {
        console.log(res);
        setSearchResult(prev => [...prev, ...res]);
        setStatus('success');
      })
      .catch(err => {
        //console.log(err);
        setStatus('error');
      })  
  }

  if(status === 'init') {
    return (
    <h1>Hello! Search something.</h1>
    )
  }
  if(status === 'pending') {
    return (
    <h1>Wait please!</h1>
    )
  }
  if(status === 'success') {
    return (
      <>
        <ul>
          {searchResults.map(el => (
            <li key={el.id}>
              <img src={el.src.small} alt={el.alt}/>
            </li>
          ))}
        </ul>   
        <button type='button' onClick={handleClick}>Load more</button>
      </>
    )
  }
  if(status === 'error') {
    return (
      <h1>ALARMA!!!</h1>
    )
  }
}