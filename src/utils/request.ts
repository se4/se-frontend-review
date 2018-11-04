// ant-design-pro request.js file with MIT license
// import 'whatwg-fetch';
import { getToken } from '@/utils/auth';
import router from '@/router';
import { LOGIN_ROUTER } from '@/router/name';

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = response.message;
  const error: any = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(
  url: string,
  options?: any,
): Promise<any> {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }

  const localToken = getToken();
  if (localToken) {
    newOptions.headers = {
      Authorization: getToken(),
      ...newOptions.headers,
    };
  }

  const response = await fetch(url, newOptions);
  try {
    checkStatus(response);
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e);
    if (e.name === 401) {
      router.push({ name: LOGIN_ROUTER });
    } else {
      throw e;
    }
  }

  if (newOptions.method === 'DELETE' || response.status === 204) {
    return response.text();
  }

  const Authorization = await response.headers.get('Authorization');
  const body = await response.json();
  const header = {
    Authorization,
  };

  return { ...body, _header: header };
}
