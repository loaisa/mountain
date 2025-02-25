import React, {useState} from 'react';
import photo1 from '../assets/collage1.jpg';
import photo2 from '../assets/collage2.jpg';
import photo3 from '../assets/collage3.jpg';
import photo4 from '../assets/collage4.jpg';
import photo5 from '../assets/collage5.jpg';
import photo6 from '../assets/collage6.jpg';
import PhotoThumbnail from "./PhotoThumbnail";
import '../styles/ImageCollage.css'


const ImageCollage = () => {
    const photos = [
        {id: 1, src: photo1, alt: 'Фото 1'},
        {id: 2, src: photo2, alt: 'Фото 2'},
        {id: 3, src: photo3, alt: 'Фото 3'},
        {id: 4, src: photo4, alt: 'Фото 4'},
        {id: 5, src: photo5, alt: 'Фото 5'},
        {id: 6, src: photo6, alt: 'Фото 6'},
    ]
    const [selectedPhoto, setSelectedPhoto] = useState(photos[0])


    console.log(selectedPhoto)
    const handleClick = (photo) => {
        setSelectedPhoto(photo)
    }
    return (

        <section id='ImageCollage' className="ImageCollage">
            <h3 className='ImageCollage-h'>Collage Image</h3>
            <div className='container'>
                <div className='main-photo'>
                        <img src={selectedPhoto.src} alt='#'/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ea incidunt inventore ipsa modi
                            nesciunt perspiciatis qui recusandae sapiente similique. Ad consequuntur dolor explicabo
                            natus
                            nesciunt possimus praesentium sapiente veniam?</p>



                </div>
                <div className='thumbnails'>
                    {photos.map((photo) =>
                        <PhotoThumbnail key={photo.id} photo={photo} isSelected={photo.id === selectedPhoto.id}
                                        onClick={handleClick}/>
                    )}
                </div>
            </div>


        </section>

    );
};

export default ImageCollage;

