import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home(props) {
  
  const photos = props.photos.data;
 
  return (
    <div className='app'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    <Header />
    <Banner />
      <div className='max-w-7xl mx-auto py-20 '>
      <div className=' imagebox'>
        {
          photos.map((photo,i) => (
          <div className='imagesection-container' key={i}>
            <div className="imagesection">
              <Image src={`${props.starpibaseurl}${photo.attributes.file.data.attributes.url}`} alt="main-image" layout='fill' />
              <div className='card-section'>
                <div>
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="15"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg></button>
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg></button>
                </div>
                <div className='info'>
                  <p>Shyam munda</p>
                  <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="15" height="15"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg></button>
                </div>
              </div>
              </div>
              <p className='tag'>{photo.attributes.description}</p>
            </div>
          ))
        }
        </div>

      </div>

      
    </div>
  )
}

export async function getStaticProps(){
  const res = await axios.get(`${process.env.STRAPIBASEURL}/api/photos?populate=file`);

  return{
    props:{ 
      photos:res.data,
      starpibaseurl:process.env.STRAPIBASEURL
     }
  }
}
