import clsx from 'clsx';

import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import config from '~/config';
import MenuSidebar, { MenuSidebarItem } from './MenuSidebar';
import { HomeIcon, ExploreIcon, UsersIcon, LiveIcon, UserIcon } from '~/assets/icon';

function Sidebar() {
    return (
        <div className={clsx(styles.wrapper)}>
            <MenuSidebar>
                <MenuSidebarItem title="For You" to={config.router.home} icon={<HomeIcon />} />
                <MenuSidebarItem title="Explore" to={config.router.explore} icon={<ExploreIcon />} />
                <MenuSidebarItem title="Following" to={config.router.following} icon={<UsersIcon />} />
                <MenuSidebarItem title="Live" to={config.router.live} icon={<LiveIcon />} />
                <MenuSidebarItem title="Profile" to={config.router.profile} icon={<UserIcon />} />
            </MenuSidebar>
            <div className={clsx(styles.textMid)}>
                <p className={clsx(styles.text)}>Log in to follow creators, like videos, and view comments.</p>
                <Button className={styles.bsidebar} to={config.router.login} primary outline>
                    Log in
                </Button>
            </div>
            <div className={clsx(styles.menufooter)}>
                <div className={clsx(styles.mftItem)}>
                    <p className={clsx(styles.mftTitle)}>Company</p>
                    <ul className={clsx(styles.mftSub)}>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Newsroom</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                        <li>
                            <a>Careers</a>
                        </li>
                    </ul>
                </div>
                <div className={clsx(styles.mftItem)}>
                    <p className={clsx(styles.mftTitle)}>Program</p>
                    <ul className={clsx(styles.mftSub)}>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Newsroom</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                        <li>
                            <a>Careers</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
