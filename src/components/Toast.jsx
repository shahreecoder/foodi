import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            className="z-10 mt-16"
        />
    );
};

const notify = (type, message) => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'info':
            toast.info(message);
            break;
        case 'warning':
            toast.warning(message);
            break;
        default:
            toast(message);
    }
};

// eslint-disable-next-line react-refresh/only-export-components
export { Toast, notify };
