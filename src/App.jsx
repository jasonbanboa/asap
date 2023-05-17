import { useEffect, useState } from 'react';
import { data as DATA } from '../data/data';
import Search from './components/Search';
import List from './components/List';
import './App.css'
import SortById from './components/SortById';
import SortByLevel from './components/SortByLevel';
import SortByName from './components/SortByName';

function App() {
  const { data, title } = DATA;
  const [listData, setListData] = useState(data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(listData);
    
  }, [listData]);

  const ascendingById = () => {
    setListData(prevState => [...prevState].sort((a, b) => a.id - b.id )); 
  }

  const descendingById = () => {
    setListData(prevState => [...prevState].sort((a, b) => b.id - a.id )); 
  }

  const ascendingByLevel = () => {
    const copyedState = structuredClone(listData);

    copyedState.sort((a, b) => a.level - b.level );
    
    const filtered = copyedState.reduce((acc, el) => {
      if (!el.level) {
        return [el, ...acc];
      }
      return [...acc, el];
    }, []);

    setListData(filtered);
  }

  const ascendingByName = () => {    
    setListData(prevState => [...prevState].sort((a, b) => a.name.localeCompare(b.name)));
  }

  const descendingByName = () => {
    setListData(prevState => [...prevState].sort((a, b) => b.name.localeCompare(a.name))); 
  }

  return (
    <>
      <h1>{title}</h1>
      <SortById ascending={ascendingById} descending={descendingById} />
      <SortByLevel ascending={ascendingByLevel}/>
      <SortByName ascending={ascendingByName} descending={descendingByName} />
      
      <Search search={search} setSearch={setSearch}/>
      <List search={search} listData={listData} />
    </>
  )
}

export default App
