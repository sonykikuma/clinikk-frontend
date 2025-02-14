import React, { useEffect, useState } from "react";
import { Card, Spinner, Alert } from "react-bootstrap";

const AllVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/videos");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Videos</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <div className="row">
        {videos.map((video) => (
          <div key={video._id} className="mb-4 col-md-6">
            <Card className="shadow">
              <div className="card-body">
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>{video.description}</Card.Text>
                <video width="100%" controls>
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVideos;
