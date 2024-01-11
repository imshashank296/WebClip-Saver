import { FaArrowUp } from "react-icons/fa";
export function Features() {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Discover WebClip Saver</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">
            Unlock Media Freedom: WebClip Saver's Seamless Downloading
            Experience.
          </h2>
          <p className="text-body-secondary">
            Effortlessly save videos, images, and stories from diverse social
            media and streaming platforms. Access your preferred content
            hassle-free – from viral videos to trending story – via our
            user-friendly download service.
          </p>
          <a href="#" className="btn btn-lg btn-outline-dark">
            Back To Top <FaArrowUp />
          </a>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Download Video
              </h4>
              <p className="text-body-secondary">
                Capture and save videos from various platforms effortlessly with
                high-quality downloads.{" "}
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Download Photo
              </h4>
              <p className="text-body-secondary">
                Download images swiftly from multiple sources with our intuitive
                image-saving feature.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Download Reel
              </h4>
              <p className="text-body-secondary">
                Effortlessly save Instagram Reels and Stories with ease and
                convenience.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Download Highlight
              </h4>
              <p className="text-body-secondary">
                Save highlights from social media platforms hassle-free for easy
                access anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
