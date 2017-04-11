import React, { Component } from 'react';
import anime from 'animejs';
import { colors } from '../constants';
import {
  animeBatch,
  playBatch,
  getTransitionAnimation } from '../utils/animation';

class AnimatedTitle extends Component {
  componentDidMount() {
    const letterLine = {
      autoplay: false,
      duration: 1500,
      easing: 'easeInOutSine',
    };

    const sLetter = animeBatch({
      targets: ['#S-line1', '#S-line2', '#S-line3', '#S-line4'],
      sharedProps: {
        ...letterLine,
        strokeDashoffset: 0,
      },
    });

    const iLetter = animeBatch({
      targets: ['#I-line1', '#I-line2', '#I-line3', '#I-line4'],
      sharedProps: {
        ...letterLine,
        strokeDashoffset: 0,
      },
    });

    const mLetter = animeBatch({
      targets: [
        '#M-line1', '#M-line2', '#M-line3', '#M-line4',
        '#M-line1b', '#M-line2b', '#M-line3b', '#M-line4b',
      ],
      props: {
        delay: [0, 0, 0, 0, 860, 900, 940, 990],
      },
      sharedProps: {
        ...letterLine,
        strokeDashoffset: 0,
      },
    });

    const nLetter = animeBatch({
      targets: ['#N-line1', '#N-line2', '#N-line3', '#N-line4'],
      sharedProps: {
        ...letterLine,
        strokeDashoffset: 0,
      },
    });

    const simonDiameter = document.querySelector('#simon').width.baseVal.value;
    const simonTurns = Math.floor(
      window.screen.width / (3.1416 * simonDiameter) / 2,
    );

    const simon = anime({
      targets: ['#simon'],
      delay: letterLine.duration,
      duration: 1000,
      easing: 'linear',
      translateX: ['-100vw', 0],
      rotate: `${simonTurns}turn`,
    });

    function onTransitionEnd() {
      playBatch(sLetter, iLetter, mLetter, nLetter).add(simon);
    }
    const onLoadAnimation = getTransitionAnimation(onTransitionEnd);
    onLoadAnimation.play();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="AnimatedTitle">
        <svg width="123.094" height="168.75" viewBox="0 0 32.568554 44.648438">
          <g fill="none" strokeLinecap="round" strokeWidth="2.109">
            <path
              d="M1.132 38.753c.603.512 1.24.984 1.905 1.413 1.738 1.122 3.66 1.942 5.646 2.523 1.136.332 2.296.587 3.471.724 1.338.157 2.69.16 4.036.102 2.219-.098 4.45-.37 6.544-1.108a14.32 14.32 0 0 0 2.986-1.455c.823-.53 1.59-1.151 2.25-1.873.495-.541.93-1.136 1.315-1.76a13.589 13.589 0 0 0 1.835-4.76c.295-1.674.254-3.399-.035-5.074-.277-1.603-.785-3.178-1.612-4.58a11.166 11.166 0 0 0-4.688-4.321 12.149 12.149 0 0 0-2.95-.985c-.872-.174-1.758-.26-2.643-.336-1.152-.1-2.307-.184-3.445-.385-.462-.08-.922-.182-1.357-.357-.435-.174-.845-.427-1.156-.777a2.531 2.531 0 0 1-.62-1.505 2.806 2.806 0 0 1 .383-1.588c.447-.764 1.222-1.293 2.051-1.603 1.25-.467 2.635-.478 3.947-.235.831.155 1.64.407 2.433.7.615.229 1.22.481 1.815.758"
              id="S-line1"
              stroke={colors.yellow}
              strokeDasharray="79.4126205444336"
              strokeDashoffset="79.4126205444336"
            />
            <path
              d="M3.98 36.508a16.984 16.984 0 0 0 3.786 2.233c2.036.868 4.229 1.33 6.433 1.53 2.106.192 4.263.143 6.29-.466 1.577-.473 3.058-1.289 4.255-2.42a9.573 9.573 0 0 0 2.75-4.794c.3-1.313.31-2.684.097-4.013-.26-1.623-.864-3.207-1.866-4.51a8.505 8.505 0 0 0-6.01-3.248 74.607 74.607 0 0 1-4.77-.282c-1.307-.12-2.653-.286-3.786-.946a5.172 5.172 0 0 1-1.947-2.053 5.996 5.996 0 0 1-.673-2.758c-.01-1.739.707-3.462 1.918-4.71 1.303-1.344 3.113-2.115 4.957-2.429 1.81-.307 3.68-.202 5.466.223a15.63 15.63 0 0 1 4.905 2.106"
              id="S-line2"
              stroke={colors.blue}
              strokeDasharray="80.08199310302734"
              strokeDashoffset="80.08199310302734"
            />
            <path
              d="M28.672 7.698a17.603 17.603 0 0 0-4.654-2.366c-1.583-.527-3.235-.827-4.896-.996-2.163-.222-4.37-.224-6.49.266-1.733.4-3.417 1.145-4.723 2.353-1.112 1.028-1.918 2.363-2.416 3.792a11.507 11.507 0 0 0-.631 3.88c.014 1.672.385 3.346 1.13 4.843.654 1.31 1.612 2.497 2.87 3.248 1.592.953 3.517 1.139 5.372 1.218a108.9 108.9 0 0 0 3.164.077c1.095.014 2.223.032 3.228.468.945.41 1.714 1.173 2.224 2.068.51.895.772 1.917.863 2.943.12 1.34-.058 2.736-.715 3.91-.65 1.16-1.738 2.039-2.951 2.585-1.214.546-2.549.778-3.877.844a16.216 16.216 0 0 1-4.598-.423 15.854 15.854 0 0 1-4.904-2.106"
              id="S-line3"
              stroke={colors.red}
              strokeDasharray="80.21588134765625"
              strokeDashoffset="80.21588134765625"
            />
            <path
              d="M31.452 5.667c-.998-.7-2.04-1.34-3.115-1.916-1.218-.651-2.485-1.22-3.802-1.636-1.605-.507-3.276-.783-4.953-.929a31.603 31.603 0 0 0-3.883-.102c-1.624.058-3.253.25-4.805.73A15.857 15.857 0 0 0 7.99 3.067c-.768.42-1.51.893-2.195 1.438-.894.71-1.691 1.545-2.346 2.48a11.59 11.59 0 0 0-1.935 4.823c-.158.998-.187 2.014-.148 3.025.037.958.135 1.914.316 2.856.276 1.44.75 2.852 1.498 4.115 1.129 1.906 2.86 3.421 4.823 4.45a12.866 12.866 0 0 0 3.485 1.244c.786.154 1.584.227 2.383.275.779.047 1.56.07 2.339.048.617-.018 1.237-.065 1.85.003.614.069 1.232.263 1.696.67.332.29.573.681.683 1.107.111.426.091.885-.055 1.3-.184.52-.558.96-1.006 1.282-.63.454-1.395.682-2.158.829a13.32 13.32 0 0 1-4.159.113c-.965-.12-1.923-.338-2.821-.713a8.421 8.421 0 0 1-.807-.388"
              id="S-line4"
              stroke={colors.green}
              strokeDasharray="79.80929565429688"
              strokeDashoffset="79.80929565429688"
            />
          </g>
        </svg>
        <svg width="47.008" height="135.103" viewBox="0 0 12.437566 35.745961">
          <g
            fill="none"
            strokeLinecap="round"
            strokeWidth="2.109"
            strokeDasharray="33.606529235839844"
            strokeDashoffset="33.606529235839844"
          >
            <path
              d="M1.064 34.676L1.054 1.07"
              id="I-line1"
              stroke={colors.green}
            />
            <path
              d="M4.494 1.07L4.504 34.676"
              id="I-line2"
              stroke={colors.red}
            />
            <path
              d="M7.943 34.676L7.933 1.07"
              id="I-line3"
              stroke={colors.yellow}
            />
            <path
              d="M11.405307 1.0694677L11.415 34.676"
              id="I-line4"
              stroke={colors.blue}
            />
          </g>
        </svg>
        <svg width="208.499" height="142.074" viewBox="0 0 55.165365 37.590507">
          {/* Lines of the second «m» wave are placed first to avoid overlap */}
          <g fill="none" strokeLinecap="round" strokeWidth="2.109">
            <path
              d="M27.62 4.051c.633-.44 1.293-.84 1.975-1.197a16.267 16.267 0 0 1 2.34-1.012 14.442 14.442 0 0 1 3.077-.678 26.143 26.143 0 0 1 3.124-.149c1.561.02 3.126.18 4.637.57 1.054.272 2.076.655 3.075 1.088 1.072.465 2.125.993 3.072 1.678a11.734 11.734 0 0 1 3.092 3.368c1.067 1.736 1.705 3.72 1.953 5.743.174 1.421.16 2.858.147 4.29-.052 6.233-.054 12.467-.005 18.7"
              id="M-line1b"
              stroke={colors.blue}
              strokeDasharray="56.31528091430664"
              strokeDashoffset="56.31528091430664"
            />
            <path
              d="M29.995 6.62a14.525 14.525 0 0 1 3.74-1.608c1.437-.391 2.929-.558 4.418-.578 1.179-.016 2.365.061 3.514.327.984.228 1.932.592 2.848 1.016.875.404 1.727.867 2.49 1.456a8.735 8.735 0 0 1 1.812 1.9 9.25 9.25 0 0 1 1.044 1.985c.38.99.6 2.035.716 3.089.119 1.094.124 2.197.122 3.298-.004 1.394-.02 2.787-.035 4.18-.052 4.951-.085 9.902-.098 14.853"
              id="M-line2b"
              stroke={colors.yellow}
              strokeDasharray="48.4085807800293"
              strokeDashoffset="48.4085807800293"
            />
            <path
              d="M32.069 9.81c.786-.617 2.073-1.26 3.8-1.643 3.07-.595 6.13.238 7.932 1.255 1.23.787 1.885 1.136 2.7 2.816.667 1.377.646 3.06.704 5.138.061 3.625-.187 11.8-.077 19.124"
              id="M-line3b"
              stroke={colors.red}
              strokeDasharray="40.68498229980469"
              strokeDashoffset="40.68498229980469"
            />
            <path
              d="M33.03 14.014c.608-1.226 1.432-1.787 2.115-2.035.578-.23 2.32-.462 3.795-.356.896.065 2.948.14 3.996 1.89.353.645.49 1.278.592 2.112.107.874.115 1.508.144 2.14.046 1.46-.029 5.03-.011 6.235.017 1.11-.154 12.502-.154 12.502"
              id="M-line4b"
              stroke={colors.green}
              strokeDasharray="34.5534"
              strokeDashoffset="34.5534"
            />
            {AnimatedTitle.nPaths(['M-line1', 'M-line2', 'M-line3', 'M-line4'])}
          </g>
        </svg>
        <svg
          id="simon"
          width="138.896"
          height="138.896"
          viewBox="0 0 36.749559 36.749559"
        >
          <g transform="translate(-41.188 -54.013)">
            <path
              d="M59.563 54.013000000000005 l 0 18.375 l -18.375 0 A 18.375 18.375 0 0 1 59.563 54.013000000000005 z"
              fill={colors.green}
            />
            <path
              d="M59.563 54.013000000000005 l 0 18.375 l 18.375 0 A 18.375 18.375 0 0 0 59.563 54.013000000000005 z"
              fill={colors.red}
            />
            <path
              d="M41.188 72.388 l 18.375 0 l 0 18.375 A 18.375 18.375 0 0 1 41.188 72.388 z"
              fill={colors.yellow}
            />
            <path
              d="M77.938 72.388 l -18.375 0 l 0 18.375 A 18.375 18.375 0 0 0 77.938 72.388"
              fill={colors.blue}
            />
          </g>
        </svg>
        <svg width="129.231" height="142.004" viewBox="0 0 34.192373 37.571852">
          <g fill="none" strokeLinecap="round" strokeWidth="2.109">
            {AnimatedTitle.nPaths(['N-line1', 'N-line2', 'N-line3', 'N-line4'])}
          </g>
        </svg>
        <style jsx>{`
          .AnimatedTitle {
            align-items: center;
            display: flex;
            justify-content: center;
            width: 100%; /* If the width isn't setted, the SVG won't scale */
          }

          /* Put some space between the letters */
          svg {
            margin-left: 2vmin;
            top: 10vmin;
          }
        `}</style>
      </div>
    );
  }
}

// Paths of the «n» appear two times, in «m» and «n». Reuse them!
AnimatedTitle.nPaths = function nPaths(pathIds) {
  return (
    <g fill="none" strokeLinecap="round" strokeWidth="2.109">
      <path
        d="M1.086 36.46l-.015-22.646c.006-1.102.156-2.203.444-3.266.273-1.006.672-1.982 1.233-2.86.7-1.096 1.64-2.022 2.664-2.824a19.711 19.711 0 0 1 3.132-1.991 17.35 17.35 0 0 1 2.34-1.011c.996-.34 2.03-.568 3.078-.678a25.139 25.139 0 0 1 3.124-.15c1.56.023 3.122.192 4.637.57a17.06 17.06 0 0 1 3.074 1.088 14.703 14.703 0 0 1 2.874 1.745c1.181.927 2.199 2.06 2.993 3.335.496.716.918 1.484 1.256 2.287.393.932.673 1.91.85 2.905.243 1.354.298 2.734.332 4.11.046 1.86.056 3.723.03 5.585l-.076 13.784"
        id={pathIds[0]}
        stroke={colors.blue}
        strokeDasharray="90.5003662109375"
        strokeDashoffset="90.5003662109375"
      />
      <path
        d="M4.46 36.561c.052-6.495.077-12.99.073-19.485-.001-1.945.002-3.93.626-5.772.65-1.915 1.969-3.588 3.651-4.71 1.134-.756 2.42-1.266 3.74-1.609 1.44-.374 2.93-.554 4.418-.578 1.18-.019 2.365.06 3.514.328.984.228 1.932.592 2.849 1.015.874.405 1.727.867 2.488 1.457a8.737 8.737 0 0 1 1.813 1.9 9.25 9.25 0 0 1 1.045 1.985c.38.989.6 2.035.715 3.088.119 1.094.124 2.198.122 3.299-.003 1.393-.02 2.787-.035 4.18-.052 4.95-.085 9.902-.097 14.852"
        id={pathIds[1]}
        stroke={colors.yellow}
        strokeDasharray="79.79737854003906"
        strokeDashoffset="79.79737854003906"
      />
      <path
        d="M7.93 36.496l-.004-3.341-.011-7.427c-.004-2.724-.056-3.914-.062-6.053-.003-1.07-.015-1.728-.032-3.204-.013-1.195.14-2.712.249-3.195.272-1.331.9-2.088 2-3.152 1.118-1.079 2.769-1.755 4.463-1.973 3.07-.594 6.13.238 7.932 1.256 1.229.787 2.314 1.715 2.7 2.816.437 1.248.513 1.935.67 3.517.293 3.625-.153 13.42-.043 20.745"
        id={pathIds[2]}
        stroke={colors.red}
        strokeDasharray="68.49258422851562"
        strokeDashoffset="68.49258422851562"
      />
      <path
        d="M11.497 36.5c.01-6.928-.121-5.397-.082-12.324.017-.925-.103-4.847-.037-5.996-.07-1.421.079-3.432.48-4.154.607-1.226 1.338-1.787 2.021-2.035.577-.23 2.32-.462 3.795-.356.896.065 2.948.14 3.996 1.89.353.645.49 1.278.592 2.112.107.874.115 1.508.143 2.14.047 1.46-.028 5.03-.01 6.235.017 1.11-.154 12.502-.154 12.502"
        id={pathIds[3]}
        stroke={colors.green}
        strokeDasharray="57.02037048339844"
        strokeDashoffset="57.02037048339844"
      />
    </g>
  );
};

export default AnimatedTitle;
