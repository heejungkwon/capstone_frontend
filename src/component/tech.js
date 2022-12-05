import React from 'react';
import { Container } from 'reactstrap';
import  './tech.css';


const Tech = () => {
    return (
    <Container>
       
        <div id="2"/>
        <div className="container">
            <h3 className='title'>TechNology</h3>
                <p>Deerlens의 기술들을 보여줍니다.</p>
                <div class="quotes">
                    <div >
                    <div class="box box1">
                        <p>Deerlens의 첫 번째 기술은 이것입니다.<br/>가나다라마바사</p>
                    </div>
                    <div class="bg"></div>
                    </div>
                    <div>
                    <div class="box box2">
                        <p>두번째 기술입니다.<br/>가나다라마바사 </p>
                    </div>
                    <div class="bg"></div>
                    </div>
                    <div>
                    <div class="box box3">
                        <p>세번째 기술입니다.<br/>가나다라마바사 </p>
                        
                    </div>
                    <div class="bg"></div>
                    </div>
            </div>
        </div> 
       
    </Container>    
    );
  }

export default Tech;