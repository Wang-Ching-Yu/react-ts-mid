import React, { useState } from 'react';
import { asyncPost } from '../utils/fetch';
import { api } from '../enum/api';
import "../style/AddPage.css";
import { useNavigate } from "react-router-dom";


function AddPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        name: '',
        department: '',
        grade: '',
        class: '',
        Email: '',
    });

    const fieldLabels: { [key: string]: string } = {
        userName: '帳號',
        name: '姓名',
        department: '院系',
        grade: '年級',
        class: '班級',
        Email: '電子郵件',
    };

    const placeholderTexts: { [key: string]: string } = {
        userName: '例如：tkuib0163',
        name: '例如：王敬瑜',
        department: '例如：國際企業系',
        grade: '例如：四年級',
        class: '例如：A',
        Email: '例如：410550163@gms.tku.edu.tw',
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await asyncPost(api.addUser, formData); // 呼叫後端 API
            if (response && response.code === 200) { // 假設回傳成功代碼是 200
                alert('新增成功！');
                navigate('/'); // 導向首頁
            } else {
                alert('新增失敗！請再試一次。'); // API 回傳錯誤
            }
        } catch (error) {
            alert('新增失敗！請再試一次。');
            console.error(error);
        }
    };

    return (
        <div className="add-container">
            <h1 className="add-title">新增資料</h1>
            <form className="add-form">
                {Object.keys(formData).map((key) => (
                    <div className="form-row" key={key}>
                        <label>{fieldLabels[key]}：</label>
                        <input
                            type="text"
                            name={key}
                            placeholder={placeholderTexts[key]}  // 使用範例文字
                            value={(formData as any)[key]}
                            onChange={handleInputChange}
                        />
                    </div>
                ))}
                <button type="button" className="submit-button" onClick={handleSubmit}>
                    送出
                </button>
            </form>
        </div>
    );
}

export default AddPage;
