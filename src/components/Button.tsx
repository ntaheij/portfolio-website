import Link from "next/link";

interface ButtonProps {
  link: string,
  text: string,
  type: "secondary-white" | "primary" | "tertiary" | "secondary-black" | "tertiary-white"
}

const Button = (props: ButtonProps) => {
  return (
    <Link role="button" href={props.link} className={`button ${props.type}`}>
      {props.text}
    </Link>
  )
}

export { Button }
