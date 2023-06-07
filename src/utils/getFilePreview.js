import { getFileExtension } from './getFileExtension';

export const getFilePreview = (fileUrl) => {
  const extension = ((typeof fileUrl === 'string') && !fileUrl.ext) ? getFileExtension(fileUrl) : fileUrl.ext;
  const url = ((typeof fileUrl === 'string') && !fileUrl.url) ? fileUrl : fileUrl.url;
  if (extension === 'jpg' || extension === 'jpeg' || extension === 'gif' || extension === 'png') {
    return <img src={url} alt='File Preview' />;
  } else if (extension === 'pdf') {
    return <embed src={url} type="application/pdf" width="100%" height="600px" />;
  } else {
    return <p>File format not supported.</p>;
  }
};