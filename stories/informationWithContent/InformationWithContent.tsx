import React, { ReactNode } from 'react';

import './informationWithContent.css';
import { Button } from '../button/Button';

interface informationWithContentProps {
    title: string;
    description: string;
    label: string;
    children: ReactNode;
    type: number;
}

export const InformationWithContent = ({ title, description, label, children, type }: informationWithContentProps) => (
    <>
        {type == 1 && (
            <div className='box-feature b-one'>

                <div className='text' >
                    <span>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2747 4.11851C12.0952 4.06721 11.9048 4.06721 11.7253 4.11851L6.72528 5.54708C6.29598 5.66974 6 6.06212 6 6.5086V11.8831C6 14.1437 7.09176 16.2652 8.93133 17.5792L11.4188 19.3559C11.7665 19.6043 12.2335 19.6043 12.5812 19.3559L15.0687 17.5792C16.9082 16.2652 18 14.1437 18 11.8831V6.5086C18 6.06212 17.704 5.66974 17.2747 5.54708L12.2747 4.11851ZM11.1758 2.19546C11.7145 2.04156 12.2855 2.04156 12.8242 2.19546L17.8242 3.62403C19.1121 3.992 20 5.16916 20 6.5086V11.8831C20 14.7896 18.5963 17.5173 16.2311 19.2067L13.7437 20.9834C12.7006 21.7285 11.2994 21.7285 10.2563 20.9834L7.76886 19.2067C5.40369 17.5173 4 14.7896 4 11.8831V6.5086C4 5.16916 4.88793 3.992 6.17584 3.62403L11.1758 2.19546Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.6839 8.27047C16.0869 8.6482 16.1073 9.28103 15.7295 9.68394L11.9795 13.6839C11.6213 14.0661 11.0289 14.107 10.6215 13.7778L8.37148 11.9596C7.94192 11.6125 7.87509 10.9829 8.22221 10.5533C8.56933 10.1237 9.19896 10.0569 9.62852 10.404L11.1559 11.6383L14.2705 8.31606C14.6482 7.91315 15.281 7.89274 15.6839 8.27047Z" fill="white" />
                        </svg>
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Button label={label} />
                </div>
                <div className='content'>
                    {children}
                </div>
            </div>
        )}
        {type == 2 && (
            <div className='box-feature b-two'>

                <div className='content' >
                    {children}
                </div>
                <div className='text' >
                    <span>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 21H3.86159C3.47768 21 3.23699 20.5853 3.42747 20.2519L4.64529 17.6317C4.7226 17.4653 4.70168 17.2707 4.59721 17.1199C3.5901 15.6665 3 13.9021 3 12C3 7.02944 7.02944 3 12 3C17.297 3 21.524 7.76292 20.9451 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <path d="M19 18C19 19.6569 17.6569 21 16 21C14.3431 21 13 19.6569 13 18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18Z" stroke="white" strokeWidth="2" />
                        </svg>
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Button label={label} />
                </div>
            </div>

        )}
    </>
);
