import classNames from 'classnames';
import cls from './style.module.scss'
import ReactDOM from 'react-dom';
import { ReactNode } from 'react';

interface ModalProps{
    className?: string
    children: ReactNode
    element?: Element
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const Modal = (props: ModalProps) => {
    const {className, children, isOpen, setIsOpen, element = document.body} = props;

    const modalClass = classNames(cls.modal, {[cls.active]: isOpen})
    const contentClass = classNames('border', {[cls.active]: isOpen}, cls.content, className)

    return ReactDOM.createPortal(
        <div className={modalClass}
             onClick={() => setIsOpen(false)}
        >
            <div className={contentClass}
                 onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>, 
        element
    )
}