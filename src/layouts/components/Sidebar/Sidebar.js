import clsx from 'clsx';

import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import config from '~/config';
import MenuSidebar, { MenuSidebarItem } from './MenuSidebar';
import { HomeIcon, ExploreIcon, UsersIcon, LiveIcon, UserIcon } from '~/assets/icon';
import MfooterSidebar from './MfooterSidebar';
import SuggestedAccounts from './SuggestedAccounts';

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
            {/* <div className={clsx(styles.textMid)}>
                <p className={clsx(styles.text)}>Log in to follow creators, like videos, and view comments.</p>
                <Button className={styles.bsidebar} to={config.router.login} primary outline>
                    Log in
                </Button>
            </div>
            <MfooterSidebar /> */}
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </div>
    );
}
export default Sidebar;

Sidebar.protoType = {
    // icon: PropTypes.node.isRequired,
};
