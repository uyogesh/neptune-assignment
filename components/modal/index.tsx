import styles from './style.module.css'
import { GrClose } from 'react-icons/gr'

type ModalProps = {
    open: boolean;
    title: string;
    children: React.ReactNode;
    handleClose: () => void;
}

const Modal = ({open, title, children, handleClose}: ModalProps) => {
    return (
        <div className={`${styles["modal-bg"]} ${open&&styles["shown"]}`} >   
            <div className={styles["modal-body"]}>
                <div className={styles["modal-title"]}>
                    <h1>{title}</h1>
                    <button onClick={handleClose} className={styles["btn-close"]} aria-label="Close Modal" ><GrClose size={18} color={`black`}/></button>
                </div>
                <div>
                    {children}
                </div>
                </div>
        </div>
    )
}

export default Modal;