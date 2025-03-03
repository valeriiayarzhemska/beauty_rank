import { Image, View } from 'react-native';

import { TextComponent } from '../TextComponent';
import { ButtonComponent } from '../buttons/ButtonComponent';
import { ErrorMessage } from '../../ErrorMessage';

import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const AcceptComponent = ({
  title = '',
  subtitle = '',
  image = false,
  handleYesClick = () => {},
  handleNoClick = () => {},
  error = null,
}) => {
  const stylesSchema = styles();

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.titles}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          {title}
        </TextComponent>

        <TextComponent
          styles={{
            ...textStyles.regular,
            textAlign: 'center',
          }}
        >
          {subtitle}
        </TextComponent>
      </View>

      {image && (
        <View style={stylesSchema.imageContainer}>
          <Image
            source={image}
            style={stylesSchema.image}
          />
        </View>
      )}

      {error && <ErrorMessage error={error} />}

      <View style={stylesSchema.buttons}>
        <View style={stylesSchema.button}>
          <ButtonComponent
            text={'Yes'}
            handleClick={handleYesClick}
            isSmall
          />
        </View>

        <View style={stylesSchema.button}>
          <ButtonComponent
            text={'No'}
            handleClick={handleNoClick}
            isSmall
          />
        </View>
      </View>
    </View>
  );
};
