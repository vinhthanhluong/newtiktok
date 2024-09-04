import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faGear, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import jsonMoreMenu from './jsonMoreMenu';

const MENU_MORES_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/getcoins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...jsonMoreMenu,
    {
        icon: <FontAwesomeIcon icon={faRightToBracket} />,
        title: 'Log out',
        to: '/',
    },
];

export default MENU_MORES_USER;
