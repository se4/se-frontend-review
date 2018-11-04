import request from '@/utils/request';
import { DOC_MODULE } from './_prefix';

/**
 * 获取文档列表
 */
export const fetchDocList = (): Promise<
  RequestResult<DocSimpleSerializer[], any, any>
> => {
  return request(`${DOC_MODULE}`);
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
    methods: 'post',
    body: checklist
  });
};
