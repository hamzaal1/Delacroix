import Blogsection from "@/components/blog-section";
import CMS from "@/components/cms";
import "@/components/css/home.css"
import Mainsection from "@/components/Mainsection";
import Valeurs from "@/components/valeurs";


export default function Home() {
  return (
    <>
      <div className="container py-16">
        <h2 className="text-3xl font-semibold mb-2 text-center"> <CMS id="752c0353-fe58-4385-bcd0-00b00d41f71d" />  </h2>
        <p className="leading-6 text-center">
          <CMS id="965760f0-d089-401c-8df9-3b2195590c5a" />
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:px-8">
          <Valeurs />
        </div>
      </div>
      <Mainsection />
      <Blogsection />
    </>
  );
}
