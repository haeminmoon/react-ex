function Attachment() {
  async function handleUploadChange(e: any) {
    const file = e.target.files[0];

		if (!file) {
      alert('파일이 정상적으로 등록되지 않았습니다.');
			return;
    }
    
		const reader = new FileReader();
    reader.readAsBinaryString(file);
		reader.onload = () => {
			console.log({
        name: file.name,
        type: file.type,
        file: file
      });

      /**
       * S3 Upload Interface 기준으로 첨부파일을 읽게끔 작업했으며, 파일업로드 API의 Param Interface 형태로 변경하여 요청하면 됩니다.
       * 
       * Bucket: 'Bucket url'
       * Key: `${path}/${targetFile.name}`
       * ContentType: targetFile.type
       * Body: targetFile.file
       * ACL: 'public-read'
       */
		};

		reader.onerror = () => {
			console.log('error on load image');
    };
	}

  return (
    <div>
      <input
        accept='*'
        id='button-file'
        type='file'
        onChange={handleUploadChange}
      />
    </div>
  )
}

export default Attachment;