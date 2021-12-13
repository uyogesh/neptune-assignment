import Image from 'next/image'
import HeaderLogo from '../../public/nep-logo.svg'

const Layout: React.FC = ({ children }) => {
    return (
        <div className="layout">
            <Image src={HeaderLogo} alt="header-logo" layout="fixed" />
            <div className="layout-content">{children}</div>
        </div>
    );
    }

export default Layout