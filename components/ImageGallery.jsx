import Image from 'next/image'
import { ImagesGallery } from '../app/data'

const ImageGallery = () => {
  return (
    <div className="mt-28 px-4 md:px-6 lg:px-8 xl:px-10">
      <h2 className="headingColor">معرض الصور </h2>
      <span className="headingBorderColor"></span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ImagesGallery.map((image) => (
          <div key={image.id} className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image.image}
              alt={`Image ${image.id}`}
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
