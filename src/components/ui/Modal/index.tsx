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

export const Modal = ({className, children, isOpen, setIsOpen, element = document.body}: ModalProps) => {

    return ReactDOM.createPortal(
        <div className={classNames(cls.modal, {[cls.active]: isOpen}, className)}
             onClick={() => setIsOpen(false)}
        >
            <div className={classNames('border', {[cls.active]: isOpen}, cls.content)}
                 onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>, 
        element
    )
}