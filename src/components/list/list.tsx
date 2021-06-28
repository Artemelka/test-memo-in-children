import React, { memo } from 'react';

type ListProps = {
  test: string;
};

export const List = ({ test }: ListProps) => (
  <div>
    <p>test prop: {test}</p>
    <ul>
      {[...new Array(30)].map((_, index) => (
        <li key={index}>
          list item {index + 1}
        </li>
      ))}
    </ul>
  </div>
);

export const MemoList = memo(List);