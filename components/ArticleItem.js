import ArticleStyles from '../styles/Article.module.css';
import Link from 'next/link';

import React from 'react';

const ArticleItem = ({article}) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={ArticleStyles.card}>
                <h3>{article.title} &rarr; </h3>
                <p>{article.body}</p>
            </a>
        </Link>
    );
};

export default ArticleItem;