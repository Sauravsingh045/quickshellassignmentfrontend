import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import DashBoard from './components/DashBoard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Action/DataAction';
import Loading from './components/load/Load';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{ paddingTop: "10px" }} >
      <Header />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  ) : <Loading />
}

export default App