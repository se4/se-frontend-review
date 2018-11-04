import request from '@/utils/request';
import { USER_MODULE } from './_prefix';

/**
 * 获得用户信息
 * @param userId 用户id
 */
export const fetchUserProfile = (
  userId: number
): Promise<RequestResult<UserSerializer, any, any>> => {
  return request(`${USER_MODULE}/${userId}`);
};

/**
 * 更新用户信息
 * @param userId 用户id
 * @param nextProfile 更新的用户信息
 */
export const updateProfile = (
  userId: number,
  nextProfile: NextProfile
): Promise<RequestResult<UserSerializer, any, any>> => {
  return request(`${USER_MODULE}/${userId}`, {
    method: 'POST',
    body: nextProfile
  });
};

/**
 * 更改密码
 * @param userId 用户id
 * @param oldPassword 旧密码
 * @param password 新密码
 */
export const changePassword = (
  userId: number,
  oldPassword: string,
  password: string
): Promise<RequestResult<UserSerializer, any, any>> => {
  return request(`${USER_MODULE}/${userId}/password`, {
    method: 'POST',
    body: {
      oldPassword,
      password
    }
  });
};
