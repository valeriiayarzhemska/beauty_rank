import { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

import { useSelector } from 'react-redux';
import {
  selectToken,
  selectUser,
} from '../../../store/redux/features/auth/authSelectors';
import {
  useGetThreeCountriesAverageQuery,
  useGetThreeUsersAverageQuery,
} from '../../../store/redux/services/analizeData/analizeDataApi';

import BlurRightTopWoman from '../../../assets/images/right-top-blur-woman.png';
import BlurLeftTopWoman from '../../../assets/images/left-top-blur-woman.png';
import BlurLeftBottomWoman from '../../../assets/images/right-bottom-blur-woman.png';
import BlurRightBottomWoman from '../../../assets/images/left-bottom-blur-woman.png';
import BlurRightTopMan from '../../../assets/images/right-top-blur-man.png';
import BlurLeftTopMan from '../../../assets/images/left-top-blur-man.png';
import BlurLeftBottomMan from '../../../assets/images/right-bottom-blur-man.png';
import BlurRightBottomMan from '../../../assets/images/left-bottom-blur-man.png';
import BlurContest from '../../../assets/images/blur-contest.png';

import { TextComponent } from '../../ui/TextComponent';
import { Hand } from '../../../assets/icons/Hand';
import { Globus } from '../../../assets/icons/Globus';
import { WidgetWrapper } from '../WidgetWrapper';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';
import { Loader } from '../../ui/Loader';
import { selectIsUserWoman } from '../../../store/redux/features/dashboard/dashboardSelectors';

export const MainWidgets = ({ navigation }) => {
  const stylesSchema = styles();

  const userToken = useSelector(selectToken);
  const user = useSelector(selectUser);
  const isWoman = useSelector(selectIsUserWoman);

  const blurs = isWoman
    ? {
        leftTop: BlurLeftTopWoman,
        rightTop: BlurRightTopWoman,
        leftBottom: BlurLeftBottomWoman,
        rightBottom: BlurRightBottomWoman,
      }
    : {
        leftTop: BlurLeftTopMan,
        rightTop: BlurRightTopMan,
        leftBottom: BlurLeftBottomMan,
        rightBottom: BlurRightBottomMan,
      };

  const [userCountry, setUserCountry] = useState({
    key: user?.analysis?.user?.country,
  });
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  const {
    data,
    isFetching: isCountriesFetching,
    error: countriesError,
  } = useGetThreeCountriesAverageQuery(
    {
      token: userToken,
      beautyAnalysisId: user?.analysis?.id,
    },
    { skip: !userToken || !user?.analysis?.id }
  );
  const {
    data: usersData,
    isFetching: isUsersFetching,
    error: usersError,
  } = useGetThreeUsersAverageQuery(
    {
      token: userToken,
      beautyAnalysisId: user?.analysis?.id,
    },
    { skip: !userToken || !user?.analysis?.id }
  );

  const createCountryData = () => {
    setUserCountry(data.current);

    setIsLoading(false);
  };

  const createUsersData = () => {
    setUsers([
      usersData?.previous,
      { ...usersData?.current, isUser: true },
      usersData?.next,
    ]);

    setIsUsersLoading(false);
  };

  const handleClick = screen => {
    navigation.navigate(screen);
  };

  useEffect(() => {
    if (data && !isCountriesFetching && user) {
      createCountryData();
    }
  }, [isCountriesFetching, data, user]);

  useEffect(() => {
    if (usersData && !isUsersFetching && user) {
      createUsersData();
    }
  }, [isUsersFetching, usersData, user]);

  return (
    <View style={stylesSchema.widgets}>
      <View style={stylesSchema.container}>
        {isUsersLoading && (
          <Loader
            color={colors.purpleColor}
            containerStyles={stylesSchema.loader}
          />
        )}

        <WidgetWrapper
          blurImage={blurs.leftTop}
          handleClick={() => handleClick('PersonalStatistics')}
        >
          {!isUsersLoading && (
            <>
              <View style={stylesSchema.iconContainer}>
                <Hand />
              </View>

              <TextComponent
                styles={{
                  ...textStyles.bold,
                  fontSize: 20,
                  color: colors.whiteColor,
                }}
              >
                Your beauty rating over time
              </TextComponent>

              <TextComponent
                styles={{
                  ...textStyles.semiBold,
                  fontSize: 11,
                  color: colors.whiteColor,
                }}
              >
                Check your beauty rating every day to see if it is improving
              </TextComponent>
            </>
          )}
        </WidgetWrapper>

        <WidgetWrapper
          blurImage={blurs.rightTop}
          minHeight={220}
          handleClick={() => handleClick('GlobalRank')}
        >
          {!isUsersLoading && (
            <>
              <View style={stylesSchema.iconContainer}>
                <Globus color={colors.purpleColor} />
              </View>

              <TextComponent
                styles={{
                  ...textStyles.bold,
                  fontSize: 20,
                  color: colors.whiteColor,
                }}
              >
                Your Global Rank
              </TextComponent>

              <View style={stylesSchema.countriesContainer}>
                {users.map(item => {
                  if (item) {
                    const { position, average, name, isUser = false } = item;

                    return (
                      <View
                        key={position}
                        style={stylesSchema.countries}
                      >
                        <TextComponent
                          styles={{
                            ...textStyles.bold,
                            color: isUser
                              ? colors.whiteColor
                              : colors.textLightPurple,
                            maxWidth: '87%',
                          }}
                        >
                          {position}. {name}
                        </TextComponent>

                        <TextComponent
                          styles={{
                            ...textStyles.bold,
                            color: isUser
                              ? colors.whiteColor
                              : colors.textLightPurple,
                          }}
                        >
                          {average.toFixed(1)}
                        </TextComponent>
                      </View>
                    );
                  }
                })}
              </View>
            </>
          )}
        </WidgetWrapper>
      </View>

      <View style={stylesSchema.container}>
        <WidgetWrapper
          blurImage={blurs.leftBottom}
          itemStyles={stylesSchema.itemWithoutPadding}
        >
          {!isUsersLoading && (
            <>
              <View style={stylesSchema.rankContainer}>
                <TextComponent
                  styles={{
                    ...textStyles.bold,
                    fontSize: 24,
                    color: colors.brownColor,
                  }}
                >
                  {user?.analysis?.position}
                </TextComponent>

                <TextComponent
                  styles={{
                    ...textStyles.regular,
                    fontSize: 14,
                    color: colors.brownColor,
                  }}
                >
                  Place
                </TextComponent>
              </View>
              <View style={stylesSchema.photoContainer}>
                <View style={stylesSchema.imageContainer}>
                  <FastImage
                    source={{
                      uri: `data:image/jpeg;base64,${user?.analysis?.user?.image}`,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                    style={stylesSchema.imageCover}
                  />
                </View>

                <View style={stylesSchema.consentContainer}>
                  <TextComponent
                    styles={{
                      ...textStyles.bold,
                      color: colors.whiteColor,
                    }}
                  >
                    Contest
                  </TextComponent>

                  <View style={stylesSchema.consent}>
                    <Image
                      source={BlurContest}
                      style={stylesSchema.imageBlur}
                    />

                    <TextComponent
                      styles={{
                        ...textStyles.bold,
                        fontSize: 13,
                        color: colors.whiteColor,
                      }}
                    >
                      {/* to finish in the future change on contest */}
                      {user?.analysis?.beautyScore
                        ? `${Number(user?.analysis?.beautyScore).toFixed(1)}`
                        : '10'}
                    </TextComponent>
                  </View>
                </View>
              </View>
            </>
          )}
        </WidgetWrapper>

        <WidgetWrapper
          blurImage={blurs.leftBottom}
          minHeight={134}
          handleClick={() => handleClick('GlobalCountry')}
        >
          {!isUsersLoading && (
            <>
              <View style={stylesSchema.title}>
                <View
                  style={[
                    stylesSchema.iconContainer,
                    stylesSchema.iconFlagContainer,
                  ]}
                >
                  <FastImage
                    source={{
                      uri: `https://flagcdn.com/40x30/${user?.analysis?.user?.country}.png`,
                      priority: FastImage.priority.high,
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
                  {userCountry?.average?.toString()?.slice(0, 3)}
                </TextComponent>
              </View>

              <TextComponent
                styles={{
                  ...textStyles.semiBold,
                  fontSize: 15,
                  color: colors.whiteColor,
                }}
              >
                Your country's rating
              </TextComponent>

              {!isLoading && (
                <View style={stylesSchema.countryRating}>
                  <TextComponent
                    styles={{
                      ...textStyles.bold,
                      color: colors.textLightPurple,
                    }}
                  >
                    {userCountry.position}. {userCountry.country}
                  </TextComponent>

                  <TextComponent
                    styles={{
                      ...textStyles.bold,
                      color: colors.textLightPurple,
                    }}
                  >
                    {userCountry?.average?.toString()?.slice(0, 3)}
                  </TextComponent>
                </View>
              )}
            </>
          )}
        </WidgetWrapper>
      </View>
    </View>
  );
};
