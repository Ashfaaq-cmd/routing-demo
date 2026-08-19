export default async function Doc({params,}
    : { params: Promise<{ slug: string[] }>;
}) {
    const { slug }  = await params;
    if (slug?.length ===2) {
        return <h1>Doc Page for {slug[0]} and Concept {slug[1]}</h1>;
    }
    else if (slug?.length ===1) {
        return <h1>Viewing Docs for {slug[0]}</h1>;
    }
    return <h1>Doc Home Page</h1>;
}