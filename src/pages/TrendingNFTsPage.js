import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import TrendingNftsList from '../components/TrendingNFTs/nft-card-list/nft-card-list';

const TrendingNFTsPage = () => {
    return (
        // <div className="nft-page-container">
        <Container fluid="md">
            <Row>
                <Col>
                    <TrendingNftsList title={'Daily'} />            
                </Col>
                
                <Col>
                    <TrendingNftsList title={'Weekly'} />
                </Col>

                <Col>
                    <TrendingNftsList title={'Monthly'} />            
                </Col>
            </Row>
        </Container>
            
        // </div>
    );
}

export default TrendingNFTsPage;