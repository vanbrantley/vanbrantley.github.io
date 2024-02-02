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
                                <p className={(router.pathname === '/') ? 'text-white' : 'text-slate-500'}>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/page2">
                                <p className={router.pathname === '/page2' ? 'text-white' : 'text-slate-500'}>Page 2</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
