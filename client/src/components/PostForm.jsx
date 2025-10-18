import { GrUploadOption } from "react-icons/gr";

export default function PostForm() {
  return (
    <>
      <div className="flex">
        <div className="pl-30 pt-20">
          <div className="flex flex-col items-center justify-between w-10/12 h-95 bg-amber-100 border rounded-2xl">
            <div className="flex flex-col justify-between items-center">
              <GrUploadOption size={30} />
              <p>Choose a file or drag and drop it here</p>
            </div>
            <p className="text-sm pb-5">
              We recommend using high-quality .jpg files less <br></br>than 20
              MB or .mp4 filess lass than 200 MB.
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div>
          <form>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Add a title"
              className="bg-gray-300 w-full border rounded-2xl p-2"
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Add a detailed description"
              className="bg-gray-300 w-full border rounded-2xl p-2"
            />
            <label htmlFor="link">Link</label>
            <input
              type="url"
              placeholder="Add a link"
              className="bg-gray-300 w-full border rounded-2xl p-2"
            />
            <button
              type="submit"
              className="w-1/4 bg-amber-200 py-2 rounded-3xl mt-5"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
