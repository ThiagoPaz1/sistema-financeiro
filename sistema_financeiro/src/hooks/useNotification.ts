import { toast } from 'react-toastify';

export default function useNotification (menssagem: string, type: string) {
    if(type === 'error'){
        toast.error(menssagem, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
        })
    } else if(type === 'success'){
        toast.success(menssagem, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
        })
    }
}