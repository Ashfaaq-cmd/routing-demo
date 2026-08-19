"use client";
import { usePathname } from 'next/navigation';
export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewsId = pathname.split('/')[4];
    return (
        <div>
            <h1>Review {reviewsId} Not Found for product {productId}</h1>
           
        </div>
    );
}