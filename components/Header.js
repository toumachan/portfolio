import Link from "next/link";

export function Header() {
    return (
      <>
        <header>
            <nav>
                <ul>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="./about/">ABOUT</Link></li>
                    <li><Link href="#portfolio">Portfolio</Link></li>
                    <li><Link href="./contact/">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
      </>
    )
}