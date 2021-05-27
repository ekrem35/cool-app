import React from 'react';
import {Modal} from 'react-native';
import {Content, Spinner as NBSpinner} from 'native-base';
import styles from './styles';

interface SpinnerProps {
  visible?: boolean;
}

/**
 * ActivityIndicator component
 * @param props false is default for `visible` prop
 * @returns JSX.Elemet
 */

const Spinner = (props: SpinnerProps) => {
  return (
    <Modal visible={props.visible || false} animationType="slide" transparent>
      <Content contentContainerStyle={styles.content}>
        <NBSpinner color="#fff" />
      </Content>
    </Modal>
  );
};

export default Spinner;
