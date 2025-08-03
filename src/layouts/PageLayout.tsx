import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}
export default function PageLayout(props: Props) {
    const {children} = props
    return (
    <div className="grid p-6 grow lg:px-32 justify-items-center">
        {children}
    </div>
    )
}