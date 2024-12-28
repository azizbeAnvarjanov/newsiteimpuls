import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import NavDropdowns from '../app/(customComponents)/NavDropdowns'

export default function Header() {


  const t = useTranslations('IndexPage');




  return (
    <header className='p-4'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>{t('institut')}</Link>
        <LocalSwitcher />
        <NavDropdowns translation="ssss"/>
      </nav>
    </header>
  );
}
