import React, {useState, useEffect} from 'react';

export async function getServerSideProps(context) {
  return {
    props: {
      // products: jsonify(products),
    }
  }
}

export default function QR({}) {
  const initialState = {
    store_id: '',
    table_id: ''
  }
  const [qrdata, setQrdata] = useState(initialState);
  const [source, setSource] = useState("");
  
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('/api/users')
  //     .then(res => res.json())
  //     .then(json => {
  //       setAsyncUsers(json);
  //       setLoading(false);
  //     })
  //   }, 1000);
  // }, [])

  return (
    <input
      accept="image/*"
      // className={classes.input}
      id="icon-button-file"
      type="file"
      capture="environment"
      onChange={(e) => handleCapture(e.target)}
    />
  )
}