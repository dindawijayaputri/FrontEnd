import React from "react";
import { Link } from "react-router-dom";

export default function Testimoni({ slugify, testimonials }) {
  return (
    <div className="rounded-lg p-6 flex flex-col">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center md:text-left">
        Testimoni Pengunjung
      </h2>
          
      <div className="flex flex-col space-y-6 overflow-y-auto max-h-[400px] pr-2">
        {testimonials.map(({ name, comment, avatar }) => (
          <Link
            key={name}
            to={`/users/${slugify(name)}`}
            className="block p-4 rounded-lg shadow-md flex space-x-4"
          >
            <img
              src={avatar}
              alt={name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-gray-700 italic mb-2 max-h-24 overflow-y-auto">{`"${comment}"`}</p>
              <h4 className="text-green-900 font-semibold">{name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}