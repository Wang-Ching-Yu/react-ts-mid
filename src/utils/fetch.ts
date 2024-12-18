/**
 * 異步呼叫api, 只可用響應體為 json 的 api
 * @param api 要呼叫的api
 * @returns json 結果
 */
export async function asyncGet(api: string): Promise<any> {
    try {
        const res: Response = await fetch(api)
        try {
            return await res.json()
        } catch (error) {
            return error
        }
    } catch (error) {
        return error
    }
}

export async function asyncPost(api: string, body: {} | FormData) {
    const res: Response = await fetch(api, {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: body instanceof FormData ? body : JSON.stringify(body),
        mode: 'cors',
    });

    try {
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


export async function asyncPatch(api: string, body: {} | FormData) {
    const res: Response = await fetch(api, {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: body instanceof FormData ? body : JSON.stringify(body),
        mode: "cors",
    });
    try {
        let data = await res.json();
        return data;
    } catch (error) {
        console.error("JSON 解析錯誤:", error);
        throw new Error("無法解析後端回應，請檢查 API 是否返回 JSON 格式");
    }
}

export async function asyncDelete(api: string): Promise<any> {
    try {
        const res: Response = await fetch(api, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
        });

        if (!res.ok) {
            throw new Error(`HTTP 錯誤! 狀態碼: ${res.status}`);
        }

        try {
            return await res.json();
        } catch (error) {
            return { message: '成功刪除，無回傳內容。' };
        }
    } catch (error) {
        console.error('DELETE 請求錯誤:', error);
        throw error;
    }
}