import * as axios from 'axios';
import * as https from 'https';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export type RequestResponse = {
  status: number;
  response?: unknown;
};

export async function postRequest({
  data,
  route,
  headers,
}: {
  data?: unknown;
  route: string;
  headers?: Record<string, string>;
}): Promise<RequestResponse> {
  try {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    const response = await axios.default({
      method: 'post',
      url: route,
      headers: headers,
      data: data,
      httpsAgent: agent,
    });
    console.info(
      `Request on the route ${route} completed successfully with status ${
        response.status
      } and data : ${JSON.stringify(response.data)}`
    );
    return { response: response.data, status: response.status };
  } catch (err) {
    if (axios.default.isAxiosError(err)) {
      const error: axios.AxiosError = err;
      const response = error.response;
      if (response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.warn(
          `The POST request was made on the router ${route} and the server responded with a status code ${
            response.status
          } with data response: ${JSON.stringify(response.data)}`
        );
        return { status: response.status, response: response.data };
      }
      if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.warn(
          `The POST request was made on the router ${route} but no response was received. config data: ${error.config?.data}`
        );
        return { status: 0, response: error.config?.data };
      }

      console.warn(
        `The POST request was made on the router ${route} but Something happened in setting up the request that triggered an Error. Error message: ${error.message}`
      );
      return { status: 404, response: error.message };
    }
    console.warn(
      `[Axios] failed to send post request on the route: ${route}\n error: ${err}`
    );
    return { status: 404, response: err };
  }
}
