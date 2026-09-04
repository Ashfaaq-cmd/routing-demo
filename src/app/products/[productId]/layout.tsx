function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}
export default function ProductDetailsLayout( {
    children,
}: {
    children: React.ReactNode;
}){
     const randomNumber = getRandomInt(2);
    if(randomNumber === 1){
        throw new Error(' Error Loading product');
    }
    return (
        <>
        {children}
        <h2>Featured Products</h2>
        </>
    );
}

