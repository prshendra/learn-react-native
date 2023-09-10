import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function IconButton({ name, onPress, color, backgroundColor }) {
  return (
    <MaterialIcons.Button
      name={name}
      iconStyle={{ marginRight: 0 }}
      onPress={onPress}
      color={color}
      backgroundColor={backgroundColor}
    />
  );
}

export default IconButton;
