
import AllContent from "@/components/main/all";
import { getData } from "./googleDrive";


export default async function Home() {
  const data = await getData();

  
  
  return (

    <div className="bg-gradient-to-br from-slate-100 to-teal-100 sm:px-8 pb-4 pt-16">

    <AllContent data={data} />

    </div>

  );
}
