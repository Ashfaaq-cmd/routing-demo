import { notFound } from 'next/navigation';

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ProductReview({ params,
}: { params: Promise<{ productId: string, reviewsId: string}>;
})
{
    const randomNumber = getRandomInt(2);
    if(randomNumber === 1){
        throw new Error('Random error occurred');
    }
    const { productId, reviewsId }  = await params
    if(parseInt(reviewsId)>1000){
        notFound();
    }
    return <h1>Review {reviewsId} for product {productId}</h1>;
}