import style from '../styles/Name.module.css';
import { Text } from '@nextui-org/react';

type Props = {
  name: string;
  onChange: Function;
};

const Name = ({ name, onChange }: Props) => {
  return (
    <div className={style.name}>
      <Text h4 className={style.title} >your name</Text>
      <input type="text" value={name} onChange={(e) => {
        onChange(e.target.value)
      }} />
    </div>
  )
}

export default Name