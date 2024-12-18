import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="homepage">
      {/* 大字標題 */}
      <h1 className="title">網頁程式設計專案</h1>
      
      {/* 選單按鈕 */}
      <div className="menu-container">
        <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
          選擇功能
        </button>
        {showMenu && (
          <ul className="menu-options">
            <li onClick={() => navigate("/app")}>查看資料</li>
            <li onClick={() => navigate("/add")}>新增資料</li>
            <li onClick={() => navigate("/edit")}>更改資料</li>
            <li onClick={() => navigate("/delete")}>刪除資料</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default HomePage;
