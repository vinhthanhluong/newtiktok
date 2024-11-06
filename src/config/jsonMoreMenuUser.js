import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faGear, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import jsonMoreMenu from './jsonMoreMenu';

const userAuthDefault = JSON.parse(localStorage.getItem('token')) ?? '';

const MENU_MORES_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: `/@${userAuthDefault.nickname}`,
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
        to: '/logout',
    },
];

export default MENU_MORES_USER;
