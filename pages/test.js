import React, { useRef, useState } from 'react';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [aspectRatio, setAspectRatio] = useState({ width: 300, height: 300 });
  const canvasRef = useRef(null);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const setSquare = () => setAspectRatio({ width: 300, height: 300 });
  const setLandscape = () => setAspectRatio({ width: 400, height: 200 });
  const setPortrait = () => setAspectRatio({ width: 200, height: 400 });
  const setWide = () => setAspectRatio({ width: 500, height: 200 });

  const downloadImage = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Set canvas dimensions to match the desired aspect ratio
        canvas.width = aspectRatio.width;
        canvas.height = aspectRatio.height;

        // Calculate the scaling factor and position to center the image
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        // Clear the canvas and draw the image
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);

        // Create a data URL and trigger the download
        const imageDownloadLink = document.createElement('a');
        imageDownloadLink.href = canvas.toDataURL('image/png');
        imageDownloadLink.download = 'edited_image.png';
        imageDownloadLink.click();
      };

      img.src = imageSrc;
    }
  };

  return (
    <div className="App">
      <div className="image-upload">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Preview"
            style={{
              width: `${aspectRatio.width}px`,
              height: `${aspectRatio.height}px`,
              objectFit: 'cover'
            }}
          />
        )}
      </div>
      <div className="aspect-ratio-controls">
        <button onClick={setSquare}>Square</button>
        <button onClick={setLandscape}>Landscape</button>
        <button onClick={setPortrait}>Portrait</button>
        <button onClick={setWide}>Wide</button>
      </div>
      {imageSrc && (
        <button onClick={downloadImage} className="download-button">
          Download Image
        </button>
      )}
    </div>
  );
}

export default App;
