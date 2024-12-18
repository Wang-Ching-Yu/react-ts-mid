import React, { useState } from "react";
import { asyncPatch } from "../utils/fetch";
import { api } from "../enum/api";
import "../style/AddPage.css";
import { useNavigate } from "react-router-dom";

function EditPage() {
    const [formData, setFormData] = useState({
        userName: "",
        name: "",
        department: "",
        grade: "",
        class: "",
        Email: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const sanitizedValue = value.replace(/\//g, "");
        setFormData({ ...formData, [name]: sanitizedValue });
    };

    const handleSubmit = async () => {
        if (formData.userName.trim() === "") {
            alert("請填寫帳號 (userName) 進行修改！");
            return;
        }

        const updateData: { [key: string]: string } = {};
        Object.keys(formData).forEach((key) => {
            if (formData[key as keyof typeof formData].trim() !== "") {
                updateData[key] = formData[key as keyof typeof formData];
            }
        });

        try {
            const cleanedUserName = formData.userName.trim();
            const url = api.editUser.replace(":userName", cleanedUserName);

            const response = await asyncPatch(url, updateData);
            if (response && response.code === 200) {
                alert("修改成功！");
                navigate("/");
            } else {
                alert("修改失敗，請確認輸入內容！");
            }
        } catch (error) {
            alert("修改失敗，發生錯誤！");
            console.error("錯誤詳細資訊：", error);
        }
    };


    const fieldLabels: { [key: string]: string } = {
        userName: "帳號",
        name: "姓名",
        department: "院系",
        grade: "年級",
        class: "班級",
        Email: "電子郵件",
    };

    return (
        <div className="add-container">
            <h1 className="add-title">更改資料</h1>
            <form className="add-form">
                {Object.keys(formData).map((key) => (
                    <div className="form-row" key={key}>
                        <label>{fieldLabels[key]}：</label>
                        <input
                            type="text"
                            name={key}
                            placeholder={
                                key === "userName" ? "請輸入帳號 (必填)" : `請輸入${fieldLabels[key]}(選填)`
                            }
                            value={formData[key as keyof typeof formData]}
                            onChange={handleInputChange}
                            className={key === "userName" ? "required-input" : ""}
                        />
                    </div>
                ))}
                <button type="button" className="submit-button" onClick={handleSubmit}>
                    修改
                </button>
            </form>
        </div>
    );
}

export default EditPage;
