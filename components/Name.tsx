import style from '../styles/Name.module.css';
import { Modal, Text, Button, Input } from '@nextui-org/react';

type Props = {
  name: string;
  onChange: Function;
  visible: boolean
  setVisible: Function
};

const Name = ({ name, onChange, visible, setVisible }: Props) => {
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div className={style.body}>
      <Text size={18} className={style.name} >
        Name : &nbsp;
        <Text size={18} h4 >{name ? name : 'no_name'}</Text>
      </Text>
      <Modal
        preventClose
        blur
        open={visible}
        onClose={closeHandler}
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
                closeHandler()
              }}
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto
            onClick={closeHandler}
          >
            Join
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Name