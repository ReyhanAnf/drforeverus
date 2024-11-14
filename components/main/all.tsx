import ImageCard from "../image-card";
import VideoCard from "../video-card";


export default function AllContent({data} : any){

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 w-full p-2">
        {data?.map((ids : any) => (
          ids['mimeType'] == 'video/mp4' ? (
              <VideoCard src={ids} />
            ): ids['mimeType'] != 'application/vnd.google-apps.folder' ? (
              <ImageCard src={ids} />
            ) : ''
          ))}
      </div>
    )
}