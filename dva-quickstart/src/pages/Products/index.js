import React from 'react'
import { connect } from 'dva';
import {Link,browserHistory,routerRedux } from 'dva/router'
import ProductList from '../../components/ProductList';
const Products = ({ dispatch, products }) => {
    function handleDelete(id) {
      dispatch({
        type: 'products/delete',
        payload: id,
      });
    }
    function onClick(){
      console.log('dispatch', dispatch)
      console.log('routerRedux', routerRedux)
      dispatch(routerRedux.push({
        pathname: '/',
      }));
    }
    return (
      <div>
        <h2>List of Products</h2>
        <Link to='/'>跳转home</Link>
        <button onClick={onClick}>click</button>
        <ProductList onDelete={handleDelete} products={products} />
      </div>
    );
  };
  
  // export default Products;
  export default connect(({ products }) => ({
    products,
  }))(Products);