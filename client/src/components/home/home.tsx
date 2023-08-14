import gif from '../../assets/Under_construction_animated.gif';

const Home = () => <section className='content'>
    <h2 className='subtitle'>Welcome.</h2>
    <p>I have been a fan of <em>React Router</em> ever since I heard their first album 😍😍</p>    
    <p>Please enjoy my fan page! I'll make more content soon.</p>
    <img src={gif} alt='Under construction!'/>
</section>;

export default Home;