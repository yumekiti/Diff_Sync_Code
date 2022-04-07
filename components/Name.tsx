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
    <>
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
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Name