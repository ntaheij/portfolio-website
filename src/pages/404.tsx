import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center py-32 font-sans">
      <h1 className="font-sans">Sorry, that page does not exist 😪</h1>
      <p className="mt-2 font-sans">Return <Link href={"/"} className="underline" >back</Link> to the homepage.</p>
    </section>
  )
}
