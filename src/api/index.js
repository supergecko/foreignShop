import { getAction, deleteAction, putAction, postAction, httpAction } from './manage.js'
//登陆
const login = (params)=>postAction("/api/user/login",params);
const info = (params)=>getAction("/api/user/info",params);
//注册账号
const registerAccount = (params)=>postAction("/api/user/register",params);
export {
  login,
  registerAccount,
  info
}