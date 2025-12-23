import type { ReactNode } from 'react';

export interface ModalContent {
    title: string;
    text1?: string;
    text2?: string;
    text3?: string;
    code?: string;
    text4?: string;
    example?: string;
    icon?: ReactNode;
    onclick: () => void;
}

export interface BasicCardProps {
    title: string;
    description?: string;
    type?: string;
    mainCode?: string;
    buttonText?: string;
    buttonText2?: string;
    icon?: ReactNode;
    exampleModal?: ModalContent;
    exerciseModal?: ModalContent;
    children?: ReactNode;
    onClick?: () => void;
}
