import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import NFTguide from './../../images/NFTguide.png';
import crypto from './../../images/crypto-collectibles.png';
import NFTArticle1 from './../../images/NFT-article-1.jpeg';
import NFTArticle2 from './../../images/NFT-article-2.jpg';
import NFTArticle3 from './../../images/NFT-article-3.png';
import NFTArticle4 from './../../images/NFT-article-4.jpeg';
import NFTArticle5 from './../../images/NFT-article-5.jpeg';
import NFTArticle6 from './../../images/NFT-article-6.jpeg';
import NFTArticle7 from './../../images/NFT-article-7.jpeg';
import NFTArticle8 from './../../images/NFT-article-8.jpeg';

function Resources() {
  return (

    <Container>
      <div className='resources-title'>
        <h1>Resources</h1>
        <p>Learn about NFTs and cryptocurrencies</p>
        <hr
          style={{
            color: '#000000',
            height: 2,
            borderColor: '#000000'
          }}
        />
      </div>

      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          <Figure>
            <a href='https://decrypt.co/resources/non-fungible-tokens-nfts-explained-guide-learn-blockchain'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                //width={500}
                //height={600}
                alt="NFT guide Image"
                src={NFTguide}

              /></a>
          </Figure>
          <h2><a
            href='https://decrypt.co/resources/non-fungible-tokens-nfts-explained-guide-learn-blockchain'
            target='_blank'
            rel='noreferrer'>
            Beginner's Guide to NFTs: What Are Non-Fungible Tokens?</a></h2>
          <p>Non-fungible tokens, or NFTs, are digital assets that are provably unique. They can be used to represent both tangible and intangible items.</p>
          <br />
          <Figure>
            <a href='https://www.nftically.com/blog/what-are-crypto-collectibles-uses-of-nfts-in-crypto-collectibles/#:~:text=A%20crypto%2Dcollectible%20is%20a,such%20as%20pets%20or%20avatars.'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                //width={500}
                //height={600}
                alt="171x180"
                src={crypto}

              />
            </a>
          </Figure>
          <h2><a
            href='https://www.nftically.com/blog/what-are-crypto-collectibles-uses-of-nfts-in-crypto-collectibles/#:~:text=A%20crypto%2Dcollectible%20is%20a,such%20as%20pets%20or%20avatars.'
            target='_blank'
            rel='noreferrer'>Crypto Collectibles: New talk of the town</a></h2>
          <p>A crypto-collectible is a cryptographically rare, non-fungible digital property. Unlike cryptocurrencies, which need all tokens to be similar, each crypto-collectable token is distinct or exclusive in amount.</p>
        </Col>
        <Col xs={12} md={4}>
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
        <Col xs={12} md={3}>
          <Figure>
            <a href='https://news.anytask.com/the-anytask-platform-list-of-nft-online-learning-resources-for-artists-interested-in-this-fast-growing-sector'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={NFTArticle1}
              /></a>
          </Figure>
          <p><a
            href='https://news.anytask.com/the-anytask-platform-list-of-nft-online-learning-resources-for-artists-interested-in-this-fast-growing-sector'
            target='_blank'
            rel='noreferrer'>The AnyTask™ Platform list of NFT online learning resources for artists interested in this fast-growing sector</a></p>
        </Col>
        <Col xs={12} md={3}>
          <Figure>
            <a href='https://www.benzinga.com/money/what-are-digital-or-crypto-collectibles/'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                //width={171}
                //height={180}
                alt="171x180"
                src={NFTArticle2}
              /></a>

          </Figure>
          <p><a
            href='https://www.benzinga.com/money/what-are-digital-or-crypto-collectibles/'
            target='_blank'
            rel='noreferrer'>What are Digital or Crypto  Collectibles?</a></p>
        </Col>
        <Col xs={12} md={3}>
          <Figure>
            <a href='https://tiger21.com/insights/crypto-collectibles-101-nft/'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                width={371}
                height={480}
                alt="171x180"
                src={NFTArticle3}
              /></a>
          </Figure>
          <p><a
            href='https://tiger21.com/insights/crypto-collectibles-101-nft/'
            target='_blank'
            rel='noreferrer'>Crypto Collectibles 101 | Non-Fungible Tokens</a></p>
        </Col>
        <Col xs={12} md={3}>
          <Figure>
            <a href='https://medium.com/pandoraprotocol/pandora-protocol-bringing-real-value-to-illiquid-real-world-assets-via-tokenisation-3fdb16239b80'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={NFTArticle4}
              /></a>
          </Figure>
          <p><a
            href='https://medium.com/pandoraprotocol/pandora-protocol-bringing-real-value-to-illiquid-real-world-assets-via-tokenisation-3fdb16239b80'
            target='_blank'
            rel='noreferrer'>Pandora Protocol: Bringing Real Value To Illiquid Real-World Assets Via Tokenisation</a></p>
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
        <Col xs={12} md={3}>
          <Figure>
            <a href='https://ncfacanada.org/nft-fire-hose-educational-resources/'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={NFTArticle5}
              /></a>
          </Figure>
          <p><a
            href='https://ncfacanada.org/nft-fire-hose-educational-resources/'
            target='_blank'
            rel='noreferrer'>NFT Fire hose: Educational Resources</a></p>
        </Col>
        <Col xs={12} md={3}>
          <Figure>
            <a href='https://www.amazon.com/gp/product/B093XTZKKX/'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={NFTArticle6}
              /></a>
          </Figure>
          <p><a
            href='https://www.amazon.com/gp/product/B093XTZKKX/'
            target='_blank'
            rel='noreferrer'>The 15-Minute Guide to NFTs: The ultra-fast primer to understand non-fungible tokens</a></p>
        </Col>
        <Col xs={12} md={3}>
          <Figure>
            <a href='https://www.howtonft.org/'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={NFTArticle7}
              /></a>
          </Figure>
          <p><a
            href='https://www.howtonft.org/'
            target='_blank'
            rel='noreferrer'>How to NFT?: Free Resources to Learn How to Create NFTs</a></p>
        </Col>
        <Col xs={12} md={3}>
          <Figure>
            <a href='https://www.forumnft.com/'
              target='_blank'
              rel='noreferrer'>
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={NFTArticle8}
              /></a>
          </Figure>
          <p><a
            href='https://www.forumnft.com/'
            target='_blank'
            rel='noreferrer'>Forum NFT(Web): Online Forums and Discussion Boards for NFT Talk</a></p>
        </Col>
      </Row>

    </Container>

  );
}

export default Resources;