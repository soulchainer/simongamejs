import React from 'react';
import { socialURLs } from '../constants';

const socialIconSVGPaths = {
  twitter: 'M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z',
  facebook: 'M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z',
  github: 'M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z',
  codepen: 'M29.555 11.501l-14-9.333c-0.336-0.224-0.774-0.224-1.109 0l-14 9.333c-0.278 0.185-0.445 0.498-0.445 0.832v9.333c0 0.334 0.167 0.647 0.445 0.832l14 9.333c0.168 0.112 0.361 0.168 0.555 0.168s0.387-0.056 0.555-0.168l14-9.333c0.278-0.185 0.445-0.498 0.445-0.832v-9.333c0-0.334-0.167-0.647-0.445-0.832zM15 20.465l-5.197-3.465 5.197-3.465 5.197 3.465-5.197 3.465zM16 11.798v-6.93l11.197 7.465-5.197 3.465-6-4zM14 11.798l-6 4-5.197-3.465 11.197-7.465v6.93zM6.197 17l-4.197 2.798v-5.596l4.197 2.798zM8 18.202l6 4v6.93l-11.197-7.465 5.197-3.465zM16 22.202l6-4 5.197 3.465-11.197 7.465v-6.93zM23.803 17l4.197-2.798v5.596l-4.197-2.798z',
};

const socialIconsDef = () => (
  <svg className="SocialIconList-definitions">
    <defs>
      {Object.keys(socialURLs).map(socialName => (
        <symbol id={`icon-${socialName}`} key={socialName} viewBox="0 0 32 32">
          <title>{socialName}</title>
          <path d={socialIconSVGPaths[socialName]} />
        </symbol>
      ))}
    </defs>
    <style jsx>{`
      .SocialIconList-definitions {
        display: none;
      }
    `}</style>;
  </svg>
);

const generateSocialIcons = Object.keys(socialURLs).map(socialName => (
  <a
    href={socialURLs[socialName]}
    key={socialName}
    rel="noopener noreferrer"
    target="_blank"
  >
    <svg
      className={`SocialIconList-icon SocialIconList-icon--${socialName}`}
    >
      <use xlinkHref={`#icon-${socialName}`} />
    </svg>
    <style jsx>{`
      .SocialIconList-icon {
        color: white;
        display: inline-block;
        fill: currentColor;
        fill-opacity: .8;
        height: 3rem;
        margin: 1rem;
        stroke: currentColor;
        stroke-width: 0;
        transition: fill .4s, fill-opacity .4s, transform .4s;
        width: 3rem;
      }

      .SocialIconList-icon:hover {
        fill-opacity: 1;
        transform: scale(1.4);
        transition: fill .4s, fill-opacity .4s, transform .4s;
      }
    `}</style>
  </a>
));

const SocialIconList = () => (
  <div className="SocialIconList">
    {socialIconsDef()}
    <div className="SocialIconList-icons">
      {generateSocialIcons}
      <style jsx>{`
        .SocialIconList-icons {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
        }
      `}</style>
    </div>
  </div>
);

export default SocialIconList;
