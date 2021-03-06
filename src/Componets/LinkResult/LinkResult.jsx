// STYLES
import "./LinkResult.css";

// AXIOS
import axios from "axios";

// REACT HOOKS
import { useEffect, useState } from "react";

//MUI ICONS
import { FileCopy } from "@material-ui/icons";

// LIBs
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer } from "react-toastify";
import { notify } from "../../reusableFunctions/notify";

// COMPONENTS
import Loader from "../Loader";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p className="noData">Something went wrong :(</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>

          <CopyToClipboard text={shortenLink}>
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
      )}
    </>
  );
};

export default LinkResult;
