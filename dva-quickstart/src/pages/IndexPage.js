import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Link,routerRedux} from 'dva/router'
function IndexPage({dispatch,IndexPage}) {
  const {ceshi} = IndexPage
  function onClick(){
    dispatch(routerRedux.push({
      pathname: '/products',
    }));
  }
  function changeState(){
    dispatch({
      type:"IndexPage/changeCeshi",
      payload:{
        value:"修改"
      }
    })
  }
  return (
    <div className={styles.normal}>
      <div>index page</div>
      <button onClick={onClick}>onClick</button>
      <button onClick={changeState}>changeState</button>
      <div>ceshi {ceshi} </div>
      <Link to="/products">products</Link> | 
      <Link to="/example">example</Link>
    </div>
  );
}
export default connect(({IndexPage})=>({
  IndexPage
}))(IndexPage);
