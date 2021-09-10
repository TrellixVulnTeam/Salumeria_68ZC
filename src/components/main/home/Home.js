import './home.css';
// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import video1 from './steEsibtítion.MOV';
import video2 from './IMG_2249.mov';
// import video2 from './IMG_2249.mov';
import HoverVideoPlayer from 'react-hover-video-player';
import ClickHere from '../../../assets/icons/unnamed.png';

function Home() {
  return (
    <div className='Home'>
      <section>
        <div className='trainerWrapper'>
          <img src={ClickHere} alt='' className='clickHereIcon' />
          <div className='textWrapper'>
            <Link className='link-nav' to='/training'>
              <h2>ALLENATI CON STE</h2>
            </Link>
          </div>
          <HoverVideoPlayer
            videoSrc={video1}
            className='videoBodySolution'
            pausedOverlay={
              <img
                src='thumbnail-image.jpg'
                alt=''
                style={
                  {
                    // Make the image expand to cover the video's dimensions
                    // width: "100%",
                    // height: "100%",
                    // objectFit: "cover",
                  }
                }
              />
            }
            loadingOverlay={<div className='loading-spinner-overlay' />}
          />
          {/* <video className='trainerBackground' src={video1} autoPlay='true' /> */}

          {/* FACEBOOK bodysolution*/}
          <div className='socialIcons'>
            <a
              className='navLink'
              href='https://www.facebook.com/calisthenicscarbonianlf  '
              target='blank'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
                <path
                  fill='#039be5'
                  d='M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z'
                />
                <path
                  fill='#fff'
                  d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'
                />
              </svg>
            </a>
            {/* INSTAGRAM     http://www.instagram.com/stemanca_bodysolution/ */}
            <a
              href='https://www.instagram.com/stemanca_bodysolution/'
              target='blank'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
                <path
                  fill='#8585cc'
                  d='M30.5,38.5c4.418,0,8-3.582,8-8v-21c0-4.418-3.582-8-8-8h-21c-4.418,0-8,3.582-8,8v21 c0,4.418,3.582,8,8,8H30.5z'
                />
                <path
                  fill='#8d8dd8'
                  d='M3.4,4.331C2.217,5.726,1.5,7.528,1.5,9.5v21c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8v-21 c0-0.503-0.052-0.992-0.141-1.469C32.135,4.22,24.832,2,17,2C12.229,2,7.657,2.832,3.4,4.331z'
                />
                <path
                  fill='#bd82f4'
                  d='M1.505,9.404C1.504,9.437,1.5,9.468,1.5,9.5v21c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8V12.897 C32.439,8.56,25.021,6,17,6C11.465,6,6.22,7.226,1.505,9.404z'
                />
                <path
                  fill='#ed73f4'
                  d='M1.5,13.88V30.5c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8V17.981C32.724,13.013,25.217,10,17,10 C11.394,10,6.124,11.414,1.5,13.88z'
                />
                <path
                  fill='#f97dcd'
                  d='M17,14c-5.705,0-11.014,1.664-15.5,4.509V30.5c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8v-6.935 C33.194,17.698,25.534,14,17,14z'
                />
                <path
                  fill='#fc9c95'
                  d='M17,18c-5.861,0-11.237,2.033-15.5,5.411V30.5c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8v-0.238 C34.143,22.925,26.152,18,17,18z'
                />
                <path
                  fill='#ffac99'
                  d='M17,22c-6.145,0-11.66,2.651-15.5,6.859V30.5c0,4.418,3.582,8,8,8h21c2.465,0,4.668-1.117,6.136-2.87 C33.648,27.674,25.999,22,17,22z'
                />
                <path
                  fill='#ffc49c'
                  d='M30.5,38.5c0.957,0,1.87-0.177,2.721-0.485C31.087,31.065,24.649,26,17,26 c-6.186,0-11.592,3.309-14.566,8.248C3.778,36.777,6.437,38.5,9.5,38.5H30.5z'
                />
                <path
                  fill='#ffde8d'
                  d='M17,30c-5.137,0-9.573,2.984-11.684,7.309C6.535,38.06,7.964,38.5,9.5,38.5h19.683 C27.35,33.542,22.595,30,17,30z'
                />
                <path
                  fill='#fff69f'
                  d='M17,34c-3.319,0-6.193,1.813-7.753,4.487C9.332,38.49,9.415,38.5,9.5,38.5h15.26 C23.203,35.818,20.324,34,17,34z'
                />
                <path
                  fill='#8b75a1'
                  d='M31,2c3.86,0,7,3.14,7,7v22c0,3.86-3.14,7-7,7H9c-3.86,0-7-3.14-7-7V9c0-3.86,3.14-7,7-7H31 M31,1H9 C4.582,1,1,4.582,1,9v22c0,4.418,3.582,8,8,8h22c4.418,0,8-3.582,8-8V9C39,4.582,35.418,1,31,1L31,1z'
                />
                <path
                  fill='#fff'
                  d='M27.5 11A1.5 1.5 0 1 0 27.5 14A1.5 1.5 0 1 0 27.5 11Z'
                />
                <path
                  fill='none'
                  stroke='#fff'
                  stroke-miterlimit='10'
                  stroke-width='2'
                  d='M20 14A6 6 0 1 0 20 26A6 6 0 1 0 20 14Z'
                />
                <path
                  fill='none'
                  stroke='#fff'
                  stroke-miterlimit='10'
                  stroke-width='2'
                  d='M33,14.5c0-4.142-3.358-7.5-7.5-7.5 c-2.176,0-8.824,0-11,0C10.358,7,7,10.358,7,14.5c0,2.176,0,8.824,0,11c0,4.142,3.358,7.5,7.5,7.5c2.176,0,8.824,0,11,0 c4.142,0,7.5-3.358,7.5-7.5C33,23.324,33,16.676,33,14.5z'
                />
              </svg>
              <p>stemanca_bodysolution</p>
            </a>
          </div>
        </div>

        <div className='welnessWrapper'>
          <img src={ClickHere} alt='' className='clickHereIcon' />
          <div className='textWrapper'>
            <Link className='link-nav' to='/welLness'>
              <h2>I MIEI TRATTAMENTI</h2>
            </Link>
          </div>

          {/* <video className='welnessBackground' src={video2} autoPlay='true' /> */}
          <HoverVideoPlayer
            videoSrc={video2}
            className='videoTrattamentoPsicofisico'
            pausedOverlay={
              <img
                src='thumbnail-image.jpg'
                alt=''
                style={
                  {
                    // Make the image expand to cover the video's dimensions
                    // width: "100%",
                    // height: "100%",
                    // objectFit: "cover",
                  }
                }
              />
            }
            loadingOverlay={<div className='loading-spinner-overlay' />}
          />
          {/* FACEBOOK Psicofisico*/}
          <div className='socialIcons'>
            <a
              className='navLink'
              href='https://www.facebook.com/stemanca'
              target='blank'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
                <path
                  fill='#039be5'
                  d='M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z'
                />
                <path
                  fill='#fff'
                  d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'
                />
              </svg>
            </a>
            {/* INSTAGRAM     https://www.instagram.com/trattamento_psicofisico/ */}

            <a
              className='navLink'
              href='https://www.instagram.com/trattamento_psicofisico'
              target='blank'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
                <path
                  fill='#8585cc'
                  d='M30.5,38.5c4.418,0,8-3.582,8-8v-21c0-4.418-3.582-8-8-8h-21c-4.418,0-8,3.582-8,8v21 c0,4.418,3.582,8,8,8H30.5z'
                />
                <path
                  fill='#8d8dd8'
                  d='M3.4,4.331C2.217,5.726,1.5,7.528,1.5,9.5v21c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8v-21 c0-0.503-0.052-0.992-0.141-1.469C32.135,4.22,24.832,2,17,2C12.229,2,7.657,2.832,3.4,4.331z'
                />
                <path
                  fill='#bd82f4'
                  d='M1.505,9.404C1.504,9.437,1.5,9.468,1.5,9.5v21c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8V12.897 C32.439,8.56,25.021,6,17,6C11.465,6,6.22,7.226,1.505,9.404z'
                />
                <path
                  fill='#ed73f4'
                  d='M1.5,13.88V30.5c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8V17.981C32.724,13.013,25.217,10,17,10 C11.394,10,6.124,11.414,1.5,13.88z'
                />
                <path
                  fill='#f97dcd'
                  d='M17,14c-5.705,0-11.014,1.664-15.5,4.509V30.5c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8v-6.935 C33.194,17.698,25.534,14,17,14z'
                />
                <path
                  fill='#fc9c95'
                  d='M17,18c-5.861,0-11.237,2.033-15.5,5.411V30.5c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8v-0.238 C34.143,22.925,26.152,18,17,18z'
                />
                <path
                  fill='#ffac99'
                  d='M17,22c-6.145,0-11.66,2.651-15.5,6.859V30.5c0,4.418,3.582,8,8,8h21c2.465,0,4.668-1.117,6.136-2.87 C33.648,27.674,25.999,22,17,22z'
                />
                <path
                  fill='#ffc49c'
                  d='M30.5,38.5c0.957,0,1.87-0.177,2.721-0.485C31.087,31.065,24.649,26,17,26 c-6.186,0-11.592,3.309-14.566,8.248C3.778,36.777,6.437,38.5,9.5,38.5H30.5z'
                />
                <path
                  fill='#ffde8d'
                  d='M17,30c-5.137,0-9.573,2.984-11.684,7.309C6.535,38.06,7.964,38.5,9.5,38.5h19.683 C27.35,33.542,22.595,30,17,30z'
                />
                <path
                  fill='#fff69f'
                  d='M17,34c-3.319,0-6.193,1.813-7.753,4.487C9.332,38.49,9.415,38.5,9.5,38.5h15.26 C23.203,35.818,20.324,34,17,34z'
                />
                <path
                  fill='#8b75a1'
                  d='M31,2c3.86,0,7,3.14,7,7v22c0,3.86-3.14,7-7,7H9c-3.86,0-7-3.14-7-7V9c0-3.86,3.14-7,7-7H31 M31,1H9 C4.582,1,1,4.582,1,9v22c0,4.418,3.582,8,8,8h22c4.418,0,8-3.582,8-8V9C39,4.582,35.418,1,31,1L31,1z'
                />
                <path
                  fill='#fff'
                  d='M27.5 11A1.5 1.5 0 1 0 27.5 14A1.5 1.5 0 1 0 27.5 11Z'
                />
                <path
                  fill='none'
                  stroke='#fff'
                  stroke-miterlimit='10'
                  stroke-width='2'
                  d='M20 14A6 6 0 1 0 20 26A6 6 0 1 0 20 14Z'
                />
                <path
                  fill='none'
                  stroke='#fff'
                  stroke-miterlimit='10'
                  stroke-width='2'
                  d='M33,14.5c0-4.142-3.358-7.5-7.5-7.5 c-2.176,0-8.824,0-11,0C10.358,7,7,10.358,7,14.5c0,2.176,0,8.824,0,11c0,4.142,3.358,7.5,7.5,7.5c2.176,0,8.824,0,11,0 c4.142,0,7.5-3.358,7.5-7.5C33,23.324,33,16.676,33,14.5z'
                />
              </svg>
              <p>trattamento_psicofisico</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
