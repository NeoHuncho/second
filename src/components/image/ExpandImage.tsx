import { Image, Modal } from "@mantine/core"

interface Props {
    src: string
    opened: boolean
    setOpened: (opened: boolean) => void
    alt: string
}
const ExpandImage = ({ alt, src, opened, setOpened }: Props) => {
    return (
        <Modal classNames={{ header: 'mb-0', modal: 'p-0', close: 'bg-white hover:bg-slate-300 absolute top-1 right-1 z-10 text-black ' }} opened={opened} onClose={() => setOpened(false)}>
            <Image src={src} alt={alt} />
        </Modal>
    )

}
export default ExpandImage