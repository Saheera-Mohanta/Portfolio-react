import React from 'react';
import './project.css'; 

const Project = () => {
  // Example data for the images
  const images = [
    { src: 'https://cdn.alza.cz/Foto/ImgGalery/Image/netflix-title_1.jpg', text: 'JS', link: 'https://github.com/Saheera-Mohanta/Netflix-Clone' },
    { src: 'https://www.bandt.com.au/information/uploads/2020/01/Annotation-2020-01-17-081356-1260x840.png', text: 'Image 2', link: 'https://example.com/image2' },
    { src: 'https://cdn.geekwire.com/wp-content/uploads/2023/09/primevideo-seo-logo.jpg', text: 'Image 4', link: 'htts://example.com/image4' },
    { src: 'https://pageflows.com/media/videos/thumbnail_1e79d158-2aa6-4e80-ab8b-9ff6066b3148.jpg', text: 'Image 3', link: 'https://example.com/image3' },
    { src: 'https://miro.medium.com/v2/resize:fit:1358/1*g-mNLQpmAs-3JaonANTWNQ.png', text: 'Image 5', link: 'https://example.com/image5' },
  ];

  return (
    <div className="project-page">
      <h1>My Projects</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={`Image ${index + 1}`} />
            <div className="overlay"> 
              <div className="text">{image.text}</div>
              <a href={image.link} target="_blank" rel="noopener noreferrer" className="button-link">
                <button className="button">View</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
