import { footerLinks, socialMedia } from "../constants"
import { copyrightSign } from "../nike_landing_assets/assets/icons"
import { footerLogo } from "../nike_landing_assets/assets/images"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex 
      justify-between items-start gap-20 
      flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo}
             alt="Nike" 
             width={150}
             height={46}
             />
          </a>
          <p className="text-coolGray mt-6 text-base leading-7 font-montserrat sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8">
             {socialMedia.map((social) => (
               <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img 
                src={social.src} 
                alt={social.alt}
                width={25}
                height={25}
                />
               </div>
             ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section} >
              <h4 className="text-white font-montserrat text-2xl font-bold">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className=" leading-normal font-palanquin text-gray-400 text-[18px] mt-2.5 hover:text-gray-700">
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div> 
          ))}
        </div>
      </div>
        <div className="flex justify-between
        mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
           <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
               <img 
               src={copyrightSign}
                alt="copyright" 
                width={24}
                height={24}
                className="rounded-full m-0"
                />
                <p>Copyright. All rights reserved.</p>
           </div>
           <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer
