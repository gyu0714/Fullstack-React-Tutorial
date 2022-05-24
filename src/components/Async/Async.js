import React, { useEffect, useReducer, useState } from 'react';
import { fetchUsers } from '../api/Users';
import axios from 'axios';

const reducer = (state, action) => {
  // console.log(action.error);
  // console.log(state);
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.users,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`error : ${action.type}`);
  }
};

const Async = () => {
  // const [users, setUsers] = useState([]);
  //   const usersData = fetchUsers();
  //   usersData.then((res) => {
  //     console.log(res);
  //   });

  // useReducer
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const getData = async () => {
    const URL = `https://jsonplaceholder.typicode.com/users/`;
    dispatch({
      type: 'LOADING',
    });
    try {
      const response = await axios.get(URL);
      // console.log(response);
      dispatch({
        type: 'SUCCESS',
        users: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: error,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { loading, data: users, error } = state;
  // console.log(loading, users, error);
  // console.log(error);

  if (loading) return <div>로딩 중입니다...</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return null;

  //  version 1
  // const getUsers = () => {
  //   axios
  //     .get(URL)
  //     .then((res) => {
  //       const datas = res.data;
  //       console.log('success');
  //       console.log(datas);
  //       setUsers(datas);
  //     })
  //     .catch((error) => {
  //       console.log(`error : ${error}`);
  //     });
  // };

  //   const [users, setUsers] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [error, seterror] = useState(null);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const URL = `https://jsonplaceholder.typicode.com/users`;
  //       try {
  //         seterror(null);
  //         setUsers(null);
  //         setLoading(true);

  //           const response = await axios.get(URL).then(res => {

  //         });

  //       } catch (error) {
  //         seterror(error);
  //         console.log(`error : ${error}`);
  //       }
  //     };
  //     fetchUsers();
  //   }, []);

  //   if (loading) return <div>로딩중....</div>;
  //   if (error) return <div>에러 발생</div>;
  //   if (loading) return <div>로딩중....</div>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} <b>{user.name}</b>
          </li>
        ))}
      </ul>
      <button onClick={getData}>Data Loading</button>
    </>
  );
};

export default Async;
