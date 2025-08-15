import { Star } from "react-feather";
import React from "react";
const reviews = [
  {
    id: 1,
    studentName: "Rahul Sharma",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review: "Amazing course! Learned so much about web development.",
    date: "Aug 10, 2025",
  },
  {
    id: 2,
    studentName: "Priya Verma",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    review: "Very detailed explanations, but could add more practice projects.",
    date: "Aug 8, 2025",
  },
  {
    id: 3,
    studentName: "Ankit Singh",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    review: "Best instructor I've learned from! Highly recommended.",
    date: "Aug 5, 2025",
  },
];

const Reviews=()=> {
  return (
    <div className="p-6 bg-white shadow rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="border rounded-lg p-4 flex space-x-4 hover:shadow-lg transition"
          >
            <img
              src={rev.avatar}
              alt={rev.studentName}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{rev.studentName}</h3>
                <span className="text-sm text-gray-500">{rev.date}</span>
              </div>

              {/* Rating stars */}
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < rev.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-700 mt-2">{rev.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Reviews