import React from 'react';
import { Container } from 'reactstrap';
import upload from './resource/cloud-upload-fill.svg';
import forgery from './resource/file-earmark-image-fill.svg';
import search from './resource/search.svg';
import  './service.css';



const Service = () => {
    return (
        <Container>
          <div id="1"/>
            <div class="setcion_title">
              <h2 class="title">SERVICES</h2>
              <p class="inst">Deerlens는 기존과는 다른 네트워크로<br/>이미지 위조를 잡아냅니다.</p>
            </div>
            <ul class="service_list">
              <li class="Tech_feature01">
                <img src={upload} alt="" class="upload" width="90px" height="90px"></img>
                <div></div>
                <strong class="thick">Upload</strong>
                  <p class="context">모든 이미지 파일을 예측 가능합니다.
                  <br/> 드래그를 통해 이미지를 업로드 해보세요.
                  <br/>ex. jpg, png, tiff 등</p>
                </li>
                <li class="Tech_feature02">
                  <img src={forgery} alt="" class="forgery" width="90px" height="90px"></img>
                  <div></div>
                  <strong class="thick">Forgery</strong>
                  <p class="context">이미지의 DCT Coefficient를 효과적으로 학습합니다.
                  <br/>이는 위조 영역의 segmentation에 신뢰를 더합니다.</p>
                </li>
                <li class="Tech_feature03">
                  <img src={search} alt="" class="search" width="90px" height="90px"></img>
                  <div></div>
                  <strong class="thick">Search</strong>
                  <p class="context">한 번 찾아보세요.<br/>여기만한 사이트가 있는지.</p>
                </li>
            </ul>
          
      </Container>

    );
  }

export default Service;