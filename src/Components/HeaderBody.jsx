import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Loader } from "./Loader";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdInsertPhoto } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

export function HeaderBody() {
  const [videoData, setVideoData] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoThumbnail, setVideoThumbnail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //  const [videoQuality, setVideoQuality] = useState("");
  const [videoDownloadUrl, setVideoDownloadUrl] = useState("");

  const getApidata = async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://social-media-video-downloader.p.rapidapi.com/smvd/get/all",
      params: {
        url: videoUrl,
        filename: "Downloaded Media",
      },
      headers: {
        "X-RapidAPI-Key": "83ab286f9emsha5140e5e3d66c70p12ab94jsn3ca66739f755",
        "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      //console.log("res", response.data);
      setVideoData(response.data);
      setVideoThumbnail(response.data.picture);
      const [{ quality, link }] = response.data.links;
      //setVideoQuality(quality);
      setVideoDownloadUrl(link);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <header className="bg-dark">
        <div className="mb-3 justify-content-center icon-react ">
          <div className="p-2 icon-gap">
            <HiOutlineVideoCamera size={65} />
          </div>
          <div className="p-2 icon-gap">
            <MdInsertPhoto size={65} />
          </div>
          <div className="p-2 icon-gap">
            <FaInstagram size={65} />
          </div>
          <div className="p-2 icon-gap">
            <MdOutlineHistoryToggleOff size={65} />
          </div>
        </div>
        <div className=" text-secondary px-4 py-5 text-center">
          <div className="py-5">
            <h1 className="display-5 fw-bold ">Media Downloader</h1>
            <div className="col-lg-6 mx-auto">
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Paste Media Url"
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center btn-new">
                {!videoData && (
                  <>
                    {isLoading ? (
                      <>
                        {" "}
                        <Loader />
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                          onClick={getApidata}
                        >
                          Download <AiOutlineDownload />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-light btn-lg px-4"
                        >
                          Paste <FaRegClipboard />
                        </button>
                      </>
                    )}
                  </>
                )}

                {videoData && (
                  <>
                    <div id="carbonads">
                      <span>
                        <span className="carbon-wrap">
                          <a href="" className="carbon-img" target="_blank">
                            <img
                              className="card-images"
                              src={videoThumbnail}
                              alt="Media Image"
                            />
                          </a>
                          <a href={videoDownloadUrl} className="carbon-text">
                            <button
                              type="button"
                              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                            >
                              Download <AiOutlineDownload />
                            </button>
                          </a>
                        </span>
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}
const Container = styled.div`
  h1 {
    margin-bottom: 2rem;
    color: deepskyblue;
  }

  .btn-new {
    margin-top: 2rem;
  }

  svg {
    color: white;

    transition: 0.2s ease-in-out;

    &:hover {
      color: deepskyblue;
    }
  }

  .icon-react {
    display: flex;

    gap: 5%;
  }

  .icon-gap {
    margin-top: 5%;
  }


  .card-images{

    border=0; 
    height=100; width=130;
     max-width: 130px;
  }
`;
