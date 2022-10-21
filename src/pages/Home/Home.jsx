import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './home.scss';
import Featured from '../../Components/Featured/Featured';
import List from '../../Components/List/List';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `/api/lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTA2MzY3NjcwZDRhNTliMWZkYzM5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjI2MjkwOSwiZXhwIjoxNjY2NDM1NzA5fQ.NO1LPU_S2lAf-0cFa0uM2hMngL6lrPHOGImoWBWPp0o',
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
