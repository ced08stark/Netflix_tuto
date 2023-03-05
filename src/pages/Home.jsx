import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row'
import Request from '../Requests'



const Home = () => {
    return ( 
        <div>
            <Main />
            <Row rowID='1' title='UpComing' fetchURL={Request.requestUpComing} />
            <Row rowID='2' title='Popular' fetchURL={Request.requestPopular} />
            <Row rowID='3' title='Trending' fetchURL={Request.requestTrending} />
            <Row rowID='4' title='Top rated' fetchURL={Request.requestTopRated} />
            <Row rowID='5' title='Horror' fetchURL={Request.requestHorror} />
        </div>
     );
}
 
export default Home;