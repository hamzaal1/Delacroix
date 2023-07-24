import Blogsection from "@/components/blog-section";
import CMS from "@/components/cms";
import "@/components/css/home.css"
import ModalView from "@/components/modal";
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

      <section className="about-section py-16 bg-fixed relative bg-stellar bg-[url('https://themewagon.github.io/fox/images/bg_3.jpg')]" id="section-counter">
        <div className="container mx-auto ">
          <div className="flex flex-wrap justify-center mb-5 pb-2 md:px-8">
            <div className="order-last mt-5 md:mt-0 py-16 md:py-0 md:order-first pop-up w-full md:w-6/12 flex items-center bg-[url('/founded.png')] bg-center bg-cover rounded-md">
              <div className="w-full md:w-8/12 mx-auto">
                {/* on click this a ag open this iframe <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FINSTITUTEUGENEDELACROIX%2Fvideos%2F298275322002695%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */}
                <ModalView />
              </div>
            </div>
            <div className="w-full md:w-6/12 text-center md:text-left md:px-3">
              <h2 className="mb-4 text-white text-4xl font-bold"> <CMS id="b1d39be8-c207-48cc-9dc4-4d3e39db07af" />  </h2>
              <p className="text-white font-semibold leading-8 ">
                <CMS id="26837097-034c-4714-8e95-2ea4bd817666" />

              </p>
              <p className="text-white font-semibold leading-8 ">
                <CMS id="1efef31a-20f2-48f5-8e29-4d24d961001b" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <Blogsection />
    </>
  );
}
