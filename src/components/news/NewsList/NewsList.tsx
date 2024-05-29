import React from 'react';
import Image from 'next/image';
import { TypeNews } from '@/@types/AsyncTypes';
import cl from './NewsList.module.css';

type Props = {
    news: TypeNews[];
};

const NewsList: React.FC<Props> = ({ news }) => {
    return (
        <div className={cl.newsContainer}>
            <h3>Последние новости:</h3>
            <ul className={cl.newsList}>
                {news.slice(0, 3).map((item) => (
                    <li key={item.kinopoiskId} className={cl.newsItem}>
                        <div className={cl.newsContent}>
                            <h4 className={cl.newsTitle}>{item.title}</h4>
                            <p className={cl.newsDate}>{new Date(item.publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div className={cl.newsImage}>
                            <Image alt={item.title} src={item.imageUrl} width={100} height={100} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
