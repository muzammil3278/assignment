import Link from 'next/link';
function index({ presidents }) {
    return (
        <>
            <p>List of US presidents</p>
            {
                presidents.map(
                    president => <div key={president.id}>

                        <Link href={`Chapter-1-Physical-Quantities-&-Measurement/${president.id}`}>
                            <li><a>{president.name}</a></li>
                        </Link></div>

                )
            }
        </>
    )
}

export default index


export async function getStaticProps(context) {

    const response = await fetch('http://localhost:3000/api/hello', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();

    return {
        props: {
            presidents: data,
        },
    }
}