"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ImageType } from "@/app/types/image";
import { DirectionAwareHover } from "./direction-aware-hover";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export const ParallaxScroll = ({
  images,
  className,
  onPageChange,
  currentPage,
  isLoading,
}: {
  images: ImageType[];
  className?: string;
  onPageChange: (page: number) => void;
  currentPage: number;
  isLoading: boolean;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.floor(images.length / 3);
  const remainder = images.length % 3;

  const firstPart = images.slice(0, third + (remainder > 0 ? 1 : 0));
  const secondPart = images.slice(firstPart.length, firstPart.length + third + (remainder > 1 ? 1 : 0));
  const thirdPart = images.slice(firstPart.length + secondPart.length);

  const handlePrevious = () => {
    if (currentPage > 1 && !isLoading) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isLoading) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div
      className={cn("md:h-[calc(100vh-6rem)] h-[calc(100vh-10rem)] items-start overflow-y-auto w-full hide-scrollbar mt-16", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-2 lg:grid-cols-3 items-start max-w-full mx-auto gap-10 pt-10 px-10 md:px-40"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <DirectionAwareHover
                className="md:h-80 md:w-80 h-40 w-40 shadow-[0px_8px_15px_0px_#4a5568]"
                imageUrl={el.download_url}
              >
                <p className="font-bold text-xl">{el.author}</p>
              </DirectionAwareHover>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 ">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <DirectionAwareHover
                className="md:h-80 md:w-80 h-40 w-40 shadow-[0px_8px_15px_0px_#4a5568]"
                imageUrl={el.download_url}
              >
                <p className="font-bold text-xl">{el.author}</p>
              </DirectionAwareHover>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <DirectionAwareHover
                className="md:h-80 md:w-80 h-40 w-40 shadow-[0px_8px_15px_0px_#4a5568]"
                imageUrl={el.download_url}
              >
                <p className="font-bold text-xl">{el.author}</p>
              </DirectionAwareHover>
            </motion.div>
          ))}
        </div>

      </div>
      <div className='flex items-center justify-center gap-x-5 pb-10'>
        <Button
          variant="expandIcon"
          Icon={ArrowLeftIcon}
          iconPlacement="left"
          onClick={handlePrevious}
          disabled={currentPage === 1 || isLoading}>
          Previous
        </Button>
        <span className="font-medium">Page {currentPage}</span>
        <Button
          variant="expandIcon"
          Icon={ArrowRightIcon}
          iconPlacement="right"
          onClick={handleNext}
          disabled={isLoading}>
          Next
        </Button>
      </div>
    </div>
  );
};
