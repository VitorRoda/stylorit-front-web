import axios from 'axios';
import { AxiosInstance } from 'axios';
import { ErrorHandler } from '@angular/core';
import { Injectable } from '@angular/core';

export interface Params {
  [key: string]: any;
}

export interface GetOptions {
  url: string;
  params?: Params;
  data?: Params;
}

export interface ErrorResponse {
  id: string;
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiClient {
  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;
  private baseURL: string;
  constructor(errorHandler: ErrorHandler) {
    this.errorHandler = errorHandler;
    this.baseURL = `http://localhost:8000/`;

    this.axiosClient = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  

  public async postEmail<T>(options: GetOptions): Promise<T> {
    debugger
    try {
      var axiosResponse = await this.axiosClient.request<T>({
        method: 'post',
        url: 'http://localhost:8000/send-email',
        params: options.params,
        data: options.data,
      });
      debugger
      return axiosResponse.data;
    } catch (error) {
      debugger
      return error
    }
  }

  // Errors can occur for a variety of reasons. I normalize the error response so that
  // the calling context can assume a standard error structure.
  private normalizeError(error: any): ErrorResponse {
    this.errorHandler.handleError(error);

    // NOTE: Since I'm not really dealing with a production API, this doesn't really
    // normalize anything (ie, this is not the focus of this demo).
    return {
      id: '-1',
      code: 'UnknownError',
      message: 'An unexpected error occurred.',
    };
  }
}
