import { ReactNode } from 'react'

type Props = { children: ReactNode }

export const AppMain = (props: Props) => {
    const { children } = props
    return <div>{children}</div>
}
