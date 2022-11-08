import React, { useEffect, useState } from 'react';
import header from '../../assets/header1.jpg';
import anikulapo from '../../assets/anikulapo.png';
import { IoIosInformationCircleOutline, IoMdPlay } from 'react-icons/io';
import './featured.scss';
import { genres } from '../../data';
import axios from 'axios';
import Cookies from 'js-cookie';

const Featured = ({ type }) => {
  const [content, setContent] = useState({});
  const userdata = Cookies.get('user');
  const user = JSON.parse(userdata);

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const res = await axios.get(`/api/movies/random?type=${type}`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        setContent(res.data[0]);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomMovie();
  }, [type]);

  return (
    <div className="featured__container">
      {type && (
        <div className="featured__category">
          <span> {type === 'movie' ? 'Movies' : ' Series'} </span>
          <select name="genre" id="genre">
            {genres.map((item) => (
              <option value={item.value}>{item.name}</option>
            ))}
          </select>
        </div>
      )}

      <img src={content.img} alt="" width="100%" />
      <div className="featured__info">
        <img src={content.imgTitle} alt="" />
        <span className="featured__info-desc">{content.desc}</span>
        <div className="featured__info-buttons">
          <button className="play">
            <IoMdPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <IoIosInformationCircleOutline />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
