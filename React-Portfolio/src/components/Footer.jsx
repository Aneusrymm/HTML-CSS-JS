

const Footer = () => {
  return (
    <div className="mt-32 py-2 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className="flex items-center gap-3">
             <a 
                href="https://gitlab.com/nabilfirdaus999"
                target="_blank"
                rel="noopener noreferrer">
                <i className="ri-gitlab-fill ri-2x"></i>
            </a>

            <a 
                href="https://github.com/Aneusrymm" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <i className="ri-github-fill ri-2x"></i>
            </a>

            <a href="#">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>

           <a href="https://wa.me/6281234567890" target="_blank">
                <i className="ri-whatsapp-fill ri-2x"></i>
            </a>

            <a 
                href="https://linkedin.com/in/muhamad-nabil-firdaus-327344292"
                target="_blank"
                rel="noopener noreferrer">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer