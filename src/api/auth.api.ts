import request from '@/utils/request';
import { AUTH_MODULE } from './_prefix';

/**
 * 登陆
 * @param loginInfo 登陆信息
 */
export const login = (
  loginInfo: LoginInfo
): Promise<RequestResult<UserSerializer, any, any>> => {
  return request(`${AUTH_MODULE}/login`, {
    method: 'POST',
    body: loginInfo
  });
};

/**
 * 注册
 * @param registerInfo 注册信息
 */
export const register = (
  registerInfo: RegisterInfo
): Promise<RequestResult<UserSerializer, any, any>> => {
  return request(`${AUTH_MODULE}/register`, {
    method: 'POST',
    body: registerInfo
  });
};
