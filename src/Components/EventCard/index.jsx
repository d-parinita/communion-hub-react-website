import { FaInfoCircle } from "react-icons/fa";
import { FaLocationDot, FaEllipsisVertical } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function EventCard({ edit, title, desc, date, location, image, category, deleteEvent, showDetails }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="max-w-xs relative bg-white rounded-lg shadow-lg overflow-hidden">

        <div className="absolute top-56 right-2">
          <button
            className="text-black hover:text-gray-800 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaEllipsisVertical size={18} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-xl overflow-hidden">
              <button onClick={edit} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                <FaEdit /> Edit
              </button>
              <button onClick={deleteEvent} className="flex items-center gap-2 w-full px-4 py-2 text-gray-600 hover:bg-gray-100">
                <FaTrash /> Delete
              </button>
            </div>
          )}
        </div>

        <img
          src={image}
          alt="Event Image"
          width={400}
          height={250}
          className="w-full h-50 object-cover"
        />

        <div className="px-2 max-w-fit ml-4 mt-2 bg-sky-800 text-white rounded-full text-[10px] font-medium">
          {category}
        </div>

        <div className="px-5 pb-5 pt-1">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

          <div className="flex items-center text-gray-600 text-sm mt-2">
            <SlCalender className="mr-2 text-gray-600" /> {date}
          </div>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <FaLocationDot className="mr-2 text-gray-600" /> {location}
          </div>

          <p className="text-gray-700 line-clamp-2 mt-3">
            {desc}
          </p>

          <button onClick={showDetails} className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition">
            <FaInfoCircle size={18} /> Event Details
          </button>
        </div>
      </div>
    </>
  )
}
