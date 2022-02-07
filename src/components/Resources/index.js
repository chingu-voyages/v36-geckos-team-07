import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import NFTguide from './../../images/NFTguide.png';
import crypto from './../../images/crypto-collectibles.png';
import NFTArticle1 from './../../images/NFT-article-1.jpeg';

function Resources() {
  return (

    // <div className='resources-container'>

    <Container>
      <div className='resources-title'>
        <h1>The Resource Hub</h1>
        <p>All  you need to earn  about NFTs and all Crypto Collectibles: Resources for  Bringing NFT world to your reach  </p>
      </div>
      <hr
        style={{
          color: '#000000',
          height: 5,
          borderColor: '#000000'
        }}
      />
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          <Figure>
            <Figure.Image
              //width={500}
              //height={600}
              alt="171x180"
              src={NFTguide}

            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
          <h2><a
            href='https://decrypt.co/resources/non-fungible-tokens-nfts-explained-guide-learn-blockchain'
            target='_blank'
            rel='noreferrer'>
            Beginner's Guide to NFTs: What Are Non-Fungible Tokens?</a></h2>
          <p>Non-fungible tokens, or NFTs, are digital assets that are provably unique. They can be used to represent both tangible and intangible items.</p>
          <br />
          <Figure>
            <Figure.Image
              //width={500}
              //height={600}
              alt="171x180"
              src={crypto}

            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
          <h2><a
            href='https://www.nftically.com/blog/what-are-crypto-collectibles-uses-of-nfts-in-crypto-collectibles/#:~:text=A%20crypto%2Dcollectible%20is%20a,such%20as%20pets%20or%20avatars.'
            target='_blank'
            rel='noreferrer'>Crypto Collectibles: New talk of the town</a></h2>
        </Col>
        <Col xs={6} md={4}>
          <div className="video-responsive">
            <iframe
              width="453"
              height="280"
              src='https://www.youtube.com/embed/Oz9zw7-_vhM'
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <h2>NFTs Explained</h2>
          <p>Yes it's hype. But it could change our world.</p>
          <br />
          <div className="video-responsive">
            <iframe
              width="453"
              height="280"
              src='https://www.youtube.com/embed/v0V_zkng4go'
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <h2>How Crypto will Change the World (or Not)</h2>
          <p>From cryptocurrencies to NFTs, crypto seems as though it's here to stay - but is that a good thing? </p>

          <br />
          <div className="video-responsive">
            <iframe
              width="453"
              height="280"
              src='https://www.youtube.com/embed/AQO7KePXUEQ'
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <h2>Crypto Wallets Explained (Beginners' Guide!) - How to Get Crypto Off Exchange Step-by-Step</h2>
          <p>This is a simple, easy-to-understand guide for beginners about what cryptocurrency wallets are, how they work, and how to quickly set one up and transfer your crypto step by step.</p>
        </Col>
      </Row>
      <hr
        style={{
          color: '#000000',
          height: .5,
          borderColor: '#000000'
        }}
      />
      <Row>
        <Col xs={3}>
        <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={NFTArticle1}
            />
          </Figure>
          <p><a
            href='https://darkstar.mirror.xyz/bOWhYyX4u5mY0AfY-ObnQSOOcMVEmJQPVUFSw1qJsdc'
            target='_blank'
            rel='noreferrer'>NFTs Need an Audience: Utility, Consumption and Building New Worlds</a></p>
        </Col>
        <Col xs={3}>
        <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={NFTArticle1}
            />
          </Figure>
          <p><a
            href='https://darkstar.mirror.xyz/bOWhYyX4u5mY0AfY-ObnQSOOcMVEmJQPVUFSw1qJsdc'
            target='_blank'
            rel='noreferrer'>NFTs Need an Audience: Utility, Consumption and Building New Worlds</a></p>
        </Col>
        <Col xs={3}>
        <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={NFTArticle1}
            />
          </Figure>
          <p><a
            href='https://darkstar.mirror.xyz/bOWhYyX4u5mY0AfY-ObnQSOOcMVEmJQPVUFSw1qJsdc'
            target='_blank'
            rel='noreferrer'>NFTs Need an Audience: Utility, Consumption and Building New Worlds</a></p>
        </Col>
        <Col xs={3}>
        <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={NFTArticle1}
            />
          </Figure>
          <p><a
            href='https://darkstar.mirror.xyz/bOWhYyX4u5mY0AfY-ObnQSOOcMVEmJQPVUFSw1qJsdc'
            target='_blank'
            rel='noreferrer'>NFTs Need an Audience: Utility, Consumption and Building New Worlds</a></p>
        </Col>
      </Row>
      <hr
        style={{
          color: '#000000',
          height: .5,
          borderColor: '#000000'
        }}
      />
      <Row>
        <Col xs={3}>
        <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={NFTArticle1}
            />
          </Figure>
          <p><a
            href='https://darkstar.mirror.xyz/bOWhYyX4u5mY0AfY-ObnQSOOcMVEmJQPVUFSw1qJsdc'
            target='_blank'
            rel='noreferrer'>NFTs Need an Audience: Utility, Consumption and Building New Worlds</a></p>
        </Col>
        <Col xs={3}>
        <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={NFTArticle1}
            />
          </Figure>
          <p><a
            href='https://darkstar.mirror.xyz/bOWhYyX4u5mY0AfY-ObnQSOOcMVEmJQPVUFSw1qJsdc'
            target='_blank'
            rel='noreferrer'>NFTs Need an Audience: Utility, Consumption and Building New Worlds</a></p>
        </Col>
        <Col xs={3}>
        <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={NFTArticle1}
            />
          </Figure>
          <p><a
            href='https://darkstar.mirror.xyz/bOWhYyX4u5mY0AfY-ObnQSOOcMVEmJQPVUFSw1qJsdc'
            target='_blank'
            rel='noreferrer'>NFTs Need an Audience: Utility, Consumption and Building New Worlds</a></p>
        </Col>
        <Col xs={3}>
        <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={NFTArticle1}
            />
          </Figure>
          <p><a
            href='https://darkstar.mirror.xyz/bOWhYyX4u5mY0AfY-ObnQSOOcMVEmJQPVUFSw1qJsdc'
            target='_blank'
            rel='noreferrer'>NFTs Need an Audience: Utility, Consumption and Building New Worlds</a></p>
        </Col>
      </Row>

      
    </Container>

    // </div>

  );
}

export default Resources;
