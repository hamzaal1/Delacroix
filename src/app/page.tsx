import Blogsection from "@/components/blog-section";
import "@/components/css/home.css"
import ModalView from "@/components/modal";
export default function Home() {
  return (
    <>


      <div className="container py-16">
        <h2 className="text-3xl font-semibold mb-2 text-center">Nos Valeurs</h2>
        <p className="leading-6 text-center">
          Nos valeurs sont au cœur de notre identité et guident chacune de nos actions au sein de l'Institut Eugène Delacroix. Elles définissent notre philosophie éducative et façonnent notre communauté scolaire en une famille engagée et bienveillante.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:px-8">
          <div className="flex gap-2 items-center mb-5">
            <div className="px-6 w-20 h-20 rounded-full bg-drose flex justify-center items-center">
              <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <div>
              <h3 className="mt-0 font-semibold text-lg">Communication</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </div>

          <div className="flex gap-2 items-center mb-5">
            <div className="px-6 w-20 h-20 rounded-full bg-dorange flex justify-center items-center">
              <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <div>
              <h3 className="mt-0 font-semibold text-lg">Eveil</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </div>

          <div className="flex gap-2 items-center mb-5">
            <div className="px-6 w-20 h-20 rounded-full bg-dblue flex justify-center items-center">
              <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <div>
              <h3 className="mt-0 font-semibold text-lg">Curiosite</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </div>

          <div className="flex gap-2 items-center mb-5">
            <div className="px-6 w-20 h-20 rounded-full bg-gray-600 flex justify-center items-center">
              <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <div>
              <h3 className="mt-0 font-semibold text-lg">Epanouissement</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </div>

          <div className="flex gap-2 items-center mb-5">
            <div className="px-6 w-20 h-20 rounded-full bg-dorange flex justify-center items-center">
              <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <div>
              <h3 className="mt-0 font-semibold text-lg">Excellence</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </div>



        </div>
      </div>

      <section className="about-section py-16 bg-fixed relative bg-stellar bg-[url('https://themewagon.github.io/fox/images/bg_3.jpg')]" id="section-counter">
        <div className="container mx-auto ">
          <div className="flex flex-wrap justify-center mb-5 pb-2 md:px-8">
            <div className="pop-up w-full md:w-6/12 flex items-center bg-[url('/founded.png')] bg-center bg-cover rounded-md">
              <div className="w-full md:w-8/12 mx-auto hidden md:block ">
                {/* on click this a ag open this iframe <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FINSTITUTEUGENEDELACROIX%2Fvideos%2F298275322002695%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */}
                <ModalView />
              </div>
            </div>
            <div className="w-full md:w-6/12 text-center md:text-left md:px-3">
              <h2 className="mb-4 text-white text-4xl font-bold">Institut Eugène Delacroix</h2>
              <p className="text-white font-semibold leading-8 ">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p className="text-white font-semibold leading-8 ">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
          </div>
        </div>
      </section>

      <Blogsection />
    </>
  );
}
