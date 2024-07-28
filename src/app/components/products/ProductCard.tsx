import Image from "next/image";
import React from "react";
import { TruncateText } from "../../../../utils/TruncateText";
import { formatPrice } from "../../../../utils/formatPrice";
import { Rating } from "@mui/material";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;
  return (
    <div
      className="
    col-span-1 
    cursor-pointer
     border-[1.2px]
     border-slate-200
     bg-slate-50
     rounded-sm
     p-2
    transition
    hover:scale-105
     text-center
     text-small"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square w-full overflow-hidden relative">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4"> {TruncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length}</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
