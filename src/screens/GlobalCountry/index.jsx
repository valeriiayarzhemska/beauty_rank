import { BackgroundWrapper } from '../../components/BackgroundWrapper';

import { CountryRank } from '../../components/countryRanking/CountryRank';

import { styles } from './style';

export const GlobalCountry = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper
      additionalStyles={{ paddingBottom: 126 }}
      isBgGradient={true}
    >
      <CountryRank />
    </BackgroundWrapper>
  );
};
