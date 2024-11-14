'use client'

import { useState } from "react";
import ImageCard from "../ui/image-card";
import VideoCard from "../ui/video-card";
import ImageView from "../ui/image-view";


export default function AllContent({data} : any){

    const [preview, setPreview] = useState([false, {}])

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full p-2 mt-10">
        <ImageView view={preview[0]} setPreview={setPreview} src={preview[1]} />
        
        {data?.map((ids : any, i: any) => (
            ids['mimeType'] == 'video/mp4' ? (
                <VideoCard key={ids['id']} src={ids} />
              ): ids['mimeType'] != 'application/vnd.google-apps.folder' ? (
                <ImageCard key={ids['id']} src={ids} setPreview={setPreview} />
              ) : ''
          ))}
      </div>
    )
}