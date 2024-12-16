import { useNavigate } from "react-router-dom";
import "../style/HomePage.css"; // 新增樣式檔案（可選）

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>網頁程式設計專案</h1>
      <button className="go-app-button" onClick={() => navigate("/app")}>
        前往專案頁面
      </button>
    </div>
  );
}

export default HomePage;
