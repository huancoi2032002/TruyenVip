import React from 'react';
import LayoutMain from '../../Layout/LayoutMain/LayoutMain';
import Carousel from './Component/Carousel/Carousel';
import Image from '../../assets/image/Mu.jpg';
import Content from './Component/Content/Content';

function Home() {
    return (
        <LayoutMain>
            <div className='p-2 pb-2'>
                ffđffd
                <div className="flex flex-nowrap ">
                    <Carousel image={Image} name="mAN" chapter="333"/>
                    <Carousel image={Image} name="mAN" chapter="333"/>
                    <Carousel image={Image} name="mAN" chapter="333"/>
                    <Carousel image={Image} name="mAN" chapter="333"/>
                    <Carousel image={Image} name="mAN" chapter="333"/>
                </div>
                dfgdfgdfg
                <div className="grid grid-cols-3">
                    <div className="col-span-2 flex flex-wrap">
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                        <Content image={Image}/>
                    </div>
                    <div className="col-span-1">
                        
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}

export default Home;