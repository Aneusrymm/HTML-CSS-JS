import DataImage, { listProyek } from "./data"
import { listTools} from "./data"
function App() {
  

  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 gird-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
          <p>Kode yang indah datang dari ketekunan.😊</p>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Nabil Firdaus</h1>
        <p className="text-base/loose mb-6 opacity-50">
          Saya mempunyai ketertarikan dalam bidang Programming dan Data Science,
          terutama pada pembuatan Fullstack Website , Data Visualization maupun Data Forcasting
          ketertarikan pada bidang ini sudah berlangsung lebih dari 3 Tahun untuk semua Bidang.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a 
            href="https://drive.google.com/file/d/1olTwHu5hlm9NzlvPvhqE8HhrT2Zvi_wJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-700 p-4 rounded-4xl hover:bg-violet-600">
              Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="#proyek" className="bg-zinc-700 p-4 rounded-4xl hover:bg-zinc-600">
            Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
    </div>

    {/* Tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
        <img src={DataImage.HeroImage} alt="Tentang Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
        <p className="text-base/loose mb-10">
          Hi, perkenalkan saya Muhamad Nabil Firdaus<br></br>
          seorang Programmer dan Data Enthausiast, 
          Saya meyakini bahwa penguasaan data dan pemrograman harus berjalan seimbang, 
          sehingga setiap solusi yang saya kembangkan tidak hanya memiliki logika yang kuat dan efisien, tetapi juga mampu memberikan wawasan yang bernilai serta dapat diimplementasikan secara nyata pada berbagai kebutuhan.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Tentang Image" className="w-12 rounded-md sm:block hidden"/>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">45
                <span className="text-violet-500">+</span>
              </h1>
              <p>Project Selesai</p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-4xl mb-1">3
                <span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Pengelaman</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4"data-aos="fade-up" data-aos-duration="1000">
        Tools yang Saya Gunakan
        </h1>
        <p className="xl:w-2/5 lg:2/4 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        Berikut adalah beberapa tools yang saya gunakan untuk membuat proyek-proyek saya
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map(tool =>(
           <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 hover:bg-zinc-900"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
           </div>  
          ))}
        </div>
      </div>
    </div>
    {/* Tentang */}


    {/* Project */}
          <div className="proyek mt-32 py-10" id="proyek">
            <h1 className="text-4xl font-bold mb-2 text-center">Project</h1>
              <p className="text-base/loose opacity-50 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                Berikut Adalah beberapa proyek yang telah saya kerjakan
              </p>
              <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {listProyek.map(proyek => (
                  <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md"data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos="fade-up">
                    <img src={proyek.gambar} alt="Project Image" loading="lazy"/>
                    <h1 className="text2xl font-bold my-4">{proyek.nama}</h1>
                    <p className="text-base/loose mb-4">{proyek.desk}</p>
                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool, index) => (
                        <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                      ))}
                    </div>  
                    <div className="mt-8 text-center">
                      <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                        Lihat Website
                      </a>
                    </div>  
                  </div>
                ))}
            </div>
          </div>
    {/* Project */}

    {/* Kontak */}
          <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
            <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">
              Kontak
            </h1>
            <p className="text-base/loose mb-10 text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Mari Terhubung Dengan saya.
            </p>
            <form action="https://formsubmit.co/kuliah.binus999@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Nama Lengkap</label>
                  <input name="nama" type="text" placeholder="Nama Lengkap..." className="border border-zinc-800 p-2 rounded-md" required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Email</label>
                  <input name="email" type="email" placeholder="Nama Email..." className="border border-zinc-800 p-2 rounded-md" required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="pesan">Pesan</label>
                  <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-800 p-2 rounded-md" required></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-violet-700 w-full cusor-pointer p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                    Kirim Pesan
                  </button>
                </div>
              </div>
            </form>
          </div>      
    {/* Kontak */}
    </>
  )
}

export default App
