import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';

import { useGetTopQuery } from '../../../store/redux/services/analizeData/analizeDataApi';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../store/redux/features/auth/authSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { ToggleList } from '../../ui/inputs/toggle/ToggleList';
import { ErrorMessage } from '../../ErrorMessage';
import { Loader } from '../../ui/Loader';
import { ButtonComponent } from '../../ui/buttons/ButtonComponent';
import { AllTimeItem } from '../AllTimeItem';

import { textStyles } from '../../../constants/constantsStyle';
import { errorMessages, toggleGenderAll } from '../../../constants/constantsUI';

import { styles } from './style';

export const AllTimeRank = ({ navigation }) => {
  const stylesSchema = styles();

  const [state, setState] = useState({
    error: null,
    isLoading: true,
    isLoadingData: false,
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
  } = useGetTopQuery(
    { ...filters, token: userToken, includeImages: true },
    { skip: !userToken, refetchOnMountOrArgChange: true }
  );

  const handleSelect = useCallback(value => {
    setFilters(prev => ({ ...prev, gender: value, pageNumber: 1 }));
  }, []);

  const handleRefetch = () => {
    setState(prev => ({
      ...prev,
      error: null,
    }));

    refetch();
  };

  const loadMoreData = useCallback(() => {
    if (data?.items) {
      setState(prev => ({
        ...prev,
        users: [...prev.users, ...data.items],
        isLoadingData: false,
      }));
    }
  }, [data?.items]);

  const handleFirstLoading = useCallback(() => {
    setState({ users: data?.items, isLoading: false });
  }, [data?.items]);

  const onEndReached = useCallback(() => {
    if (data?.hasNextPage && !state.isLoadingData) {
      setFilters(prev => ({ ...prev, pageNumber: prev.pageNumber + 1 }));

      setState(prev => ({ ...prev, isLoadingData: true }));
    }
  }, [data?.hasNextPage]);

  useEffect(() => {
    if (!isFetching) {
      if (topError || data?.error || data?.errors) {
        setState(prev => ({
          ...prev,
          error: errorMessages.data,
          isLoading: false,
        }));
      } else if (filters.pageNumber === 1) {
        handleFirstLoading();
      } else if (state.isLoadingData) {
        loadMoreData();
      }
    }
  }, [topError, isFetching, state.isLoadingData]);

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
          The most beautiful people of All Time
        </TextComponent>

        <ToggleList
          defaultValue={toggleGenderAll[0]}
          toggleList={toggleGenderAll}
          handleSelect={handleSelect}
        />
      </View>
    ),
    [stylesSchema.header, handleSelect]
  );

  const RenderLoader = React.memo(({ styles }) => (
    <View style={styles.errorContainer}>
      <Loader />
    </View>
  ));

  const renderItem = useCallback(
    ({ item, index }) => {
      return <AllTimeItem index={index} filters={filters} item={item} />;
    },
    [state.users, navigation]
  );

  return (
    <View style={stylesSchema.container}>
      {state.error && !state.isLoading && (
        <View style={stylesSchema.errorContainer}>
          <ErrorMessage error={state.error} />

          <View style={stylesSchema.buttonErrorContainer}>
            <ButtonComponent
              text={'Refresh'}
              isSmall
              handleClick={handleRefetch}
            />
          </View>
        </View>
      )}

      {state.isLoading && !state.error && <RenderLoader styles={stylesSchema} />}

      {!state.isLoading && (
        <FlatList
          data={state.users}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          keyExtractor={item => item.id.toString()}
          refreshing={true}
          ListEmptyComponent={
            !state.error && <ErrorMessage error={errorMessages.noData} />
          }
          ListHeaderComponent={renderHeader()}
          renderItem={renderItem}
          contentContainerStyle={stylesSchema.flatListContainer}
          columnWrapperStyle={{ gap: 10 }}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={state.isLoadingData ? <Loader /> : null}
          removeClippedSubviews={true}
          maxToRenderPerBatch={5}
          windowSize={10}
        />
      )}
    </View>
  );
};
