import React from "react";
export default function StarRating({ rating = 0 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center text-xs" aria-label={`Rating ${rating} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`mr-0.5 ${i < full ? "opacity-100" : half && i === full ? "opacity-70" : "opacity-30"}`}>★</span>
      ))}
      <span className="ml-1 text-[11px] opacity-70">{rating?.toFixed(1)}</span>
    </div>
  );
}