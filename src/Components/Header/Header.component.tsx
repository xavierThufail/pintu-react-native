import React from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';

import styles from './Header.component.styles';
import type { HeaderProps, ModalHelpProps } from './Header.component.types';

const BackgroundTransparent = () => (
  <View style={styles.backgroundTransparent}/>
);

const ModalLabel = () => (
  <View style={styles.flexRowSpaceBetweenAlignCenter}>
    <Text style={styles.fontSmall}>Sell Price</Text>
    <Text style={[styles.fontSmall, styles.bold]}>Mid Price</Text>
    <Text style={styles.fontSmall}>Buy Price</Text>
  </View>
);

const ModalLine = () => (
  <View style={[styles.flexRowSpaceBetweenAlignCenter, styles.containerLine]}>
    <View style={styles.horizontalLine} />
    <View style={[styles.verticalLine, styles.verticalLineBorder]} />
    <View style={[styles.verticalLine, styles.verticalLineCenter]} />
    <View style={[styles.verticalLine, styles.verticalLineBorder]} />
  </View>
);

const ModalContent = () => (
  <View style={[styles.flexCentered, styles.modalContent]}>
    <Text style={[styles.fontStandard, styles.bold]}>The Price Shown is a Mid Price</Text>
    <Text style={[styles.fontStandard, styles.textCenter]}>Mid Price is not buy nor selling price. Final buy and selling price will be calculated when you're making transactions.</Text>
  </View>
);

const ModalButton = ({ onPress }: ModalHelpProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.flexCentered, styles.buttonModal]}>
    <Text style={[styles.fontStandard, styles.bold, styles.whiteColor]}>Ok, I Understand</Text>
  </TouchableOpacity>
);

const ModalContainer = (props: ModalHelpProps) => (
  <View style={[styles.flexCentered, styles.fullScreen]}>
    <View style={styles.containerModal}>
      <ModalLabel />
      <ModalLine />
      <ModalContent />
      <ModalButton {...props} />
    </View>
  </View>
);

const ModalHelp = (props: ModalHelpProps) => {
  const { open } = props;

  return (
    <React.Fragment>
      {open && <BackgroundTransparent />}
      <Modal
        transparent
        visible={open}
        animationType='slide'
      >
        <ModalContainer {...props} />
      </Modal>
    </React.Fragment>
  );
};

const Percentage = ({ percentage }: HeaderProps) => {
  const isMinus = percentage.includes('-');
  const color = isMinus ? '#E4403F' : '#25a764';

  return (
    <View style={styles.containerPercentage}>
      <View style={[styles.triangle, isMinus ? styles.red : styles.green]}/>
      <Text style={[styles.fontStandard, styles.weight500, { color }]}>{(isMinus ? percentage.slice(1) : percentage) + '%'}</Text>
    </View>
  );
};

const HeaderPrice = (props: HeaderProps) => (
  <View>
    <Text style={[styles.fontSmall, styles.colorSecondary]}>{`${props.currencyName} Price`}</Text>
    <View style={styles.containerPrice}>
      <Text style={[styles.fontHeadline, styles.bold]}>{props.price}</Text>
      <Percentage {...props} />
    </View>
  </View>
);

const QuestionIcon = () => (
  <View style={[styles.flexCentered, styles.containerHelp]}>
    <Text style={[styles.blueColor, styles.bold]}>?</Text>
  </View>
);

const HeaderContent = (props: HeaderProps & ModalHelpProps) => {
  const { open: _, onPress, ...restProps } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.flexRowSpaceBetweenAlignCenter, styles.containerHeader]}>
      <HeaderPrice {...restProps} />
      <QuestionIcon />
    </TouchableOpacity>
  );
};

const Header = (props: HeaderProps) => {
  const [visible, setVisible] = React.useState(false);

  const openModal = () => setVisible(true);

  const closeModal = () => setVisible(false);

  return (
    <React.Fragment>
      <HeaderContent {...props} open={visible} onPress={openModal} />
      <ModalHelp open={visible} onPress={closeModal} />
    </React.Fragment>
  );
};

Header.displayName = 'Header';

export default Header;
