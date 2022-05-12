// STYLES
import "./UploadPhotos.css";

//HOOKS
import { useRef, useState } from "react";

//Material UI ICONS
import { CloudUploadRounded } from "@material-ui/icons";

const UploadPhotos = () => {
  const selectedFileRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState("");

  const addPhotos = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const generate = async () => {};

  return (
    <div className="upload__photos">
      <h2 className="upload__photos-title">
        Image to <span>URL</span>
      </h2>
      <div className="upload__photos-box">
        <input hidden type="file" ref={selectedFileRef} onChange={addPhotos} />
        {!selectedFile ? (
          <CloudUploadRounded
            onClick={() => selectedFileRef.current.click()}
            className="upload__photos-box-icon"
          />
        ) : (
          <>
            <img src={selectedFile} alt="" />
            <div className="upload__photos-buttons">
              <button onClick={() => selectedFileRef.current.click()}>
                Choose another photo
              </button>
              <button
                onClick={generate}
                className="upload__photos-generate-btn"
              >
                Generate
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadPhotos;
