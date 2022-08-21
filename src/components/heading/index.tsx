

interface HeadingProps{
    heading: string;
}


export const Heading = ({heading}:HeadingProps): JSX.Element => {

    return (
        <h1 className="heading">
            <span>{heading}</span>
        </h1>
    )
}
