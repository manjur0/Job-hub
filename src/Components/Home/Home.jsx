
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div className='container m-auto'>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;