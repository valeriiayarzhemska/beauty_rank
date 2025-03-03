import { View } from 'react-native';

import { useSelector } from 'react-redux';
import { selectToken } from '../../../store/redux/features/auth/authSelectors';
import { useGetAccountAnalysesQuery } from '../../../store/redux/services/user/userApi';

import { TextComponent } from '../../ui/TextComponent';
import { DiagramCounters } from '../DiagramCounters';
import { DiagramBar } from '../DiagramBar';
import { Loader } from '../../ui/Loader';
import { ErrorMessage } from '../../ErrorMessage';
import { ButtonComponent } from '../../ui/buttons/ButtonComponent';

import { textStyles } from '../../../constants/constantsStyle';
import { formatDate } from '../../../utils/utils';
import { errorMessages } from '../../../constants/constantsUI';

import { styles } from './style';

export const DiagramStatistics = () => {
  const stylesSchema = styles();

  const userToken = useSelector(selectToken);

  const {
    data,
    isFetching,
    error: statisticsError,
    refetch,
  } = useGetAccountAnalysesQuery(
    { token: userToken, pageSize: 7, pageNumber: 1 },
    { skip: !userToken }
  );

  return (
    <View style={stylesSchema.container}>
      <TextComponent
        styles={{
          ...textStyles.bold,
          fontSize: 24,
          textAlign: 'center',
        }}
      >
        Your beauty rating over time
      </TextComponent>

      {statisticsError ? (
        <View style={stylesSchema.error}>
          <ErrorMessage error={errorMessages.wentWrong} />

          <ButtonComponent
            text={'Refresh'}
            handleClick={refetch}
            isSmall
          />
        </View>
      ) : (
        <View style={stylesSchema.diagramContainer}>
          {data?.items?.length > 0 && !isFetching && <DiagramCounters />}

          {data?.items?.length < 1 && !isFetching && (
            <View style={stylesSchema.noItems}>
              <TextComponent
                styles={{
                  ...textStyles.bold,
                  textAlign: 'center',
                }}
              >
                No analyses were found
              </TextComponent>
            </View>
          )}

          <View style={stylesSchema.diagrams}>
            {isFetching && !statisticsError && <Loader />}

            {!isFetching && data?.items?.length > 0 && (
              <>
                {data.items.map((diagram, index) => {
                  const date = formatDate(diagram.createdDate);

                  return (
                    <>
                      <DiagramBar
                        key={diagram.id}
                        date={date}
                        progress={diagram.beautyScore}
                      />
                    </>
                  );
                })}
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};
