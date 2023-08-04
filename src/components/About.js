import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const teamData = [
  {
    "id": 1,
    "name": "Ian Maina",
    "role": "Team Lead",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPB3IzuSNurmR_oJal4OToS7iiqahx9nP1gw&usqp=CAU",
    "social": "https://github.com/iammuirurimaina"
  },
  {
    "id": 2,
    "name": "Vany Ikunze",
    "role": "Product Manager",
    "photo": "https://media.istockphoto.com/id/1293575165/vector/black-business-woman-empowering-black-people-vector-illustration.jpg?s=612x612&w=0&k=20&c=z-ajkEj4B8vYUmRdbNtKpCSvf9fFxjZpGHhnvt8CswA=",
    "social": "https://github.com/vanyikuze"
  },
  {
    "id": 3,
    "name": "Wayne Keya",
    "role": "Senior Developer",
    "photo": "https://thumbs.dreamstime.com/z/head-elderly-man-beard-profile-stylish-grandfather-avatar-social-networks-vector-flat-illustration-188797874.jpg?w=768",
    "social": "https://github.com/KE-mohia"
  },
  {
    "id": 4,
    "name": "Dennis Mwangi",
    "role": "Senior UI/UX Designer",
    "photo": "https://img.freepik.com/premium-vector/male-portrait-people-profile-perfect-social-media-business-presentations-user-interface-ux-graphic-web-design-applications-interfaces-vector-illustration_501069-2273.jpg?w=2000",
    "social": "https://github.com/gituhumwangi"
  }
];

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">About Us</h1>
      <div
        className="ui centered segment"
        style={{ fontFamily: 'Open Sans', fontSize: '1.5rem', lineHeight: '2rem' }}
      >
        <p>
          Welcome to our news aggregator site. We aim to provide you with the latest and most relevant news from various sources. Our team of dedicated professionals works hard to curate and deliver the most important and up-to-date information right to your fingertips.
        </p>
        <p>
          Our mission is to keep you informed, whether it's breaking news, in-depth analysis, or the latest trends and developments. We believe in the power of information to empower individuals and shape the world.
        </p>
        <p>
          Join us on this exciting journey as we strive to bring you the best news experience possible. Feel free to explore our website and discover the latest stories that matter most to you.
        </p>
      </div>
      <br />
      <br />
      <div className="ui raised segment">
        <h2 className="text-center">Meet the Team</h2>
        <div className="ui four cards">
          {teamData.map((member) => (
            <Card key={member.id}>
              <Image src={member.photo} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{member.name}</Card.Header>
                <Card.Meta>{member.role}</Card.Meta>
              </Card.Content>
              {member.social && (
                <Card.Content extra>
                  <a href={member.social} target="_blank" rel="noopener noreferrer">
                    <Icon name="github" />
                    GitHub
                  </a>
                </Card.Content>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;