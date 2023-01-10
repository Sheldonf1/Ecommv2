// import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import React, { useState, useEffect } from 'react';
// import { ImageSlider } from '../../components/ImageSlider';
// import AboutUs from '../components/AboutUs'
// import Announcement from '../components/Announcement'
// import Contact from '../components/Contact'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// import Products from '../components/Products'
// import Slider from '../components/Slider'

import "./home.css"


// const Thumbnail = ({ arr, image, index }) => {
//   return (<div className="tumbnail">
//     {
//       arr.map((imgsrc, i) => (
//         <img
//           key={i}
//           height="50"
//           src={imgsrc}
//           onClick={() => image(i)}
//           className={index === i ? 'active' : ''}
//         />
//       ))
//     }
//   </div>)
// }

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
      {/* <Thumbnail arr={imgs} image={setIndex} index={index} /> */}
    </div>
  )
}





const Home = () => {

  return (
    <div>
      <Menu />
      <Slideshow
        imgs={[
          'https://i0.wp.com/www.society19.com/wp-content/uploads/2017/09/kirito-sao.jpg?fit=800%2C492&ssl=1',
          'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/guts-in-front-of-dragonslayer-from-berserk.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15amPIzcM9aq7urh2ez5gPMkRYliBCERMNA&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNaTqyrtakQ0DtBYA_lxH7FEZujfWWDqU_w&usqp=CAU',

        ]}
      />
      <section className="items">




      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section>There's nothing like owning a sword that your favorite anime or game character carries!
        TRUESWORDS.com has a large variety of anime and video game swords to choose from with false-edged display
        bladesity material
        and razor-sharp functional blades. All of our swords are crafted from the highest quals. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Error, voluptates saepe? Illum tempore quaerat, perspiciatis esse hic
        expedita dolorem. Similique ea
        que voluptatem tempora amet maxime ut quidem necessitatibus repellat optio.</section>
      <section className="space"></section>

      <Footer />



      {/* <Announcement /> */}
      {/* <Navbar /> */}
      {/* <Slider /> */}
      {/* <AboutUs /> */}
      {/* <Products />
      <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home