'use strict';

const digits = number => {
  if (![9, 12].includes(number)) {
    return;
  }

  return [...Array(number).keys()].map(() => 1 + Math.floor(Math.random() * 9));
};

export {digits};