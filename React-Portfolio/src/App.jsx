import DataImage from "./data"

function App() {
  

  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 gird-cols-1">
      <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md"/>
          <p>Kode yang indah datang dari ketekunan.😊</p>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Nabil Firdaus</h1>
        <p className="text-base/loose mb-6 opacity-50">
          Saya mempunyai ketertarikan dalam bidang Programming dan Data Science,
          terutama pada pembuatan Fullstack Website , Data Visualization maupun Data Forcasting
          ketertarikan pada bidang ini sudah berlangsung lebih dari 3 Tahun untuk semua Bidang.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-4xl hover:bg-violet-600">
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="#" className="bg-zinc-700 p-4 rounded-4xl hover:bg-zinc-600">
            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto"/>
    </div>
    </>
  )
}

export default App
