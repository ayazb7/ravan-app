"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  // Add full-size image URL
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(selected?.id === card.id ? null : card);
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          onClick={() => handleClick(card)}
          layoutId={`card-${card.id}`}
          className={cn(
            "relative overflow-hidden bg-white rounded-xl cursor-pointer",
            selected?.id === card.id
              ? "absolute inset-0 z-50 w-3/4 h-3/4 m-auto shadow-2xl"
              : "h-full w-full"
          )}
          initial={{ scale: 1 }}
          animate={{ scale: selected?.id === card.id ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {selected?.id === card.id ? (
            <ExpandedCard card={card} />
          ) : (
            <ImageComponent card={card} />
          )}
        </motion.div>
      ))}

      {selected && (
        <motion.div
          onClick={handleOutsideClick}
          className="absolute inset-0 bg-black opacity-0 z-40"
          animate={{ opacity: 0.5 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />
      )}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className="object-cover object-center absolute inset-0 h-full w-full"
      alt="thumbnail"
    />
  );
};

const ExpandedCard = ({ card }: { card: Card }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-white rounded-xl shadow-lg">
      <motion.img
        src={card.thumbnail}
        alt="Expanded"
        className="w-full h-full object-cover rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
