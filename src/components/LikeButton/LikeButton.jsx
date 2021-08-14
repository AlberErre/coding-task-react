import React from 'react';
import classnames from 'classnames';

import styles from './LikeButton.module.css';

export const LikeButton = ({ isLiked, onClick }) => (
  <button
    className={classnames('buttonReset', styles.likeButton)}
    onClick={onClick}
    type="button"
  >
    {/* //NOTE: add invisible text to handle accessibility
    source -> https://dequeuniversity.com/rules/axe/3.5/button-name?application=axeAPI */}
    <p className="invisibleText">like button</p>

    <svg height="26" width="28" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.5 0c-2.889 0-5.489 1.869-6.5 4.313C11.989 1.869 9.389 0 6.5 0 2.889 0 0 2.731 0 6.469 0 11.5 5.489 15.525 13 23c7.511-7.475 13-11.5 13-16.531C26 2.73 23.111 0 19.5 0z"
        fill={isLiked ? '#fff' : 'none'}
        fillRule="evenodd"
        stroke="#fff"
        // NOTE: we need to apply transform to center path inside svg
        transform="translate(0.5, 1.5)"
      />
    </svg>
  </button>
);
