import style from '../styles/Name.module.css';
import { Modal, Text, Button, Input } from '@nextui-org/react';

type Props = {
  name: string;
  onChange: Function;
  visible: boolean
  onClick: Function
  names: Array<string>
};

const Name = ({ name, onChange, visible, onClick, names }: Props) => {
  return (
    <div className={style.body}>
      <Text size={18} className={style.name} >
        Name : &nbsp;
        <Text size={20} h4 >{name ? name : 'no_name'}</Text>
      </Text>

      <Text size={18}>
        <div className={style.member}>
          Member : &nbsp;
          {names.map((value) => {
            return (
              <Text size={20} h4 >{value},&nbsp;</Text>
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
          <Text size={18}>
            Welcome&nbsp;to&nbsp;
            <Text b size={18}>
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
            onChange={(e) => {
              onChange(e.target.value)
            }}
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