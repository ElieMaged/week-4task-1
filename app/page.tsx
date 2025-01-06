/* eslint-disable */
import Image from "next/image";
import Adone from './_components/front-page/Adone'
import Adtwo from './_components/front-page/Adtwo'
import Adthree from './_components/front-page/Adthree'
import Adfour from './_components/front-page/Adfour'
import Adfive from './_components/front-page/Adfive'
import Adsix from './_components/front-page/Adsix'
import IMAGE from '../media/homePage/3.png'

import {store} from './_components/redux/state'
import { Provider } from "react-redux";





export default function Home() {

  return (
    <>
    
    <div className='flex flex-col p-20'>
    <Provider store={store}>
    <Adone />
    <Adtwo />
    <Adthree />
    <Adfour />
    <Image
    src={IMAGE}
    height={1000}
    width={1250}
    alt='image' 
    />
    <Adfive />
    <Adsix />
    </Provider>
    </div>
  
    </>
  );
}
