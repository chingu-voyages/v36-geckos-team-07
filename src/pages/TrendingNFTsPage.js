import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TrendingNftsList from '../components/TrendingNFTs/nft-card-list/nft-card-list';

const TrendingNFTsPage = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col sm={12} md={6} lg={4}>
                    <TrendingNftsList title={'Daily'} />            
                </Col>
                
                <Col sm={12} md={6} lg={4}>
                    <TrendingNftsList title={'Weekly'} />
                </Col>

                <Col sm={12} md={6} lg={4}>
                    <TrendingNftsList title={'Monthly'} />            
                </Col>
            </Row>
        </Container>
    );
}

export default TrendingNFTsPage;