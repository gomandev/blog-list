import FeatureImageOne from '../assets/blog/feature-1.svg'
import FeatureImageTwo from '../assets/blog/feature-2.svg'
import {ReactComponent as ArrowIcon} from '../assets/blog/arrow-icon.svg'
import { Container } from './Container';


const colorNames = [
    "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", 
    "pink", "gray", 
    "fuchsia", "lime", "emerald", "cyan", "sky", "violet", 
  ]; 
  
  

function generateTagColors() {
    // Randomly select two colors (ensuring contrast)
    let lightColor, darkColor;
    do {
      lightColor = colorNames[Math.floor(Math.random() * colorNames.length)];
      darkColor = colorNames[Math.floor(Math.random() * colorNames.length)];
    } while (lightColor === darkColor || darkColor === "white" || lightColor === "black");
  
    // Apply Tailwind opacity classes
    return {
      lightColor: `${darkColor}-200`, 
      darkColor: `${darkColor}-800` 
    };
  }
  
  
  
  
  function Tag({ children }) {
    const { lightColor, darkColor } = generateTagColors();
  
    return (
      <span className={`bg-${lightColor} text-${darkColor} py-1 px-3 leading-none rounded-2xl flex justify-center items-center`}>
        {children}
      </span>
    );
  }

export function BlogHero() {
    return (
        <div className="h-[288px] flex justify-center items-center flex-col w-full bg-white">
            <span className="text-[#6941C6] md:text-2xl text-xl">Our Blog</span>
            <h2 className="text-[#101828] md:text-[3.75rem] text-center text-[2.75rem] leading-[3rem] capitalize">Stories and interviews</h2>
        </div>
    )
}

export function BlogFeatured() {
    return (
       <Container>
             <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-12 w-full mb-[6rem]">
            <div className="">
                <div className="mb-6">
                    <img src={FeatureImageOne} className='h-[60px] w-full object-cover rounded-br-[16px] rounded-bl-[16px]' alt="Feature One" />
                </div>
                <div className="w-full">
                    <span className="text-xl text-[#6941C6] leading-3">Olivia Rhye • 20 Jan 2024</span>
                    <div className="flex w-full justify-between items-center my-2">
                        <h4 className="text-[#101828]">UX review presentations</h4>
                        <ArrowIcon />
                    </div>
                    <p className='text-[#2D2D2D] text-2xl'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <div className="mt-6">
                        <div className="flex gap-x-2">
                            <Tag>Design</Tag>
                            <Tag>Research</Tag>
                            <Tag>Presentation</Tag>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex pt-[1.75rem] w-full">
                <div className="flex-1 mr-6">
                    <img src={FeatureImageTwo} className='w-[20rem] h-[12.5rem] object-cover rounded-2xl' alt="Feature Two" />
                </div>
                <div className="flex-1 w-full">
                <span className="text-xl text-[#6941C6] leading-3">Lana Steiner • 18 Jan 2024</span>
                    <div className="flex w-full justify-between items-center my-2">
                        <h4 className="text-[#101828]">Building your API stack</h4>
                        <ArrowIcon />
                    </div>
                    <p className='text-[#2D2D2D] te xt-2xl'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</p>
                    <div className="mt-6">
                        <div className="flex gap-x-2">
                            <Tag>Softwere</Tag>
                            <Tag>Research</Tag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </Container>
    )
}

export function BlogList({ posts }) {
    return (
       <Container>
            <h2 className='text-[#101828] text-[2rem] mb-8'>All blog posts</h2>
         <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-x-8 gap-y-12 mb-24">
            {posts.map((data, index) => (
                <div className="">
                <div className="mb-6">
                    <img src={data.image} className='w-full object-cover' alt="Feature One" />
                </div>
                <div className="w-full">
                    <span className="text-xl text-[#6941C6] leading-3">{data.name} • {data.date}</span>
                    <div className="flex w-full justify-between items-center my-2">
                        <h4 className="text-[#101828]">{data.title}</h4>
                        <ArrowIcon />
                    </div>
                    <p className='text-[#2D2D2D] text-2xl'>{data.content}</p>
                    <div className="mt-6">
                        <div className="flex gap-x-2">
                            {data.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
       </Container>
    )
}