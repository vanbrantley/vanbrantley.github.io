import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter();

    return (
        <div className="flex justify-end p-8 bg-gray-800">
            <header>
                <nav>
                    <ul className="flex items-center space-x-8">
                        <li>
                            <Link href="/">
                                <p className={(router.pathname === '/projects' || router.pathname === '/') ? 'text-white' : 'text-slate-500'}>Projects</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <p className={router.pathname === '/about' ? 'text-white' : 'text-slate-500'}>About</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
