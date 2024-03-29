import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCardModal } from "@/hooks/use-card-modal";

const CardModal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>I&apos;m a modal</DialogContent>
    </Dialog>
  );
};

export default CardModal;
