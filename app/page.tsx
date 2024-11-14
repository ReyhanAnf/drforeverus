
import AllContent from "@/components/main/all";
import { getData } from "./googleDrive";


export default async function Home() {
  const data = await getData()
  return (

    <AllContent data={data} />

  );
}
