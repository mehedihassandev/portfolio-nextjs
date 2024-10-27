import Image from "next/image";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

interface ReviewCardProps {
    imageSrc: string;
    name: string;
    position: string;
    review: string;
    rating: number;
}

export default function ReviewCard({
    imageSrc,
    name,
    position,
    review,
    rating,
}: ReviewCardProps) {
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={i}>
                    <IoIosStar />
                </span>
            );
        }

        if (halfStar) {
            stars.push(
                <span key="half">
                    <IoIosStarHalf />
                </span>
            );
        }

        return <div className="flex gap-2 text-xl text-primary">{stars}</div>;
    };

    return (
        <div className="flex h-[300px] flex-col justify-between bg-[#FAFAFA] shadow-sm m-2 p-4 rounded-md">
            <div className="flex flex-col justify-between">
                <div>{renderStars(rating)}</div>
                <div className="mt-6 flex">{review}</div>
            </div>
            <div className="flex pt-5 gap-2">
                <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] rounded-full"
                />
                <div className="pl-3">
                    <h5 className="text-[16px] font-semibold text-black">
                        {name}
                    </h5>
                    <p className="text-[14px] text-gray-500 font-semibold">
                        {position}
                    </p>
                </div>
            </div>
        </div>
    );
}
