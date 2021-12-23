import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';

type TouchableIconProps = {
  name: string;
  size: number;
  color: string;
};

const TouchableIcon = ({ name, size, color }: TouchableIconProps) => {
  const { changeFavIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavIcon(name)}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export { TouchableIcon };
