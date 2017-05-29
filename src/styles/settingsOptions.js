import { colors } from '../constants';

export const SettingsOptionsCSS = `
  .SettingsOptions {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    max-width: 90vw;
  }

  .SettingsOptions > :global(*) {
    margin-bottom: 1rem;
  }

  .Slider-text {
    color: ${colors.yellow};
    font-weight: 700;
    letter-spacing: .1em;
  }

  .Slider-speedFactor {
    color: ${colors.white};
  }
`;
