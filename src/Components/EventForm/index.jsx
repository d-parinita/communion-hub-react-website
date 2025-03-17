import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { addEventData, getEventById, getUserData, updateInDb, uploadFile } from "../../supabase-service";
import { toast } from "react-toastify";
import { constVariables } from "../../utils/constVariables";
import { useLoader } from "../../context/LoaderContext";

export default function EventForm({ close, id, fetchData }) {

  const { setLoading } = useLoader()

  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    image: '',
    location: '',
    category: '',
    desc: '',
    user_id: ''
  })
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (id) {
      getEvent(id);
    }
  }, [id])

  const getEvent = async (id) => {
    setLoading(true)
    try {
      const data = await getEventById(id, constVariables.TABLES.EVENT)
      setEventData({
        image: data?.image,
        title: data?.title,
        desc: data?.desc,
        id: data?.user_id,
        category: data?.category,
        location: data?.location,
        date: data?.date,
      })
    } catch (error) {
      toast.error("Error fetching data");
    } finally {
        setLoading(false)
    }
  }

  const userData = async () => {
    const response = await getUserData()
    setEventData({
      ...eventData,
      user_id: response?.user?.id
    })
    if (response?.error) {
      toast.error("Error fetching user");
    }
  }

  const handleFileChange = (e) => {
    setImage(e.target.files?.[0]);
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      let finalImageUrl = eventData?.image;
      if (image) {
        finalImageUrl = await uploadFile(image, constVariables.BUCKETS.EVENT);
      }
      await saveEventData(finalImageUrl);
    } catch (error) {
      toast.error('Error saving Event: ' + error.message);
    } finally {
        setLoading(false)
    }
  }

  const saveEventData = async (imageUrl) => {
    setLoading(true)
    try {
      const payload = {
        title: eventData?.title,
        desc: eventData?.desc,
        image: imageUrl,
        category: eventData?.category,
        user_id: eventData?.user_id,
        location: eventData?.location,
        date: eventData?.date,
      }
      if (id) {
        try {
          const update = await updateInDb(id, payload, constVariables.TABLES.EVENT);
          toast.success('Updated successfully');
          close()
          fetchData()
        } catch (error) {
          toast.error('Error updating Event');
        } finally {
            setLoading(false)
        }
      } else {
        try {
          const addData = await addEventData(payload, constVariables.TABLES.EVENT);
          toast.success('Event posted successfully!');
          close()
          fetchData()
        } catch (error) {
          toast.error('Error adding data');
        } finally {
            setLoading(false)
        }
      }
      setEventData({
        ...eventData,
        title: '',
        date: '',
        image: '',
        location: '',
        category: '',
        desc: '',
        user_id: ''
      })
      setImage(null)
    } catch (error) {
      toast.error('Error saving Event');
    } finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    userData()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-opacity-20">
        <div className="bg-white relative mt-20 text-black px-6 py-4 rounded-lg w-100 shadow-lg">

          <button
            onClick={close}
            className="absolute top-3 right-3 text-gray-900 hover:text-gray-800"
          >
            <RxCross2 size={18} />
          </button>

          <h2 className="text-xl font-bold mb-4">{id ? 'Edit Event' : 'Create Event'}</h2>

          <div className="space-y-3">
            <div>
              <label className="block mb-1 text-sm">Title</label>
              <input
                type="text"
                onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                value={eventData?.title}
                className="w-full bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter title"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="w-full bg-gray-100 rounded-lg p-2 file:bg-gray-300 file:border-none file:text-black"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Date</label>
              <input
                type="date"
                onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                value={eventData?.date}
                className="w-full bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Location</label>
              <input
                type="text"
                onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                value={eventData?.location}
                className="w-full bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter location"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Description</label>
              <textarea
                className="w-full bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                rows={3}
                onChange={(e) => setEventData({ ...eventData, desc: e.target.value })}
                value={eventData?.desc}
                placeholder="Enter description"
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 text-sm">Category</label>
              <select
                onChange={(e) => setEventData({ ...eventData, category: e.target.value })}
                value={eventData?.category}
                className="w-full bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>Select Category</option>
                <option>Charity</option>
                <option>Religious</option>
                <option>Social</option>
              </select>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={handleSubmit}
                className="px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                {id ? 'Edit' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
