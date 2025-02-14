import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const AddVideo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const fileHandler = (e) => {
    setVideoUrl(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!videoUrl) {
      setError("Please select a video.");
      return;
    }

    setUploading(true);
    setError(null);
    setMessage(null);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", videoUrl);

    try {
      const response = await fetch("http://localhost:3000/uploadVideo", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "upload failed");
      }
      setMessage("video uploaded successfully");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      setTitle("");
      setDescription("");
      setVideoUrl(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center">Add a new Video</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}

        <form onSubmit={submitHandler}>
          <div className="mb-2">
            <label>Title:</label>
            <input
              type=""
              placeholder="Video Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>Description:</label>
            <textarea
              type=""
              placeholder="Video short description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label>Upload Video:</label>
            <input
              type="file"
              accept="video/*"
              onChange={fileHandler}
              required
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary "
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Video"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddVideo;
