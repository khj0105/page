import React from 'react';
import './App.css';

function App() {
  return (
    <div className='body'>
      <header>
        <div className='inbox'>
        <h1 className='logo'><Link to = "/">LOGO</Link></h1>
        <nav className='nav'>
          <ul>
            <li>스토어</li>
            <li>추천제품</li>
            <li>상품</li>
            <li>기획전</li>
            <li>알림</li>
            <li>고객서비스</li>
          </ul>
        </nav>
        <info className='info_menu'>
          <ul>
            <li>검색</li>
            <li>마이페이지</li>
            <li>장바구니</li>
          </ul>
        </info>
        </div>
      </header>
    </div>
  );
}

export default App;
