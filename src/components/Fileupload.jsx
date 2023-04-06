import { useState } from "react";

import storage from "../Firebase/FirebaseConfigure";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Gallery from "./Gallery";
export default function Fileupload() {
  const [file, setFile] = useState("");

  const [image, setImage] = useState([]);
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage((state) => state.concat(url));

          console.log(url);
        });
      }
    );
    if (true) {
      alert("Upload Succesfully");
    }
  };

  return (
    <div>
      <div class="container">
        <div
          class="col-md-12 col-sm-12"
          style={{ marginTop: "50px", marginBottom: "150px" }}
        >
          <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
              <input type="file" onChange={handleChange} accept="/image/*" />
              <button onClick={handleUpload}>Upload to Firebase</button>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-sm-12">
          <h1>
            <Gallery image={image} />
          </h1>
        </div>
      </div>
    </div>
  );
}
