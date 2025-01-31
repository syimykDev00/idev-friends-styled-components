import React from 'react';
import styled from 'styled-components';
import {CONTAINER} from "../../../components/header/header";

const HEROID = styled.section`
    padding: 100px 0;
`

const HEROCONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const HEROTEXTONE = styled.h1`
    color: black;
    font-size: 55px;
    font-weight: 600;
`

const HEROTEXTTWO = styled.p`
    width: 1000px;
    padding: 20px 0;
    margin: 0 auto;
    color: 17px
`

const IMAGE = styled.img`
    width: 70%;
`

const Hero = () => {
    return (
        <HEROID id="hero">
            <CONTAINER className="container">
                <HEROCONTAINER className="hero">
                    <HEROTEXTONE>Hello World</HEROTEXTONE>
                    <HEROTEXTTWO>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium fugiat harum ipsa
                        perspiciatis quae quis quod unde. Consequuntur est ratione totam ullam voluptate. Aliquam
                        asperiores blanditiis consequatur deleniti distinctio doloribus excepturi exercitationem facere
                        fugiat impedit ipsam libero magni modi molestiae officiis, possimus provident, quidem, quo sint
                        unde velit voluptas voluptate voluptates! Architecto asperiores dolorem non odio odit possimus
                        repellendus. Accusantium asperiores dolorem ea eaque, maxime nostrum provident quis quo repellat
                        sapiente tenetur veritatis voluptatum. A aliquam autem, consequuntur corporis debitis doloribus
                        dolorum eaque exercitationem explicabo id impedit ipsa maxime obcaecati pariatur quas quasi qui
                        quidem quod sit vel. Animi blanditiis consequuntur dolorem fugiat impedit ipsum optio quisquam
                        recusandae rem, vitae. Aspernatur commodi et laboriosam molestiae nam. Ab accusantium ad
                        adipisci, alias assumenda dolorem dolores eos illum impedit ipsam itaque iure, molestias,
                        necessitatibus omnis quas quia quod ratione reprehenderit repudiandae rerum sed similique sint
                        totam ullam velit veniam vero voluptatum.</HEROTEXTTWO>
                    <IMAGE src={'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'} alt="img"/>
                </HEROCONTAINER>
            </CONTAINER>
        </HEROID>
    );
};

export default Hero;