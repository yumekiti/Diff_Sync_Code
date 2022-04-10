import { Modal, Button, Text } from '@nextui-org/react';

type Props = {
  visible: boolean
  onClick: Function
};

const Welcome = ({ visible, onClick }: Props) => {
  return (
    <Modal
      preventClose
      width={"18rem"}
      open={visible}
    >
      <Modal.Header>
          <Text size={18}>
            Announce
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            誰かが参加したがっている。
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => onClick()}>
            拒否
          </Button>
          <Button auto onClick={() => onClick(true)}>
            許可
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default Welcome