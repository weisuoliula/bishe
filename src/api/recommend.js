import http from "@utils/request";
//首页推荐的数据
export const register = (username, password) => http({
    method: 'get',
    url: "/api/pracusers/register",
    data: {
        username,
        password
    },

})
export const login = (username, password) => http({
    method: 'get',
    url: "/api/pracusers/login",
    data: {
        username,
        password
    },

})
export const addbooks = (booksAuth, booksName, booksStatus, booksPrice) => http({
    method: 'post',
    url: "/api/books/addbooks",
    data: {
        booksAuth,
        booksName,
        booksStatus,
        booksPrice
        
    },

})
export const bookslist = _ => http({
    method: 'get',
    url: "/api/books/booksList",
    data: {
        page: 1,
        limit: 10,
    },

})
export const bookdel = (id) => http({
    method: 'get',
    url: "/api/books/delete",
    data: {
        id
    },

})
export const bookmodify = (booksAuth, booksName, booksStatus, booksPrice, id) => http({
    method: 'post',
    url: "/api/books/modify",
    data: {
        booksAuth,
        booksName,
        booksStatus,
        booksPrice,
        id
    },

})
export const pubisharticle = (booksTitle, content) => http({
    method: 'post',
    url: "/api/article/addArticle",
    data: {
        booksTitle,
        content
    },

})
export const articlelist = () => http({
    method: 'get',
    url: "/api/article/articleList",
    data: {
        page: 1,
        limit: 30
    },
})
export const articlecontent = (id) => http({
    method: 'get',
    url: "/api/article/content",
    data: {
        id
    },
})
export const bookpic = (file) => http({
    type: "post",
    url: "/api/upload/urlImage",
    data: file,
    processData: false,
    cache: false,
    contentType: false,
})