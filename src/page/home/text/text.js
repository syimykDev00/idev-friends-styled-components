import React from 'react';
import styled from 'styled-components'
import {CONTAINER} from "../../../components/header/header";

const TEXTID = styled.section`
    padding: 50px 0;
`;

const TEXTCONTAINER = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const GROUPTEXTONE = styled.h1`
    color: black;
    font-size: 45px;
    padding-bottom: 30px;
`

const GROUPTEXTTWO = styled.p`
    color: black;
    font-size: 17px;
    width: 700px;
`

const TEXTIMAGE = styled.img`
    height: 450px;
`

const Text = () => {
    return (
        <TEXTID id="text">
            <CONTAINER className="container">
                <TEXTCONTAINER className="text">
                    <div className="text-group">
                        <GROUPTEXTONE>Hello Styled Components</GROUPTEXTONE>
                        <GROUPTEXTTWO>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eos facere in inventore labore
                            molestias reprehenderit sapiente similique tempora. A commodi deleniti dicta earum eligendi
                            et excepturi in ipsam ipsum itaque labore nemo, nihil praesentium provident quisquam ratione
                            reprehenderit tenetur velit, voluptate voluptates! Amet architecto asperiores commodi
                            consequatur corporis cupiditate distinctio doloribus, error eveniet ex expedita fuga hic
                            illo in ipsam necessitatibus non obcaecati officia perferendis possimus quos repudiandae sed
                            unde veniam voluptate. A ab accusamus aperiam architecto assumenda at aut blanditiis
                            consectetur dignissimos, dolorem explicabo fugiat id illo incidunt mollitia nam non nulla
                            perspiciatis quae quas rem reprehenderit velit veritatis voluptate voluptatem. Ab, aliquam
                            dolores eligendi id inventore libero, minima minus molestias, nihil officiis pariatur quas
                            recusandae temporibus. A accusantium amet cupiditate dignissimos dolore et, eum
                            exercitationem, id incidunt ipsam labore magni mollitia nemo nostrum odio perferendis porro
                            quibusdam quidem quisquam sapiente tempora totam voluptas voluptate? Aut, perferendis,
                            repellat.</GROUPTEXTTWO>
                    </div>
                    <TEXTIMAGE src={'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg'} alt="img"/>
                </TEXTCONTAINER>
            </CONTAINER>
        </TEXTID>
    );
};

export default Text;