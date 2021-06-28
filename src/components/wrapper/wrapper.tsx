import React, { FC, useState } from 'react';
import './wrapper.css';

type WrapperProps = {
  component: FC<{ test: string }>;
  title: string;
}

export const Wrapper = ({ component: Component, title }: WrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(1);

  const toggleVisible = () => setIsVisible(!isVisible);

  const handleIncrementClick = () => setCounter(counter + 1);

  return (
    <div className="Wrapper">
      <h2>{title}</h2>
      <ul className="Wrapper__list">
        <li className="Wrapper__item">
          <Component test={`${counter}`}/>
        </li>
        <div className="Wrapper__item">
          <Component test={`${counter}`}/>
        </div>
        <div className="Wrapper__item">
          <Component test={`${counter}`}/>
        </div>
      </ul>
      <div className="Wrapper__button">
        <button onClick={toggleVisible} type="button">parent render</button>
        <button onClick={handleIncrementClick} type="button">increment</button>
      </div>
      <div className="Wrapper__test">
        {isVisible && <p>test block</p>}
      </div>
    </div>
  );
};