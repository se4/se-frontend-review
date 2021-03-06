import request from '@/utils/request';
import { DOC_MODULE } from './_prefix';

/**
 * 获取文档列表
 */
export const fetchDocList = (): Promise<
  RequestResult<DocSimpleSerializer[], any, any>
> => {
  return request(`${DOC_MODULE}?self=false`);
};

/**
 * 获取文档详情
 * @param docId 文档id
 */
export const fetchDoc = (
  docId = 1
): Promise<RequestResult<DocSerializer, any, any>> => {
  return request(`${DOC_MODULE}/${docId}`);
};

/**
 * 获取check列表
 * @param docId 文档id
 */
export const fetchCheckList = (
  docId = 1
): Promise<RequestResult<CheckListItemSerializer[], any, any>> => {
  return request(`${DOC_MODULE}/${docId}/checklist`);
};

/**
 * 提交check列表
 * @param docId 文档id
 * @param checklist checklist列表
 */
export const postCheckList = (
  docId: number,
  checklist: CheckListItemSerializer[]
): Promise<RequestResult<any, any, any>> => {
  return request(`${DOC_MODULE}/${docId}/checklist`, {
    method: 'POST',
    body: { data: checklist }
  });
};

/**
 * 获得已经被别人评价过的文档列表
 */
export const fetchMyCheckedDocList = (): Promise<
  RequestResult<DocSimpleSerializer[], any, any>
> => {
  return request(`${DOC_MODULE}?self=true`);
};

/**
 * 获得文档结果
 * @param docId 文档id
 */
export const fetchDocResult = (
  docId: number
): Promise<RequestResult<DocResultSerializer[], any, any>> => {
  return request(`${DOC_MODULE}/${docId}/result`);
};
