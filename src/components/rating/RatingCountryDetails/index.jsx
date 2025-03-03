import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { useSelector } from 'react-redux';
import { selectToken } from '../../../store/redux/features/auth/authSelectors';
import { useGetThreeCountriesAverageQuery } from '../../../store/redux/services/analizeData/analizeDataApi';
import { selectPhotoAnalizeData } from '../../../store/redux/features/userData/userDataSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { ButtonTextComponent } from '../../ui/buttons/ButtonTextComponent';
import { Loader } from '../../ui/Loader';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';

export const RatingCountryDetails = ({
  analysis = false,
  handleClick = () => {},
}) => {
  const stylesSchema = styles();

  const [countries, setCountries] = useState([]);
  const [userCountry, setUserCountry] = useState({});

  const userToken = useSelector(selectToken);
  const photoAnalizeData = useSelector(selectPhotoAnalizeData);

  const photoAnalysisId = photoAnalizeData?.id || analysis?.id;
  const {
    data,
    isFetching,
    error: countriesError,
  } = useGetThreeCountriesAverageQuery(
    {
      token: userToken,
      beautyAnalysisId: photoAnalizeData?.id || analysis?.id,
    },
    { skip: !userToken || (!photoAnalysisId && photoAnalysisId !== 0) }
  );

  const createCountryData = () => {
    const newCountries = [data.previous, data.current, data.next];

    setUserCountry(data.current);
    setCountries(newCountries);
  };

  useEffect(() => {
    if (!isFetching && data) {
      createCountryData();
    }
  }, [isFetching, data]);

  return (
    <View style={stylesSchema.container}>
      <TextComponent
        styles={{
          ...textStyles.bold,
          fontSize: 20,
          color: colors.whiteColor,
        }}
      >
        Your country's average rating
      </TextComponent>

      {isFetching && !countriesError && (
        <View className="flex justify-center items-center h-32">
          <Loader />
        </View>
      )}

      {!isFetching && countries.length > 0 && (
        <>
          <View style={stylesSchema.countryContainer}>
            <View style={stylesSchema.country}>
              <View style={stylesSchema.imageContainer}>
                <Image
                  source={{
                    uri: `https://flagcdn.com/60x45/${userCountry?.countryKey}.png`,
                  }}
                  style={stylesSchema.image}
                />
              </View>

              <TextComponent
                styles={{
                  ...textStyles.bold,
                  fontSize: 20,
                  color: colors.whiteColor,
                }}
              >
                {userCountry.average.toFixed(1)}
              </TextComponent>
            </View>

            <ButtonTextComponent
              text={'See all'}
              stylesButton={{
                textStyle: {
                  ...textStyles.bold,
                  color: colors.whiteColor,
                },
              }}
              handleClick={handleClick}
            />
          </View>

          <View style={stylesSchema.countriesContainer}>
            {countries.map(countryData => {
              const { position, countryKey, average, country } = countryData;
              const userCountry = analysis
                ? analysis.user.country
                : photoAnalizeData?.user?.country;

              return (
                <View
                  key={position}
                  style={stylesSchema.countries}
                >
                  <TextComponent
                    styles={{
                      ...textStyles.bold,
                      color:
                        countryKey === userCountry
                          ? colors.whiteColor
                          : colors.textLightPurple,
                    }}
                  >
                    {position}. {country}
                  </TextComponent>

                  <TextComponent
                    styles={{
                      ...textStyles.bold,
                      color:
                        countryKey === userCountry
                          ? colors.whiteColor
                          : colors.textLightPurple,
                    }}
                  >
                    {average.toFixed(1)}
                  </TextComponent>
                </View>
              );
            })}
          </View>
        </>
      )}
    </View>
  );
};
