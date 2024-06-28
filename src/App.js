import './App.scss';
import { useCallback, useState, useMemo } from 'react';
import {Form} from './components/Forms/Form';
import { ProductList } from './components/Products/ProductsList';
import {Modal} from './components/Modal/Modal';
import { SearchForm } from './views/PexelsImages/SearchFormHooks';
import { ImagesList } from './views/PexelsImages/ImageList';
import {useLS} from './hooks/useLS';
import {SolidTitle} from './components/Title/SolidTitle';
import { useToggle } from './hooks/useToggle';



function App() {
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [allProducts, setAllProducts] = useLS('products', []);

  const [showModal, setShowModal] = useToggle(false);

  const [searchValue, setSearchValue] = useState('');
  const [perPage, setPerPage] = useState(5);
  const [filter, setFilter] = useState('');

  const addNewProduct = obj => setAllProducts((zuzuzu) => [...zuzuzu, obj]);
  const deleteProduct = id => setAllProducts(zuzuzu => zuzuzu.filter(prod => prod.id !== id));
  // const toggleModal = () => setShowModal(!showModal);


  const getSearchValues = (searchValue, perPage) => {
    setSearchValue(searchValue);
    setPerPage(perPage);
  }

  const handleChangeFilter = useCallback( (e) => {
    // console.log(e.target.value);
    setFilter(e.target.value);
  }, []);

  const filteredProducts = useMemo(() =>{
    let normFilter = filter.toLowerCase();
    return allProducts.filter(prod => 
      prod.title.toLowerCase().includes(normFilter));
  }, [filter, allProducts])

  console.log(filteredProducts);
  
  return (
    <div className="App">
      <SearchForm getSearchValues={getSearchValues}/>
      <ImagesList 
        searchValue={searchValue}
        perPage={perPage}
        />
      
      {showModal && (
        <Modal toggleModal={setShowModal}>
          <Form addNewProduct={addNewProduct} />
        </Modal>
      )}
      
      <h1>Products</h1>
      {/* <SolidTitle titleText="Products"/> */}

      <button type="button" onClick={setShowModal} >Add Product</button>
      <br/>
      <label htmlFor="filter">Filter</label>
      <br/>
      <input type="text" id="filter" value={filter} onChange={handleChangeFilter}/>
      <br/>

      {/* <DeleteButton isOpen={this.state.isOpen} text={text}/>
      <DeleteButton isOpen={!this.state.isOpen}/> */}
     
      <ProductList products={filteredProducts} onDeleteProduct={deleteProduct}/>
      {/* <Counter 
        value={counter} 
        handleDecrement={handleDecrement} 
        handleIncrement={handleIncrement}
      /> */}
      {/* <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <p>{counter}</p>
        <button onClick={handleIncrement}>+</button>
      </div> */}
      {/* <SearchForm add={this.addNewProduct}/>
      <Training/> */}
      {/* <Mycounter/> */}

    </div>
  );
}

export default App;