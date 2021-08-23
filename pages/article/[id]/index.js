import { useRouter } from 'next/router';
import Link from "next/link";
import React from 'react';
import Meta from '../../../components/Meta';

const article = ({article}) => {
    // const router = useRouter();
    // const {id} = router.query;


    return (
    
        <div>
            <Meta title={article.title} description={article.body} />
                <h1>{article.title}</h1><br/>
                <p>{article.body}</p>
                <br/>
                <Link href="/" >Go back</Link>
        </div>
    );
};

// OPTION 1

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return{
        props: {
            article
        }
    }
}


// OPTION :2

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return{
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

//     const articles = await res.json();

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => 
//         ({params: {id : id.toString()}})
//     )

//     return{
//         paths,
//         fallback: false
//     }
// }



export default article;