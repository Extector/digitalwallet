import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Message = {
  msg: string;
}

const toastOptions = {
  className: 'animate__fadeInRight',

};

export const Success = ({ msg } : Message ): void => {
  toast(msg, {
    className: 'animate__fadeInRight'
  });
};

export const Error = () => toast('Uma mensagem');

export const Warning = () => toast('Uma mensagem');
