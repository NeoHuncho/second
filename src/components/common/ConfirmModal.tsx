import { Button, Modal, Text } from "@mantine/core";

type Props = {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  text: string;
};

export default function ConfirmModal({
  opened,
  onClose,
  onConfirm,
  text,
}: Props) {
  return (
    <Modal title={text} opened={opened} onClose={onClose}>
      <div className="mt-5 flex flex-col gap-3">
        <Button onClick={onConfirm} color="secondary">
          Confirmer
        </Button>
        <Button variant="subtle" onClick={onClose}>
          Annuler
        </Button>
      </div>
    </Modal>
  );
}
