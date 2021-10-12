import data from "../lib/data"


export default function Posts({post}) {
    return (
        <div>
            <h1>hello</h1>

            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
        )

}

export async function getStaticPaths(){
    const posts = data.posts;
    const paths = posts.map((post) => {
        return {
            params : { id : post.id.toString()}
        }
    })

    return {
        fallback : false,
        paths : paths,
    }






}

export async function getStaticProps({ params }) {
    const posts = data.posts;
    const id = params.id;
    
    const findPost =  posts.filter( post => post.id.toString() === id)
    const post = findPost[0];
    // console.log(id);
    // console.log(post);

  return { props : { post }}

 }



 
