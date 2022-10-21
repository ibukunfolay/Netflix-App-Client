import React, { useEffect, useState } from 'react';
import './listItem.scss';
import { IoMdAdd, IoMdPlay } from 'react-icons/io';
import {
  MdOutlineThumbUpOffAlt,
  MdOutlineThumbDownOffAlt,
} from 'react-icons/md';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/api/movies/find/' + item, {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTA2MzY3NjcwZDRhNTliMWZkYzM5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjI2MjkwOSwiZXhwIjoxNjY2NDM1NzA5fQ.NO1LPU_S2lAf-0cFa0uM2hMngL6lrPHOGImoWBWPp0o',
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={'/watch'} state={movie}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay loop muted />
            <div className="listItem__info">
              <div className="listItem__info-icons">
                <IoMdPlay className="listItem__info-icon" />
                <IoMdAdd className="listItem__info-icon" />
                <MdOutlineThumbUpOffAlt className="listItem__info-icon" />
                <MdOutlineThumbDownOffAlt className="listItem__info-icon" />
              </div>
              <div className="listItem__info-top">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="listItem__desc">{movie.desc}</div>
              <div className="listItem__genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
