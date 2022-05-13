// STYLES
import "./UploadPhotos.css";

//HOOKS
import { useRef, useState } from "react";

//Material UI ICONS
import { CloudUploadRounded } from "@material-ui/icons";
import { FileCopy } from "@material-ui/icons";

// FIREBASE
import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

// LIBs
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

// COMPONENTS
import Loader from "../Loader";

const UploadPhotos = () => {
  const selectedFileRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [urlAfterUploaded, setUrlAfterUploaded] = useState("");
  const [loading, setLoading] = useState(false);

  const notify = () =>
    toast.success("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      draggablePercent: 30,
    });

  const addPhotos = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const generate = async (e) => {
    e.preventDefault();

    if (selectedFile) {
      setLoading(true);
      setUrlAfterUploaded("");
      const imageRef = ref(
        storage,
        `message/${Math.floor(Math.random() * 9999999999)}/image`
      );

      await uploadString(imageRef, selectedFile, "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          setUrlAfterUploaded(downloadURL);
        }
      );
    }
    setLoading(false);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  console.log(urlAfterUploaded);

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

        {loading && (
          <h2>
            <Loader />
          </h2>
        )}

        {urlAfterUploaded && (
          <>
            <div className="result">
              <p>{truncate(urlAfterUploaded, 40)}</p>

              <CopyToClipboard text={urlAfterUploaded}>
                <button className="" onClick={notify}>
                  <FileCopy />
                </button>
              </CopyToClipboard>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadPhotos;
