import {Box, Flex} from '@chakra-ui/layout';
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
    <Box maxW="300px" width="100%" ratio={1} borderWidth="1px" borderRadius="lg" mb={6}>
      {source &&
        <Box display="flex" justifyContent="center" border={1}>
          <img src={source} alt={"snap"}></img>
        </Box>}
      <input
        accept="image/*"
        // className={classes.input}
        id="icon-button-file"
        type="file"
        capture="environment"
        onChange={(e) => handleCapture(e.target)}
      />
    </Box>
  )
}