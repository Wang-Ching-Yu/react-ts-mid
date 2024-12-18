export enum api{
    findAll = "http://127.0.0.1:27018/api/v1/user/findAll",
    addUser = "http://127.0.0.1:27018/api/v1/user/insertOne",
    editUser = "http://127.0.0.1:27018/api/v1/user/updateOne/:userName",
    deleteUser = "http://127.0.0.1:27018/api/v1/user/deleteOne/:userName",
}