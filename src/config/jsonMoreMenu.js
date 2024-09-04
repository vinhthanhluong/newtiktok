import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEarthAmerica, faKeyboard, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

const MENU_MORES = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tiếng việt',
                },
                {
                    code: 'ja',
                    title: 'Japanese',
                },
                {
                    code: 'cn',
                    title: 'Chinese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Dark more',
        children: {
            title: 'Dark mode',
            data: [
                {
                    type: 'theme',
                    code: 'light',
                    title: 'Light mode',
                    icon: <FontAwesomeIcon icon={faLightbulb} />,
                },
                {
                    type: 'theme',
                    code: 'dark',
                    title: 'Dark mode',
                    icon: <FontAwesomeIcon icon={faMoon} />,
                },
            ],
        },
    },
];

export default MENU_MORES;
