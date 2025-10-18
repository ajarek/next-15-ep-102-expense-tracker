import FAQs from './Faqs'
import Features from './Features'
import HeroSection from './HeroSection'
import Testimonial from './Testimonial'

const ForGuests = () => {
  return (
    <div className='py-16 px-4 flex flex-col items-center  '>
         
          <HeroSection/>
          <Features/>
          <FAQs/>
          <Testimonial/>
         
        </div>
  )
}

export default ForGuests
