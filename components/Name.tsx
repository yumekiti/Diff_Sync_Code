import style from '../styles/Name.module.css';
import { Modal, Text, Button, Input } from '@nextui-org/react';

type Props = {
  name: string;
  visible: boolean
  onClick: Function
  names: Array<string>
};

const Name = ({ name, visible, onClick, names }: Props) => {
  return (
    <div className={style.body}>
      <Text size={16} className={style.name} >
        Name :&nbsp;
        <Text size={16} h4 >{name}</Text>
      </Text>

      <Text size={16}>
        <div className={style.member}>
          Member :&nbsp;
          {names.map((value) => {
            return (
              <Text size={16} h4 >{value}</Text>
            )
          })}
        </div>
      </Text>

      <Modal
        preventClose
        blur
        open={visible}
      >
        <Modal.Header>
          <Text size={16}>
            Welcome&nbsp;to&nbsp;
            <Text b size={16}>
              Diff_Sync_Code
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Your Name"
            value={name}
            onKeyPress={(e) => {
              if (e.key == 'Enter') {
                onClick(name, false)
              }}
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto
            onClick={() => onClick(name, false)}
          >
            Join
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Name