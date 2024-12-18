import { useState } from 'react';
import { asyncDelete } from '../utils/fetch';
import { api } from '../enum/api';
import { useNavigate } from 'react-router-dom';
import '../style/DeletePage.css';

function DeletePage() {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (userName.trim() === '') {
            alert('請填寫帳號 (必填)！');
            return;
        }

        try {
            const url = api.deleteUser.replace(':userName', `:${userName}`);
            const response = await asyncDelete(url);

            if (response && response.code === 200) {
                alert('刪除成功！');
                navigate('/');
            } else {
                alert(response?.message || '刪除失敗，請確認帳號是否存在！');
            }
        } catch (error) {
            alert('刪除失敗，發生錯誤！');
            console.error('錯誤詳細資訊:', error);
        }
    };

    return (
        <div className="delete-container">
            <h1 className="delete-title">刪除資料</h1>
            <div className="delete-form">
                <div className="form-row">
                    <label>帳號：</label>
                    <input
                        type="text"
                        placeholder="請輸入帳號 (必填)"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value.trim())}
                    />
                </div>
                <button type="button" className="delete-button" onClick={handleDelete}>
                    刪除
                </button>
            </div>
        </div>

    );
}

export default DeletePage;
