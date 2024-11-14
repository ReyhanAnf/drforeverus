

export default function VideoCard({src} : any){

    return (
        <div key={src['id']} className="w-full">
            <iframe src={`https://drive.google.com/file/d/${src['id']}/preview`} width={100} height={100} className="w-full h-72 object-fill rounded-lg" allowFullScreen ></iframe>
        </div>
    )
}