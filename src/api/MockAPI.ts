import { API } from './API';
import { Result } from '../util/Result';

const defaultAPI = (delay: number): API => ({
  getUser: () => new Promise(resolve => setTimeout(() => resolve(Result.success({ firstName: 'Mock', id: 1 })), delay)),
});

export const mockAPI = (options?: { defaultDelay?: number; overrides?: Partial<API> }): API => {
  return {
    ...defaultAPI(options?.defaultDelay || 1000),
    ...options?.overrides,
  };
};
