
import { Navigate } from 'react-router-dom';

export default function ProtectdRoute(props: any) {
    //kiem tra ng dung dnag nhap he thonh hay chua 
    const isLOgin = false;

    if (!isLOgin) {
        return <Navigate to="/login"></Navigate>
    }
    return props.element
}

