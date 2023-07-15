import CarouselList from "@/components/CurselList";
import Blogsection from "@/components/blog-section";
import "@/components/css/home.css"
import ModalView from "@/components/modal";
export default function Home() {
  return (
    <>
      <CarouselList />

      <div className="container py-16">
        <h2 className="text-2xl mb-3">What We Offer</h2>
        <p className="leading-6">
          On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 md:py-0 md:px-8">
          <div className="flex gap-2 items-center">
            <div className="px-6 w-20 h-20 rounded-full bg-drose flex justify-center items-center">
              <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <div>
              <h3 className="mt-0 font-medium">Safety First</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </div>

          <div className="flex gap-2 items-center md:mt-24">
            <div className="px-6 w-20 h-20 rounded-full bg-dorange flex justify-center items-center">
              <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <div>
              <h3 className="mt-0 font-medium">Safety First</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="px-6 w-20 h-20 rounded-full bg-dblue flex justify-center items-center">
              <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <div>
              <h3 className="mt-0 font-medium">Safety First</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </div>

          <div className="flex gap-2 items-center md:mt-28">
            <div className="px-6 w-20 h-20 rounded-full bg-gray-600 flex justify-center items-center">
              <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <div>
              <h3 className="mt-0 font-medium">Safety First</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </div>



        </div>
      </div>

      <section className="about-section py-16 bg-fixed relative bg-stellar bg-[url('https://themewagon.github.io/fox/images/bg_3.jpg')]" id="section-counter">
        <div className="container mx-auto ">
          <div className="flex flex-wrap justify-center mb-5 pb-2 md:px-8">
            <div className="w-full md:w-6/12 flex items-center bg-[url('/founded.png')] bg-center bg-cover rounded-md">
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
          <div className="flex flex-wrap items-center justify-center ">
            <div className="w-full lg:w-12/12">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-6/12 lg:w-3/12 xl:w-3/12 px-4">
                  <div className="text-center counter-wrap animate-fadeIn">
                    <div className="block-18">
                      <div className="text">
                        <strong className="block text-5xl text-white font-bold mb-2" data-number="18">18</strong>
                        <span className="text-white">Certified Teachers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 xl:w-3/12 px-4">
                  <div className="text-center counter-wrap animate-fadeIn">
                    <div className="block-18">
                      <div className="text">
                        <strong className="block text-5xl text-white font-bold mb-2" data-number="401">401</strong>
                        <span className="text-white">Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 xl:w-3/12 px-4">
                  <div className="text-center counter-wrap animate-fadeIn">
                    <div className="block-18">
                      <div className="text">
                        <strong className="block text-5xl text-white font-bold mb-2" data-number="30">30</strong>
                        <span className="text-white">Courses</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 xl:w-3/12 px-4">
                  <div className="text-center counter-wrap animate-fadeIn">
                    <div className="block-18">
                      <div className="text">
                        <strong className="block text-5xl text-white font-bold mb-2" data-number="50">50</strong>
                        <span className="text-white">Awards Won</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blogsection />
    </>
  );
}
