const storage = {
  upload: (files, metadata) => {
    console.log({ files, metadata });
  },
  download: (identifier) => {
    console.log("download ", identifier);
  },
};

export default storage;
