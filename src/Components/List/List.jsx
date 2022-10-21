import React, { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ListItem from '../ListItem/ListItem';
import './list.scss';

const List = ({ list }) => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="list__title">{list.title}</span>
      <div className="list__wrapper">
        <IoIosArrowBack
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && 'none' }}
        />
        <div className="list__wrapper-container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div>
        <IoIosArrowForward
          className="sliderArrow right"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default List;
