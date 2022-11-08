import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './home.scss';
import Featured from '../../Components/Featured/Featured';
import List from '../../Components/List/List';
import axios from 'axios';
import Cookies from 'js-cookie';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const userdata = Cookies.get('user');
  const user = JSON.parse(userdata);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `/api/lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          },
        );
        setLists(res.data);
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((item, index) => (
        <List key={index} list={item} />
      ))}
    </div>
  );
};

export default Home;
