import type { TitleOrder } from "@mantine/core";
import { Title } from "@mantine/core";

interface Props {
    textOrder?: TitleOrder,
    onClick?: () => void
    className?: string
}

function Logo({ textOrder = 1, onClick, className = '' }: Props) {
    return <div onClick={onClick} className={`px-4 py-1 rounded-3xl w-fit ${className} `} style={{ backgroundColor: "#1a7474" }}>
        <Title order={textOrder} className='text-white tracking-widest select-none ' >
            SECONDD
        </Title>
    </div >;
}
export default Logo