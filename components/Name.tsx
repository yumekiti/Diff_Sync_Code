import style from '../styles/Name.module.css';
import { Modal, Text, Button, Input } from '@nextui-org/react';

type Props = {
  name: string;
  onChange: Function;
  visible: boolean;
  onClick: Function;
  names: Array<string>;
};

const Name = ({ name, onChange, visible, onClick, names }: Props) => {
  return (
    <div className={style.body}>
      <div className={style.name}>
        <Text>Name :&nbsp;</Text>
        <Text h4>{name}</Text>
      </div>

      <div className={style.member}>
        <Text>Member :</Text>
        {names.map((value, index) => {
          return (
            <Text h4 key={index}>
              {value}
            </Text>
          );
        })}
      </div>

      <Modal preventClose blur open={visible}>
        <Modal.Header>
          <Text>
            Welcome&nbsp;to&nbsp;
            <Text b>Diff_Sync_Code</Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Your Name'
            value={name}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key == 'Enter') {
                onClick(name, false);
              }
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={() => onClick(name, false)}>
            Join
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Name;
