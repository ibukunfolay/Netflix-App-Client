import React from 'react';
import './watch.scss';
import { IoMdArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

const Watch = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  return (
    <div className="watch">
      <div className="watch__back" onClick={() => navigate(-1)}>
        <IoMdArrowBack />
      </div>
      <video
        src={state.video}
        autoPlay
        progress
        controls
        className="watch__video"
      />
    </div>
  );
};

export default Watch;
