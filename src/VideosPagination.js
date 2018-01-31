import React from 'react';
import { Pagination  } from "react-bootstrap";

let active = 1;
let items = [];
for (let number = 1; number <= 10; number++) {
  items.push(
    <Pagination.Item active={number === active} key={items}>{number}</Pagination.Item>
  );
}

const paginationBasic = (
  <div className='pagination-numbers'>
    <Pagination bsSize="medium">{items}</Pagination>
  </div>
);

export default paginationBasic;
