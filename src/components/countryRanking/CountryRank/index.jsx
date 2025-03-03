import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';

import { useGetCountryAverageQuery } from '../../../store/redux/services/analizeData/analizeDataApi';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../store/redux/features/auth/authSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { ToggleList } from '../../ui/inputs/toggle/ToggleList';
import { ErrorMessage } from '../../ErrorMessage';
import { Loader } from '../../ui/Loader';
import { ButtonComponent } from '../../ui/buttons/ButtonComponent';
import { CountryItem } from '../CountryItem';

import { textStyles } from '../../../constants/constantsStyle';
import { errorMessages, toggleGenderAll } from '../../../constants/constantsUI';

import { styles } from './style';

export const CountryRank = ({ navigation }) => {
  const stylesSchema = styles();

  const [state, setState] = useState({
    error: null,
    isLoading: true,
    users: [],
  });
  const [filters, setFilters] = useState({
    gender: 'all',
    pageSize: 10,
    pageNumber: 1,
  });

  const userToken = useSelector(selectToken);
  const {
    data,
    isFetching,
    error: topError,
    refetch,
  } = useGetCountryAverageQuery(
    {
      token: userToken,
      ...filters,
    },
    { skip: !userToken, refetchOnMountOrArgChange: true }
  );

  const handleSelect = useCallback(
    value => {
      setFilters(prev => ({ ...prev, gender: value, pageNumber: 1 }));
    },
    [setFilters]
  );

  const onEndReached = useCallback(() => {
    if (data?.hasNextPage) {
      setFilters(prev => ({ ...prev, pageNumber: prev.pageNumber + 1 }));
    }
  }, [data, filters.pageSize]);

  useEffect(() => {
    if (data && !isFetching) {
      if (filters.pageNumber === 1) {
        setState(prev => ({
          ...prev,
          users: data.items,
          isLoading: false,
        }));
      } else {
        setState(prev => ({
          ...prev,
          users: [...prev.users, ...data.items],
        }));
      }
    }

    if (!isFetching && (topError || data?.error || data?.errors)) {
      setState(prev => ({
        ...prev,
        error: errorMessages.data,
        isLoading: false,
      }));
    }
  }, [data, isFetching, topError]);

  const renderHeader = useCallback(
    () => (
      <View style={stylesSchema.header}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          Country Beauty Rankings
        </TextComponent>

        <ToggleList
          defaultValue={toggleGenderAll[0]}
          toggleList={toggleGenderAll}
          handleSelect={handleSelect}
        />
        <View style={stylesSchema.headerTable}>
          <View style={[stylesSchema.headerCell, stylesSchema.place]}>
            <TextComponent styles={{ ...textStyles.bold }}>Place</TextComponent>
          </View>

          <View style={[stylesSchema.headerCell, stylesSchema.country]}>
            <TextComponent styles={{ ...textStyles.bold }}>
              Country
            </TextComponent>
          </View>

          <View style={[stylesSchema.headerCell, stylesSchema.score]}>
            <TextComponent styles={{ ...textStyles.bold, textAlign: 'right' }}>
              Score
            </TextComponent>
          </View>
        </View>
      </View>
    ),
    []
  );

  const renderLoader = useMemo(() => {
    return (
      <View style={stylesSchema.errorContainer}>
        <Loader />
      </View>
    );
  }, [stylesSchema.errorContainer]);

  return (
    <View style={stylesSchema.container}>
      {state.error && !state.isLoading && (
        <View style={stylesSchema.errorContainer}>
          <ErrorMessage error={state.error} />

          <View style={stylesSchema.buttonErrorContainer}>
            <ButtonComponent
              text={'Refresh'}
              isSmall
              handleClick={refetch}
            />
          </View>
        </View>
      )}

      {!state.error &&
        state.isLoading &&
        state.users.length < 1 &&
        renderLoader}

      {!state.error && !state.isLoading && state.users.length > 0 && (
        <FlatList
          data={state.users}
          initialNumToRender={10}
          refreshing={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            !state.error && <ErrorMessage error={errorMessages.noData} />
          }
          ListHeaderComponent={renderHeader()}
          renderItem={({ item, index }) => (
            <CountryItem
              item={item}
              index={index}
            />
          )}
          contentContainerStyle={stylesSchema.flatListContainer}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isFetching ? <Loader /> : null}
          removeClippedSubviews={true}
          maxToRenderPerBatch={5}
          windowSize={10}
        />
      )}
    </View>
  );
};
