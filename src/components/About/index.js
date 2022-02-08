import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import avatar from './../../images/avatar.png';

function About() {
    return (

        <div className='about container'>
            <div className='about-header'>
                <h1>About</h1>
                <p>Read on to learn about the App and the Team!</p>
            </div>
            <hr
                
                style={{
                color: '#000000',
                height: 5,
                borderColor: '#000000',
                }}
            />
            <div className='about-card'>
                <h2>Purpose of the App</h2>
                <p>NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they're secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.</p>

                <p>NFT stands for non-fungible token. Non-fungible is an economic term that you could use to describe things like your furniture, a song file, or your computer. These things are not interchangeable for other items because they have unique properties.</p>

                <p>Fungible items, on the other hand, can be exchanged because their value defines them rather than their unique properties. For example, ETH or dollars are fungible because 1 ETH / $1 USD is exchangeable for another 1 ETH / $1 USD.</p>

                <h2>We are Gecko Team 7</h2>
                <CardGroup>
                    <Card>
                        {/* <Card.Img variant="top" src={logo} width="350"
                        height="400" /> */}
                        <div className="circle">
                            <div className="shape">
                                <Card.Img variant="top" src={avatar} width="280"
                                    height="280" />

                            </div>

                        </div>

                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <div className="circle">
                            <div className="shape">
                                <Card.Img variant="top" src={avatar} width="280"
                                    height="280" />

                            </div>

                        </div>
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <div className="circle">
                            <div className="shape">
                                <Card.Img variant="top" src={avatar} width="280"
                                    height="280" />

                            </div>

                        </div>
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>

        </div>

    );
}

export default About;
