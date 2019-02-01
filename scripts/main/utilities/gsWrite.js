/*const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
  }
});

var jsWrite= function (flname){
    const blob = bucket.file(flname);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', (err) => {
     next(err);
    });

blobStream.on('finish', () => {
  // The public URL can be used to directly access the file via HTTP.
  const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
  return publicUrl;
  //res.status(200).send(publicUrl);
});

blobStream.end(req.file.buffer);
};
module.exports= jsWrite;*/