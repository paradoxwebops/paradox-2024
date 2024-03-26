"use client";

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "@/store";
import { useToast } from "@/contexts";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { axios } from "@/lib/axios";
// import {doRefreshToken} from '@/lib/methods'
// import { setAuth } from '@/store/actions'

const useAxios = () => {
  const [isSet, setisSet] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { toast } = useToast()
//   const dispatch = useDispatch()
  
  const { access_token, refresh_token } = auth;

  const callbacks = {
    request: {
      res: (config: InternalAxiosRequestConfig) => {
        if (!!!config?.headers?.Authorization) {
          config.headers.Authorization = "Bearer " + access_token;
        }
        return config;
      },
      err: (err: AxiosError | Error | any) => {
        const error = err.response;

        toast({
          title: `Status ${error?.status}: Something went wrong`,
          description: error?.data?.message,
          variant: "destructive",
        });

        return Promise.reject(err);
      },
    },

    response: {
      res: (response: AxiosResponse) => {
        return response;
      },
      err: (err: AxiosError | Error | any) => {
        const error = err.response;
        // console.log('Error from axios')
        console.log(error);


        
        
        switch (error?.status) {
          case 401:
            // if (!!refresh_token) {
            //   console.log('doing refresh');
              
            //   doRefreshToken({refresh_token}).then((tokens) => dispatch(setAuth({...tokens})))
            // }
            // if (!!access_token && !!refresh_token)
            break;

          default:
              toast({
                title: `Status ${error?.status}: Something went wrong`,
                description: error?.data?.message,
                variant: "destructive",
              });
            break;
        }


        return null;
      },
    },
  };

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      callbacks.request.res,
      callbacks.request.err
    );

    const responseInterceptor = axios.interceptors.response.use(
      callbacks.response.res,
      callbacks.response.err
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
      // setisSet(true);
    };
  }, [access_token]);
  
  return {axios};
};

export { useAxios };
