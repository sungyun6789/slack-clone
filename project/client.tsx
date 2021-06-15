import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './layouts/App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);

/*
  해당 프로젝트 폴더 구조
  pages - 서비스 페이지
  components - 컴포넌트
  layouts - 공통 레이아웃
*/
