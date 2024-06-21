import ImgBandeau from '../assets/images/Image source 1.png';
export default function Bandeau () {
    return (
        <div className='bandeau'>
            <div className='img-bandeau'>
            <img src={ImgBandeau} alt='t'/>
            </div>
    <div className='text-bandeau'><h1>Chez vous, partout et ailleurs</h1></div>
    </div>
)
};