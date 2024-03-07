import {Container} from '../Container';
import Logo from '../../assets/emerge-logo.svg'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'

export default function Footer() {
  return (
    <footer className='bg-white'>
        <Container>
           <div className='w-full pt-[3.81rem] pb-[2.5rem]'>
           <div className='w-full flex flex-col lg:flex-row justify-between'>
              <div className='lg:w-[372px] w-full'>
                <img src={Logo} alt='Logo' />
                <div className='text-lg flex flex-col mt-[1.43rem]'>
                  <span>UAE 🇦🇪</span>

                  <span>
                  Levels 41 & 42, Emirates Towers - Sheikh Zayed Rd - Dubai - United Arab Emirates Phone:  <a href="tel:(02) 9055 3835" rel="noopener noreferrer" target="_blank">
                    <span className="underline">+97145813606</span>
                  </a> 
                  </span>
                </div>
                <div className='text-lg flex flex-col mt-[1.43rem]'>

                  <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[23.0px]">
                    AUS 🇦🇺
                    <br />
                    Tower 1 L35/100 Barangaroo Ave, Barangaroo NSW 2000
                    <br />
                    Phone: <a href="tel:(02) 9055 3835" rel="noopener noreferrer" target="_blank">
                    <span className="underline">(02) 9055 3835 </span>
                  </a>
                  </span>
                  
                  
                </div>
                <div className="inline-flex items-end lg:mt-[2.31rem] my-[2.31rem] gap-[20px] relative">
                  <img className="relative w-[24px] h-[24px]" alt="Group" src={facebook} />
                  <img className="relative w-[24px] h-[24px]" alt="Group" src={instagram} />
                  <img className="relative w-[24px] h-[24px]" alt="Group" src={twitter} />
                  <img className="relative w-[24px] h-[24px]" alt="Group" src={linkedin} />
                  <img className="relative w-[24px] h-[24px]" alt="Group" src={youtube} />
              </div>
              </div>
              <div className="inline-flex lg:flex-row flex-col items-start lg:gap-[81px] gap-[41px] relative">
                <div className="inline-flex flex-col items-start lg:gap-[25px] gap-[15px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    About us
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Book a demo
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Blog
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Pricing
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Contact
                    </a>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start lg:gap-[25px] gap-[15px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Analytics
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Acquisition
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Management
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Sign in
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Sign up
                    </a>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start lg:gap-[25px] gap-[15px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Style Guide
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Changelog
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    Licenses
                    </a>
                  </div>
                  <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href='#'>
                    More Templates
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full border-t border-black opacity-[20%] mt-[2.93rem]' />
            <div className='flex flex-col lg:flex-row w-full justify-between mt-[2.93rem]'>
              <p className='text-[0.87rem] leading-[1.5rem] mb-6'>© 2023 Emerge Digital. All rights reserved</p>
              <div className="inline-flex items-start justify-center gap-[17px] relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[24.6px] underline whitespace-nowrap">
                  <a href='#'>
                  Privacy Policy
                  </a>
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[24.6px] underline whitespace-nowrap">
                  <a href='#'>
                  Terms of Service
                  </a>
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[24.6px] underline whitespace-nowrap">
                  <a href='#'>
                  Cookies Settings
                  </a>
                </div>
              </div>
            </div>
           </div>

        </Container>
    </footer>
  );
}
