import request from "@/util/request";
import { DOC_MODULE } from "./_prefix";

/**
 * 获取doc列表
 * @returns {{_headers}}
 */
export const fetchDocList = () => {
  return request(`${DOC_MODULE}`);
};

/**
 * 获取doc详情
 * @returns {object} {data:DocSerializer,_header}
 */
export const fetchDoc = (docId = 1) => {
  return request(`${DOC_MODULE}/${docId}`);
};
