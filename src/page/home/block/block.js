import React from 'react';
import styled from 'styled-components';
import {CONTAINER} from "../../../components/header/header";

const BLOCKID = styled.section`
    padding: 50px 0 100px 0;
`;

const BLOCKGROUP = styled.div`
    
`;

const BLOCKTEXTONE = styled.h1`
    color: black;
    text-align: center;
    font-size: 45px;
`;

const BLOCKTEXTTWO = styled.p`
    color: black;
    width: 90%;
    padding: 20px 0;
    text-align: center;
    margin: 0 auto;
    font-size: 17px;
    line-height: 30px;
`;

const BLOCK = styled.div`
    width: 200px;
    height: 200px;
    background: rebeccapurple;
    border-radius: 10px;
    transition: .4s;
    &:hover {
        background: red;
    }
`;


const BLOCKGENERAL = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Block = () => {
    return (
        <BLOCKID id="block">
            <CONTAINER className="container">
                <BLOCKGROUP className="block-group">
                    <BLOCKTEXTONE>Hello Block</BLOCKTEXTONE>
                    <BLOCKTEXTTWO>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                        deleniti dolores ducimus eos facere impedit iure libero, natus,
                        obcaecati omnis pariatur possimus quasi quos rerum, tempore veniam voluptatum?
                        Facere magnam quis soluta voluptates. Architecto consequatur deserunt et expedita facere id incidunt, inventore, ipsam minus natus odio pariatur porro praesentium quia recusandae sequi sint. Accusantium ad deserunt eligendi fugit harum iure quis sint ut vero. Ab, quo vero. Alias animi commodi ex fugiat fugit impedit, laborum modi necessitatibus quasi qui quisquam, rem, repudiandae similique tempora ullam vel voluptates. A adipisci aliquid atque debitis deserunt ducimus eius enim eveniet harum, in labore laudantium magni maxime minima nam nulla odio officia officiis optio quaerat quam quasi quos repellat sit soluta! A assumenda autem corporis culpa dignissimos dolorum eaque expedita facere hic illo inventore iure iusto labore laudantium mollitia, natus nihil nisi nobis odio odit omnis quidem quis reiciendis sapiente sint suscipit vel veritatis!</BLOCKTEXTTWO>
                    <BLOCKGENERAL className="block-general">
                        <BLOCK className="block"></BLOCK>
                        <BLOCK className="block"></BLOCK>
                        <BLOCK className="block"></BLOCK>
                        <BLOCK className="block"></BLOCK>
                        <BLOCK className="block"></BLOCK>
                    </BLOCKGENERAL>
                </BLOCKGROUP>
            </CONTAINER>
        </BLOCKID>
    );
};

export default Block;