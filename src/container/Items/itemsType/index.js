import React, {useState} from 'react';
import {Picker} from 'react-native';
import {styles} from './style';
const ItemsType = props => {
  const [value, setValue] = useState('');
  const types = [
    {Id: 0, Name: 'All', Value: ''},
    {Id: 1, Name: 'Free-Ebook', Value: 'Free'},
    {Id: 2, Name: 'Ebook', Value: 'Ebbok'},
  ];

  const setType = item => {
    setValue(item);
    props.setTypeName(item);
  };
  return (
    <Picker style={styles.picker} selectedValue={value} onValueChange={setType}>
      {types.map((s, i) => {
        return <Picker.Item key={i} value={s.Value} label={s.Name} />;
      })}
    </Picker>
  );
};

export default ItemsType;
