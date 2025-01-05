import { ProductCard } from "./ProductCard"

export const ProductCards = () => {
    return(
        <div className="flex flex-col items-center gap-y-4">
                    <div className="w-[85%] mt-2 grid gap-4 grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        </div>
    )
}