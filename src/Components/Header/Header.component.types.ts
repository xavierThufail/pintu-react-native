export type ModalHelpProps = {
  open: boolean;
  onPress: () => void;
};

export type HeaderProps = {
  price: string;
  percentage: string;
  currencyName: string;
};

export type HeaderContentProps = {
  onPress: () => void;
} & HeaderProps;
