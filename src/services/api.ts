import { BACKEND_URL } from './baseUrl';

export const apiUrl = {
  tempApi: (params: string) => `${BACKEND_URL}/${params}`,
};
