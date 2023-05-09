import axios, { AxiosRequestConfig } from 'axios';

const BASE_URI = 'https://oridsan.fly.dev/api/v1'

const config = {
    headers: {
      'Content-Type': 'application/json',
    //   'x-auth-token': store.token,
    },
  };


const mergeConfig = (config: any): AxiosRequestConfig<any> => {
    return {
      ...config,
      headers: {
        ...config.headers,
      },
      params: {
        ...config.params,
      },
    };
  }    

interface Event {
  id: number;
  name: string;
  // add more properties here as needed
}

export const getChapters = async (): Promise<Event[]> => {
  try {
    const response = await axios.get(`${BASE_URI}/events`, config);
    console.log(response.data)
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch events: ${error.message}`);
    } else {
      throw new Error(`Failed to fetch events: ${JSON.stringify(error)}`);
    }
  }
};