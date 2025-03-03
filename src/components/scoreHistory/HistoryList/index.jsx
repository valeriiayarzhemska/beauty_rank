import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';

import { useSelector } from 'react-redux';
import { selectToken } from '../../../store/redux/features/auth/authSelectors';
import { useGetAccountAnalysesQuery } from '../../../store/redux/services/user/userApi';

import { TextComponent } from '../../ui/TextComponent';
import { ErrorMessage } from '../../ErrorMessage';
import { Loader } from '../../ui/Loader';
import { ButtonComponent } from '../../ui/buttons/ButtonComponent';
import { HistoryItem } from '../HistoryItem';

import { textStyles } from '../../../constants/constantsStyle';
import { errorMessages } from '../../../constants/constantsUI';

import { styles } from './style';

export const HistoryList = ({ navigation }) => {
  const stylesSchema = styles();

  const [state, setState] = useState({
    error: null,
    isLoadingData: false,
    isLoading: true,
    analyses: [],
  });
  const [filters, setFilters] = useState({
    pageSize: 10,
    pageNumber: 1,
  });

  const userToken = useSelector(selectToken);

  const {
    data,
    isFetching,
    error: analysesError,
    refetch,
  } = useGetAccountAnalysesQuery(
    {
      token: userToken,
      ...filters,
    },
    { skip: !userToken, refetchOnMountOrArgChange: true }
  );

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
        analyses: [...prev.analyses, ...data.items],
        isLoadingData: false,
      }));
    }
  }, [data?.items]);

  const handleFirstLoading = useCallback(() => {
    setState({ analyses: data?.items, isLoading: false });
  }, [data?.items]);

  const onEndReached = useCallback(() => {
    if (data?.hasNextPage && !state.isLoadingData) {
      setFilters(prev => ({ ...prev, pageNumber: prev.pageNumber + 1 }));

      setState(prev => ({ ...prev, isLoadingData: true }));
    }
  }, [data?.hasNextPage]);

  useEffect(() => {
    if (!isFetching) {
      if (analysesError || data?.error || data?.errors) {
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
  }, [analysesError, isFetching, state.isLoadingData]);

  const RenderHeader = React.memo(({ styles }) => (
    <View style={styles.header}>
      <TextComponent
        styles={{
          ...textStyles.bold,
          fontSize: 24,
          textAlign: 'center',
        }}
      >
        Your Beauty Score History
      </TextComponent>
    </View>
  ));

  const RenderLoader = React.memo(({ styles }) => (
    <View style={styles.errorContainer}>
      <Loader />
    </View>
  ));

  const renderItem = useCallback(
    ({ item, index }) => {
      return item?.position ? (
        <HistoryItem
          item={item}
          isLast={index === state.analyses.length - 1}
          navigation={navigation}
        />
      ) : null;
    },
    [state.analyses, navigation]
  );

  return (
    <View style={stylesSchema.container}>
      {state.error && !state.isLoading && (
        <View style={stylesSchema.errorContainer}>
          <ErrorMessage error={state.error} />

          <View style={stylesSchema.buttonErrorContainer}>
            <ButtonComponent
              text={'Refresh'}
              isSmall={true}
              handleClick={handleRefetch}
            />
          </View>
        </View>
      )}

      {state.isLoading && !state.error && (
        <RenderLoader styles={stylesSchema} />
      )}

      {!state.isLoading && (
        <FlatList
          data={state.analyses}
          initialNumToRender={10}
          refreshing={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) =>
            item?.createdDate?.toString() || index.toString()
          }
          ListEmptyComponent={
            !state.error && <ErrorMessage error={errorMessages.noData} />
          }
          ListHeaderComponent={<RenderHeader styles={stylesSchema} />}
          renderItem={renderItem}
          contentContainerStyle={stylesSchema.flatListContainer}
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
